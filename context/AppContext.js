import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import { labels } from "../atom/labelAtom";
import { useRecoilState } from "recoil";

const AppContext = createContext();

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((event) => (event.id === payload.id ? payload : event));
    case "delete":
      return state.filter((event) => event.id !== payload.id);
    default:
      throw new Error();
  }
}

function initialFunction() {
  if (typeof window === "undefined") {
    return [];
  }
  const storageEvent = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvent ? JSON.parse(storageEvent) : [];
  return parsedEvents;
}

export function AppWrapper({ children }) {
  const [appState, setAppState] = useState({ name: "Abhishek" });
  const [selectedLabels, setSelectedLabels] = useRecoilState(labels);

  const [savedEvents, dispatchEvents] = useReducer(
    savedEventsReducer,
    [],
    initialFunction
  );

  const filteredEvents = useMemo(() => {
    return savedEvents;
  }, [savedEvents, labels]);

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    setSelectedLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.selectedLabel))].map(
        (label) => {
          const currentLabel = prevLabels.find(
            (lbl) => lbl.selectedLabel === label
          );
          return {
            label,
          };
        }
      );
    });
  }, [savedEvents]);

  function updateLabels(labels) {
    setSelectedLabels(
      selectedLabels.map((lbl) =>
        lbl.selectedLabel === labels.selectedLabel ? labels : lbl
      )
    );
  }

  const contextValue = useMemo(() => {
    return [savedEvents, dispatchEvents];
  }, [savedEvents, dispatchEvents]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
