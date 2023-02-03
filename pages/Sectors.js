import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/Layout";
import Image from "next/image";
import BackHome from "@/components/BackHome";
import Link from "next/link";
import ImageLoader from "@/helpers/ImageLoader";
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
      <Header active={"sectors"} />
      <BackHome />
      <Layout>
        <div id="sectors" className="md:mb-20">
          <div className="container m-auto py-12 pb-0 px-5 md:px-12 xl:px-40 ">
            <div className="mb-20">
              <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p pb-20">
                Sectors
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
                {list.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <div className="hover:opacity-70 transition ease-in-out mb-5">
                      <Image
                        loader={ImageLoader}
                        alt="The Group"
                        src={"/images/sectors/" + item.img}
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="text-3xl font-extrabold text-kown-p mb-10">
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
