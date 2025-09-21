import React from "react";

const Rules = () => {
  const RoomDetails = [
    {
      RoomName: "Server Room",
      MinAccessLevel: "2",
      OpenHours: "09:00 - 11:00",
      Cooldown: "15",
    },
    {
      RoomName: "Vault",
      MinAccessLevel: "3",
      OpenHours: "09:00 - 10:00",
      Cooldown: "30",
    },
    {
      RoomName: "R&D Lab",
      MinAccessLevel: "1",
      OpenHours: "08:00 - 12:00",
      Cooldown: "10",
    },
  ];

  return (
    <div className="m-6 md:m-10 bg-white text-gray-800 rounded-2xl shadow-lg p-6 w-full">
      <div className="flex flex-col items-center">
        <header className="text-2xl font-bold text-center mb-2 md:mb-4 text-slate-800">
          HR Access Simulation Tool
        </header>
        <p className="text-sm md:text-base leading-relaxed font-medium text-gray-600 text-center">
          Simulate employee access to secure rooms with time windows and cooldown
          periods.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
          🔐 Room Access Rules
        </h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RoomDetails.map((item, index) => (
            <div
              key={index}
              className="bg-slate-100 rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300"
            >
              <h3 className="font-bold text-lg text-slate-800 mb-3">
                {item.RoomName}
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Min Access Level:</span>{" "}
                  Level {item.MinAccessLevel}
                </p>
                <p>
                  <span className="font-semibold">Open Hours:</span>{" "}
                  {item.OpenHours}
                </p>
                <p>
                  <span className="font-semibold">Cooldown:</span>{" "}
                  {item.Cooldown} minutes
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;
