import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeAccess = () => {
  const [EmployeesReq, setEmployeesReq] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/employees");
        console.log(res.data.data);
        setEmployeesReq(res.data.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="m-2 md:m-4 lg:m-6 xl:m-10 bg-white text-gray-800 rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 w-full max-w-6xl">
      <header className="text-lg md:text-xl font-bold text-center mb-3 md:mb-4 text-slate-800">
        👥 Employee Access Requests
      </header>

      {EmployeesReq.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No employee requests found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {EmployeesReq.map((emp, index) => (
            <div
              key={index}
              className="bg-slate-50 border rounded-lg shadow-sm p-3 hover:shadow-md transition duration-300 text-xs md:text-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-slate-700 truncate">{emp.id}</h3>
                <span className="text-xs px-2 py-1 rounded bg-slate-200 text-slate-600 whitespace-nowrap">
                  Lvl {emp.access_level}
                </span>
              </div>
              <div className="text-gray-600 space-y-1">
                <p className="truncate">
                  <span className="font-medium">Room:</span> {emp.room}
                </p>
                <p>
                  <span className="font-medium">Time:</span> {emp.request_time}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeAccess;