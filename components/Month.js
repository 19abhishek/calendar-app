import React from "react";
import Day from "./Day";
import dayjs from "dayjs";

function Month({ month }) {
  return (
    <div className="flex-1 h-[calc(100vh-4rem)] grid grid-cols-7 grid-rows-5 ">
      {month.map((row, idx) => {
        return (
          <React.Fragment key={idx}>
            {row.map((day, i) => (
              <Day day={day} val={idx} key={i} />
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Month;
