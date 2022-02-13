import dayjs from "dayjs";
import React from "react";

function SidebarDay({ day, val }) {
  const getCurrentDay = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-100 rounded-full h-6 w-6 cursor-pointer hover:bg-blue-200 "
      : "";
  };
  return (
    <div className="flex flex-col">
      <header className="flex flex-col items-center">
        <p
          className={`text-sm p-2 flex flex-col justify-center items-center ${getCurrentDay()}`}
        >
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
}

export default SidebarDay;
