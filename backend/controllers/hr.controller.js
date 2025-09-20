const EmployeeData = require("../utils/EmployeeData");

module.exports.GetAllEmployess = async (req, res) => {
  try {
    let data = EmployeeData;
    console.log(data);
    if (!data || data.length === 0) {
      res.status(404).json({
        message: "data not found",
      });
    }

    res.status(200).json({
      message: "fetched all data",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports.SimulateAccess = async (req, res) => {
  try {
    let employee = EmployeeData;
    const accessLog = {};
    const roomRules = {
      ServerRoom: { minLevel: 2, open: "09:00", close: "11:00", cooldown: 15 },
      Vault: { minLevel: 3, open: "09:00", close: "10:00", cooldown: 30 },
      "R&D Lab": { minLevel: 1, open: "08:00", close: "12:00", cooldown: 10 },
    };

    function timeToMinutes(t) {
      const [h, m] = t.split(":").map(Number);
      return h * 60 + m;
    }

    const result = employee.map((emp) => {
      const { id, access_level, request_time, room } = emp;
      const rule = roomRules[room];
      const reqTime = timeToMinutes(request_time);
      const closeTime = timeToMinutes(rule.close);
      const openTime = timeToMinutes(rule.open);

      if (access_level < rule.minLevel) {
        return {
          ...emp,
          result: "Denied",
          reason: `Below required level for ${room}`,
        };
      }
      if (reqTime < openTime || reqTime > closeTime) {
        return {
          ...emp,
          result: "Denied",
          reason: `Room closed at ${request_time}`,
        };
      }

      if (!accessLog[id]) accessLog[id] = {};
      if (accessLog[id][room]) {
        const lastTime = accessLog[id][room];
        if (reqTime - lastTime < rule.cooldown) {
          return {
            ...emp,
            result: "Denied",
            reason: `Cooldown: must wait ${rule.cooldown} mins`,
          };
        }
      }
      accessLog[id][room] = reqTime;

      return {
        ...emp,
        result: "Granted",
        reason: `Access granted to ${room}`,
      };
    });

    res.status(200).json({
        message:"process performed",
        result: result
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};
