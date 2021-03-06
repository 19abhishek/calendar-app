import Head from "next/head";

import { getMonth } from "../components/months";
import Header from "../components/Header";
import { getProviders, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import Month from "../components/Month";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  getMonthIndex,
  sidebarCalendarMonth,
  selectedDay,
} from "../atom/monthAtom";
import CreateEvent from "../components/CreateEventModal";
import { modalState } from "../atom/modalAtom";
import { events } from "../atom/eventAtom";
import { useAppContext } from "../context/AppContext";
import dayjs from "dayjs";

export default function Home() {
  console.log("Hello");
  const { data: session } = useSession();
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/home");
    },
  });
  const [monthIndex, setMonthIndex] = useRecoilState(getMonthIndex);
  //console.log(monthIndex);
  const [currentMonth, setCurrentMonth] = useState(getMonth(monthIndex));

  //console.log(getMonth(6));

  //const [monthIndex, setMonthIndex] = useRecoilState(getMonthIndex);

  const [smallCalendarMonth, setSmallCalendarMonth] =
    useRecoilState(sidebarCalendarMonth);

  const [currModalState, setModalState] = useRecoilState(modalState);

  const [currSelectedDay, setCurrentSelectedDay] = useRecoilState(selectedDay);

  const [savedEvents, setSavedEvents] = useRecoilState(events);

  //console.log(localStorage.getItem("savedEvents"));

  // if (typeof window !== "undefined" && !localStorage.getItem("savedEvents")) {
  //   localStorage.setItem("savedEvents", []);
  // }

  const [appState, setAppState] = useAppContext();

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
    // console.log("Hi");
    // console.log(currentMonth);
  }, []);

  //setMonthIndex(dayjs().month())

  //console.log(currentMonth, monthIndex);

  //useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Google calendar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex">
          <Sidebar month={currentMonth} />
          <Month month={currentMonth} />
        </div>
      </div>
      {currModalState && <CreateEvent />}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
