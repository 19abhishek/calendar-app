import React from "react";
import dayjs from "dayjs";
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import { selectedDay } from "../atom/monthAtom";

function Day({ day, val }) {
  const [currentModalState, setCurrentModalState] = useRecoilState(modalState);
  const [currSelectedDay, setCurrentSelectedDay] = useRecoilState(selectedDay);

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
      <div
        className="flex flex-col flex-1 cursor-pointer"
        onClick={() => {
          setCurrentModalState(!currentModalState);
          setCurrentSelectedDay(day);
        }}
      ></div>
    </div>
  );
}

export default Day;
