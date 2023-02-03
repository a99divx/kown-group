import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/Layout";
import Image from "next/image";
import Link from "next/link";
const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};
const list = [
  {
    title: "Real Estate Development",
    img: "1.png",
    url: "/sectors/realestate",
  },
  {
    title: "Education",
    img: "2.png",
    url: "/sectors/edu",
  },
  {
    title: "Hospitality",
    img: "3.png",
    url: "/sectors/hosp",
  },
  {
    title: "Banking",
    img: "4.png",
    url: "/sectors/bank",
  },
  {
    title: "Industrial Development",
    img: "5.png",
    url: "/sectors/dev",
  },
  {
    title: "Agriculture",
    img: "6.png",
    url: "/sectors/agri",
  },
  {
    title: "Green Energy",
    img: "7.png",
    url: "/sectors/green",
  },
];
export default function Sectors() {
  return (
    <>
      <Header />
      <Layout>
        <div id="sectors" className="md:mb-20">
          <div className="container m-auto py-12 pb-0 px-5 md:px-12 xl:px-40 ">
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

            <div className="mb-20">
              <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p pb-20">
                Sectors
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
                {list.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <div className="hover:opacity-70 transition ease-in-out">
                      <Image
                        loader={imageLoader}
                        alt="The Group"
                        src={"/images/sectors/" + item.img}
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="text-3xl font-extrabold text-kown-p mb-5">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
