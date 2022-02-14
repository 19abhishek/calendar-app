import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { AppWrapper } from "../context/AppContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <RecoilRoot>
      <AppWrapper>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </AppWrapper>
    </RecoilRoot>
  );
}
