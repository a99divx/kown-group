import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/Layout";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";

const imageLoader = ({ src, width, quality }) => {
  return `https://kown-group.vercel.app/${src}?w=${width}&q=${quality || 75}`;
};

export default function Team() {
  const list = [
    {
      name: "Samer Wahbeh",
      title: "Group Chief Executive Officer",
      img: "images/team/1.png",
      desc: "Samer joined Kown Capital in April 2022 as its Group Chief Executive Officer (GCEO), after completing more than 5 years as the GCEO of Estithmar (QPSC).",
    },
    {
      name: "Shadi Qestha",
      title: "Group Chief Financial Officer",
      img: "images/team/2.png",
      desc: "Shadi joined Kown Capital in July 2022 as its Group Chief Financial Officer (GCFO) after being the CEO of Al Alttiyah Group.",
    },
    {
      name: "Rami Halasah",
      title: "Director, Ops. and RE Development",
      img: "images/team/2.png",
      desc: "Rami joined Kown Capital in August 2022 as a Director of Operation and Real Estate Development following his role as the General Manager of Debbas Enterprise Qatar...",
    },
    {
      name: "Shadi Qestha",
      title: "Group Chief Financial Officer",
      img: "images/team/2.png",
      desc: "Shadi joined Kown Capital in July 2022 as its Group Chief Financial Officer (GCFO) after being the CEO of Al Alttiyah Group.",
    },
    {
      name: "Rami Halasah",
      title: "Director, Ops. and RE Development",
      img: "images/team/2.png",
      desc: "Rami joined Kown Capital in August 2022 as a Director of Operation and Real Estate Development following his role as the General Manager of Debbas Enterprise Qatar...",
    },
    {
      name: "Shadi Qestha",
      title: "Group Chief Financial Officer",
      img: "images/team/2.png",
      desc: "Shadi joined Kown Capital in July 2022 as its Group Chief Financial Officer (GCFO) after being the CEO of Al Alttiyah Group.",
    },
    {
      name: "Rami Halasah",
      title: "Director, Ops. and RE Development",
      img: "images/team/2.png",
      desc: "Rami joined Kown Capital in August 2022 as a Director of Operation and Real Estate Development following his role as the General Manager of Debbas Enterprise Qatar...",
    },
    {
      name: "Shadi Qestha",
      title: "Group Chief Financial Officer",
      img: "images/team/2.png",
      desc: "Shadi joined Kown Capital in July 2022 as its Group Chief Financial Officer (GCFO) after being the CEO of Al Alttiyah Group.",
    },
    {
      name: "Rami Halasah",
      title: "Director, Ops. and RE Development",
      img: "images/team/2.png",
      desc: "Rami joined Kown Capital in August 2022 as a Director of Operation and Real Estate Development following his role as the General Manager of Debbas Enterprise Qatar...",
    },
    {
      name: "Shadi Qestha",
      title: "Group Chief Financial Officer",
      img: "images/team/2.png",
      desc: "Shadi joined Kown Capital in July 2022 as its Group Chief Financial Officer (GCFO) after being the CEO of Al Alttiyah Group.",
    },
    {
      name: "Rami Halasah",
      title: "Director, Ops. and RE Development",
      img: "images/team/2.png",
      desc: "Rami joined Kown Capital in August 2022 as a Director of Operation and Real Estate Development following his role as the General Manager of Debbas Enterprise Qatar...",
    },
    {
      name: "Shadi Qestha",
      title: "Group Chief Financial Officer",
      img: "images/team/2.png",
      desc: "Shadi joined Kown Capital in July 2022 as its Group Chief Financial Officer (GCFO) after being the CEO of Al Alttiyah Group.",
    },
  ];

  return (
    <>
      <Header />
      <Layout>
        <div id="team">
          <div className="container m-auto py-12 pb-0 px-5 md:px-12 xl:px-40 mb-10 md:mb-40 ">
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
            <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p pb-20">
              The Team
            </h1>
            <div className="md:mb-20 m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
              {list.map((item, index) => (
                <div key={index}>
                  <div className="w-full h-team relative xl:h-96 mb-5 ">
                    <Image
                      loader={imageLoader}
                      alt={item.name}
                      src={item.img}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="text-3xl font-extrabold text-kown-p">
                    {item.name}
                  </div>
                  <h2 className="text-lg font-extrabold mb-5">{item.title}</h2>
                  <p className="mb-10 md:mb-5 xl:mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
