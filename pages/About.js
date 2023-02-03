import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/Layout";
import Image from "next/image";
import Link from "next/link";
import Team from "./homepage/HomeTeam";
const imageLoader = ({ src, width, quality }) => {
  return `https://kown-group.vercel.app/${src}?w=${width}&q=${quality || 75}`;
};

export default function Aboutus() {
  return (
    <>
      <Header />
      <Layout>
        <div id="about" className="md:mb-20">
          <div className="container m-auto py-12 pb-0 px-5 md:px-12 xl:px-40 ">
            <div className="w-full mb-20">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-20">
              <div>
                <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p pb-10">
                  The Group
                </h1>
                <p className="mb-5 text-lg text-kown-s-900">
                  Kown Capital was founded in 2022 in Doha, Qatar, with one goal
                  in mind: to leverage on the thriving regional and
                  international markets and build on unique possibilities. Under
                  the leadership of one of the most adept investors in Qatar,
                  Kown Capital’s dynamically experienced team invest in projects
                  with high return potential across all sectors including:
                  manufacturing, education, healthcare, real estate,
                  agricultural, fast-moving consumer goods (FMCG), and
                  construction.
                </p>
                <p className="text-lg text-kown-s-900">
                  The firm’s long-term objective is to build enterprises in
                  various industries and achieve vertical integration amongst
                  its subsidiaries and affiliates, while continuing to increase
                  long-term returns by adopting a pragmatic approach to managing
                  new investments.
                </p>
              </div>
              <div className="w-full">
                <Image
                  loader={imageLoader}
                  alt="The Group"
                  src="/images/2.png"
                  width={600}
                  height={500}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-20">
              <div>
                <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p pb-10">
                  Vision.
                </h1>
              </div>
              <div className="w-full">
                <p className="mb-5 text-4xl leading-10 font-extralight text-kown-s-900">
                  To drive strong financial performance, ensure feasible
                  investment in multiple sectors and industries, and make a
                  healthy impact on the markets of the MENA and further afield.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 ">
              <div>
                <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p pb-10">
                  Mission.
                </h1>
              </div>
              <div className="w-full">
                <p className="mb-5 text-4xl leading-10 font-extralight text-kown-s-900">
                  Prioritizing investments that have a healthy impact on the
                  environment and communities, we aim to build long-term value
                  for our shareholders while making a meaningful difference in
                  the world.
                </p>
              </div>
            </div>
            <div className="mb-20">
              <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p pb-20">
                Values
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
                <div className="">
                  <div className="">
                    <Image
                      loader={imageLoader}
                      alt="The Group"
                      src="/images/1.png"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="text-3xl font-extrabold text-kown-p mb-5">
                    Integrity
                  </div>
                  <p>
                    We will manage our business honestly and ethically. We will
                    always do what is right and take personal responsibility for
                    our actions.
                  </p>
                </div>
                <div className="">
                  <div className="">
                    <Image
                      loader={imageLoader}
                      alt="The Group"
                      src="/images/2.png"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="text-3xl font-extrabold text-kown-p mb-5">
                    Teamwork
                  </div>
                  <p>
                    We will work together as a team using our employee’s unique
                    talents and skills in a spirit of cooperation and trust,
                    holding each other responsible for achieving our mission.
                  </p>
                </div>
                <div className="">
                  <div className="">
                    <Image
                      loader={imageLoader}
                      alt="The Group"
                      src="/images/3.png"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="text-3xl font-extrabold text-kown-p mb-5">
                    Commitment
                  </div>
                  <p>
                    We will commit ourselves to the success of our company, to
                    the pursuit of excellence, to the growth of our employees,
                    and to providing an industry-leading quality service to our
                    stakeholders.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-20">
              <div className="w-full">
                <Image
                  loader={imageLoader}
                  alt="The Group"
                  src="/images/2.png"
                  width={600}
                  height={500}
                />
              </div>
              <div>
                <h1 className="title text-3xl font-extrabold font-extrabol text-kown-p pb-10">
                  What Defines Us
                </h1>
                <p className="mb-5 text-lg text-kown-s-900">
                  With a rich knowledge in regional market landscapes, Kown
                  Capital furnishes and sustains a large portfolio of products
                  and services. Our portfolio is built based on well-researched
                  and meticulous investment calls. The root of Kown Capital’s
                  resilience is its determination to continually operate from
                  its fundamental mission, seizing opportunities in real-time
                  and fostering success for individuals inside the business,
                  communities, the Middle East, and further afield.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Team />
      </Layout>
      <Footer />
    </>
  );
}
