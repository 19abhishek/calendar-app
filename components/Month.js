import React from "react";
import Day from "./Day";

function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 ">
      {month.map((row, idx) => {
        return (
          <React.Fragment key={idx}>
            {row.map((day, i) => (
              <Day day={day} key={i} />
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Month;
