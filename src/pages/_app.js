import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Kilau Karampuang</title>
      <meta name="description" content="Pulau Karampuang" />
    </Head>
      <NextUIProvider className="max-w-screen overflow-hidden">
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
