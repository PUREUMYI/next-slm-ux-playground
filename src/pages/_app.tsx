import { Header } from "@/components/Header";
import { SideMenu } from "@/components/SideMenu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[220px_1fr]">
      <SideMenu />
      <div className="flex flex-col">
        <Header />
        <Component {...pageProps} />
      </div>
      {/* <AboutDialog />
      <Alert /> */}
    </div>
  );
}
