import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { getProviders, getSession, signIn } from "next-auth/react";

function home({ providers }) {
  return (
    <div className="">
      <header className="flex justify-between p-6 shadow-sm shadow-gray-300 items-center w-screen h-16 border-b-6">
        {/* <Image src="/icons8-google-calendar-48.png" width="48" height="48" /> */}
        <Image
          src="https://rb.gy/0npp0a"
          className="l-4"
          width="194"
          height="36"
        />
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <div className="pl-4">
              <Button
                style={{ backgroundColor: "#1971c2" }}
                variant="contained"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign In
              </Button>
            </div>
          </div>
        ))}
      </header>
      <main className="mt-20  flex flex-col items-center justify-items-center">
        <Image src="/logo-large.png" height="280" width="240" />
        <h1 className="text-[84px] font-weight-100 text-gray-500">
          Google Calendar
        </h1>
      </main>
    </div>
  );
}

export default home;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}
