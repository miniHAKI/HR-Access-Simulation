import axios from "axios";
import React, { useState } from "react";

const Simulation = () => {
  const [EmployeeAccessDetails, setEmployeeAccessDetails] = useState([]);

  const SimulateBtn = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/simulate");
      console.log(res.data.result);
      setEmployeeAccessDetails(res.data.result);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  return (
    <div className="m-2 md:m-4 lg:m-6 xl:m-10 bg-white text-gray-800 rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 w-full max-w-6xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">
        👥 Employee Access Simulation
      </h2>

      <div className="flex justify-center mb-6">
        <button
          onClick={SimulateBtn}
          className="px-6 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white font-medium rounded-lg shadow-md hover:from-red-500 hover:to-red-600 transition-all duration-200"
        >
          Simulate Employee Access
        </button>
      </div>

      {EmployeeAccessDetails.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3 text-left">Employee ID</th>
                <th className="px-4 py-3 text-left">Access Level</th>
                <th className="px-4 py-3 text-left">Request Time</th>
                <th className="px-4 py-3 text-left">Room</th>
                <th className="px-4 py-3 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              {EmployeeAccessDetails.map((emp, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="px-4 py-3 font-medium">{emp.id}</td>
                  <td className="px-4 py-3">{emp.access_level}</td>
                  <td className="px-4 py-3">{emp.request_time}</td>
                  <td className="px-4 py-3">{emp.room}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        emp.result === "Granted"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {emp.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {EmployeeAccessDetails.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No simulation data yet. Click the button above to run the simulation.
        </p>
      )}
    </div>
  );
};

export default Simulation;
