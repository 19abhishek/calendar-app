import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import { selectedDay } from "../atom/monthAtom";
import { useAppContext } from "../context/AppContext";

function Day({ day, val }) {
  const [currentModalState, setCurrentModalState] = useRecoilState(modalState);
  const [currSelectedDay, setCurrentSelectedDay] = useRecoilState(selectedDay);

  const [savedEvents, dispatchEvents] = useAppContext();

  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents]);

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
        className="flex flex-col gap-2 flex-1 cursor-pointer"
        onClick={() => {
          setCurrentModalState(!currentModalState);
          setCurrentSelectedDay(day);
        }}
      >
        {dayEvents.map((event, idx) => {
          return (
            <div
              className={`${event.selectedLabel} p-1 rounded-lg text-gray-100 flex-wrap truncate`}
              key={idx}
            >
              {event.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Day;
