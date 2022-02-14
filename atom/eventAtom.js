import { atom } from "recoil";

export const events = atom({
  key: "events",
  default: [],
});

export const selectedEvents = atom({
  key: "selectedEvents",
  default: null,
});
