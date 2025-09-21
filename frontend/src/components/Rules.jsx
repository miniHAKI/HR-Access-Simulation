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
    <div className="m-2 md:m-4 lg:m-6 xl:m-10 bg-white text-gray-800 rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 w-full max-w-6xl">
      <div className="flex flex-col items-center">
        <header className="text-xl md:text-2xl font-bold text-center mb-2 md:mb-4 text-slate-800">
          HR Access Simulation Tool
        </header>
        <p className="text-xs md:text-sm lg:text-base leading-relaxed font-medium text-gray-600 text-center">
          Simulate employee access to secure rooms with time windows and cooldown
          periods.
        </p>
      </div>

      <div className="mt-4 md:mt-6">
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 flex items-center gap-2">
          🔐 Room Access Rules
        </h3>
        <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {RoomDetails.map((item, index) => (
            <div
              key={index}
              className="bg-slate-100 rounded-lg md:rounded-xl shadow-md p-3 md:p-4 lg:p-5 hover:shadow-xl transition duration-300"
            >
              <h3 className="font-bold text-base md:text-lg text-slate-800 mb-2 md:mb-3">
                {item.RoomName}
              </h3>
              <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-700">
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