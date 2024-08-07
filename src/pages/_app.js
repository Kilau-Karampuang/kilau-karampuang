import Footer from "@/Components/Footer";
import "@/styles/globals.css";
import Loading from "@/Components/Loading";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import { LoadingContext, LoadingProvider } from "@/Context/LoadingContext";
import { useContext } from "react";

function LoadingWrapper({ children }) {
  const { isLoading } = useContext(LoadingContext);
  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kilau Karampuang</title>
        <meta name="description" content="Pulau Karampuang" />
      </Head>
      <NextUIProvider className="max-w-screen overflow-hidden">
        <LoadingProvider>
          <LoadingWrapper>
            <Component {...pageProps} />
            <Footer />
          </LoadingWrapper>
        </LoadingProvider>
      </NextUIProvider>
    </>
  );
}
