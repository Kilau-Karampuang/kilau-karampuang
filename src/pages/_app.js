import { LoadingContext, LoadingProvider } from "@/Context/LoadingContext";
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/react";
import { useContext } from "react";
import Loading from "@/Components/Loading";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import "@mdxeditor/editor/style.css";
import "@/styles/globals.css";

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
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </LoadingWrapper>
        </LoadingProvider>
      </NextUIProvider>
    </>
  );
}
