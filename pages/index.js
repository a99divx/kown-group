import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "../components/Hero";
import About from "./homepage/HomeAbout";
import WhatWeDo from "./homepage/WhatWeDo";
import Sectors from "./homepage/HomeSectors";
import Team from "./homepage/HomeTeam";
import Footer from "@/components/Footer";
import Layout from "../Layout/index";
import Loader from "@/Layout/Loader";
import Message from "./homepage/HomeMessage";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header active={"home"} />
        <Hero
          first={"Seizing Currents,"}
          sec={"Securing Futures"}
          img={"bg-hero-image"}
        />
        <Layout>
          <About />
          <WhatWeDo />
          <Sectors />
          <Message />
          <Team />
        </Layout>
        <Footer />
      </main>
    </>
  );
}
