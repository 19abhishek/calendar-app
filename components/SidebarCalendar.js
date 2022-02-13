import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getMonthIndex } from "../atom/monthAtom";
import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Day from "./Day";
import { getMonth } from "./months";
import SidebarDay from "./SidebarDay";

function SidebarCalendar({ month }) {
  const monthIndex = useRecoilValue(getMonthIndex);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  const handlePreviousMonth = () => {
    setCurrentMonthIndex(currentMonthIndex - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex(currentMonthIndex + 1);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-md text-gray-700">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </span>
        <IconButton onClick={handlePreviousMonth} aria-label="Left icon">
          <ChevronLeftIcon />
        </IconButton>
        <IconButton onClick={handleNextMonth} aria-label="Right icon">
          <ChevronRightIcon />
        </IconButton>
      </div>
      <div className="grid items-center justify-center grid-cols-7 grid-rows-5">
        <React.Fragment>
          {currentMonth[0].map((day, idx) => {
            return (
              <span className="text-dm ml-2 text-gray-500" key={idx}>
                {day.format("dd").toUpperCase().charAt(0)}
              </span>
            );
          })}
        </React.Fragment>
        {currentMonth.map((row, idx) => {
          return (
            <React.Fragment key={Math.random()}>
              {row.map((day, i) => (
                <SidebarDay day={day} val={idx} key={i} />
              ))}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default SidebarCalendar;
