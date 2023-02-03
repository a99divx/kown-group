import "@/styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Router from "next/router";
import PageLoader from "../Layout/Loader";

const theme = createTheme({
  type: "dark",
});

export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <NextUIProvider theme={theme}>
        {loading ? <PageLoader /> : <Component {...pageProps} />}
      </NextUIProvider>
    </AnimatePresence>
  );
}
