import dayjs from "dayjs";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { getMonthIndex, sidebarCalendarMonth } from "../atom/monthAtom";

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
          className={`text-sm p-2 flex flex-col cursor-pointer justify-center items-center ${getCurrentDay()}`}
          onClick={() => {
            setSmallCalendarMonth(currentMonthIndex);
          }}
        >
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
}

export default SidebarDay;
