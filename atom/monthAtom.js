import { atom } from "recoil";
import dayjs from "dayjs";

//let currMonthIndex = dayjs().month();

export const getMonthIndex = atom({
  key: "getMonthIndex",
  default: dayjs().month(),
});

export const sidebarCalendarMonth = atom({
  key: "sidebarCalendarMonth",
  default: 0,
});

export const selectedDay = atom({
  key: "selectedDay",
  default: dayjs(),
});
