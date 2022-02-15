import { atom } from "recoil";
import dayjs from "dayjs";
import Day from "../components/Day";

let currMonthIndex = dayjs().month();

export const getMonthIndex = atom({
  key: "getMonthIndex",
  default: currMonthIndex,
});

export const sidebarCalendarMonth = atom({
  key: "sidebarCalendarMonth",
  default: currMonthIndex,
});

export const selectedDay = atom({
  key: "selectedDay",
  default: dayjs(),
});
