import React from "react";
import Image from "next/image";
import SidebarCalendar from "./SidebarCalendar";
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";

function Sidebar({ month }) {
  const [currentModalState, setCurrentModalState] = useRecoilState(modalState);

  return (
    <div className="flex flex-col items-center gap-12 p-4 mt-4 w-60">
      <button
        className="flex items-center gap-4 p-2 border-2 w-36 rounded-2xl hover:shadow-xl"
        onClick={() => setCurrentModalState(!currentModalState)}
      >
        <Image src="https://rb.gy/zeuold" width={36} height={36} />
        <span className="text-xl text-gray-500">Create</span>
      </button>
      <SidebarCalendar />
    </div>
  );
}

export default Sidebar;
