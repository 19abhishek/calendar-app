import React from "react";

function Day({ day, val }) {
  return (
    <div className="flex flex-col border border-gray-300">
      <header className="flex flex-col items-center">
        {val === 0 && <p className="">{day.format("ddd").toUpperCase()}</p>}
        <p>{day.format("DD")}</p>
      </header>
    </div>
  );
}

export default Day;
