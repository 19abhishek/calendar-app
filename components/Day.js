import React from "react";
import dayjs from "dayjs";

function Day({ day, val }) {
  const getCurrentDay = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-100 rounded-full h-12 w-12 cursor-pointer hover:bg-blue-200 "
      : "";
  };
  return (
    <div className="flex flex-col border border-gray-300 mt-0">
      <header className="flex flex-col items-center">
        {val === 0 && (
          <p className="mt-1 text-gray-700">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p className={`text-md my-1 p-4 flex items-center ${getCurrentDay()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
}

export default Day;
