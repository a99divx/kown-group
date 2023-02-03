import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "../pages/homepage/Hero";
import Link from "next/link";
import Layout from "@/Layout";

export default function FrequentlyAskedQuestions() {
  return (
    <>
      <Header />
      <Hero first={"Contact"} sec={"Us"} />
      <Layout>
        <div className="md:mb-20">
          <div className="container m-auto px-5 md:px-12 xl:px-40">
            <div className="w-full mb-10">
              <div className="text-kown-p flex items-center">
                <div className="w-3 h-3 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
                <Link
                  className="text-sm text-kown-s hover:text-kown-p-600 pb-1"
                  href={"/"}
                >
                  Home
                </Link>
              </div>
            </div>
            <h1 className="text-6xl">Contact us page is not ready yet!</h1>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
