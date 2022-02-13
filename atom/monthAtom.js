import { atom } from "recoil";
import dayjs from "dayjs";

let currMonthIndex = dayjs().month();

export const getMonthIndex = atom({
  key: "getMonthIndex",
  default: currMonthIndex,
});

export const sidebarCalendarMonth = atom({
  key: "sidebarCalendarMonth",
  default: 0,
});
