import React from "react";
import { useRecoilState } from "recoil";
import { labels } from "../atom/labelAtom";

function Labels() {
  const [selectedLabels, setSelectedLabels] = useRecoilState(labels);
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-gray-500 font-bold mt-5">Labels</p>
      <div className="flex flex-row gap-2 mt-5">
        {selectedLabels.map(({ label: lbl }, idx) => (
          <div
            key={idx}
            className={`rounded-full  w-8 h-8 ${lbl} items-center `}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Labels;
