import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Sectors from "../homepage/HomeSectors";
import ImageLoader from "@/helpers/ImageLoader";
import BackHome from "@/components/BackHome";

export default function RealEstate() {
  return (
    <>
      <Header />
      <BackHome />

      <div className="md:mb-20">
        <div className="container m-auto py-12 pb-0 px-5 md:px-12 xl:px-40 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-20">
            <div>
              <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p pb-10">
                Green Energy
              </h1>
              <p className="text-2xl font-bold mb-5 text-kown-s-900">
                Waste to Energy Project, Middle East
              </p>
              <p className="text-lg text-kown-s-900">
                Generate clean energy from a gasification process in a
                waste-to-energy plant.
              </p>
            </div>
            <div className="w-full">
              <Image
                loader={ImageLoader}
                alt="The Group"
                src="/images/sectors/7.png"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
        <Sectors />
      </div>
      <Footer />
    </>
  );
}
