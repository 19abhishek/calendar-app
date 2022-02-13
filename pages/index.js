import Head from "next/head";

import { getMonth } from "../components/months";
import Header from "../components/Header";
import { getProviders, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import Month from "../components/Month";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getMonthIndex, sidebarCalendarMonth } from "../atom/monthAtom";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/home");
    },
  });
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [monthIndex, setMonthIndex] = useRecoilState(getMonthIndex);

  const [smallCalendarMonth, setSmallCalendarMonth] =
    useRecoilState(sidebarCalendarMonth);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

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
