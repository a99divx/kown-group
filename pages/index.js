import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "./homepage/Hero";
import About from "./homepage/HomeAbout";
import WhatWeDo from "./homepage/WhatWeDo";
import Sectors from "./homepage/HomeSectors";
import Team from "./homepage/HomeTeam";
import Footer from "@/components/Footer";
import Layout from "../Layout/index";
import Loader from "@/Layout/Loader";

export default function Home() {
  return (
    <>
      <Head>
        <title>KOWN Group</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Hero first={"Seizing Currents,"} sec={"Securing Futures."} />
        <Layout>
          <About />
          <WhatWeDo />
          <Sectors />
          <Team />
        </Layout>
        <Footer />
      </main>
    </>
  );
}
