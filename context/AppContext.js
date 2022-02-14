import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

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

  const [savedEvents, dispatchEvents] = useReducer(
    savedEventsReducer,
    [],
    initialFunction
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

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
