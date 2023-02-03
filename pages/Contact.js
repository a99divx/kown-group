import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "../components/Hero";
import BackHome from "@/components/BackHome";
import Link from "next/link";
import Layout from "@/Layout";

export default function FrequentlyAskedQuestions() {
  return (
    <>
      <Header active={"contact"} />
      <BackHome />
      <Hero first={"Contact"} sec={"Us"} />
      <Layout>
        <div className="md:mb-20">
          <div className="container m-auto px-5 md:px-12 xl:px-40 mb-20">
            <h1 className="text-6xl">Contact us page is not ready yet!</h1>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
