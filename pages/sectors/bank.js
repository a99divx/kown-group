import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Sectors from "../homepage/HomeSectors";
import BackHome from "@/components/BackHome";
import ImageLoader from "@/helpers/ImageLoader";

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
                Banking
              </h1>
              <p className="text-lg text-kown-s-900">
                Iraq Islamic Bank, Baghdad A leading financial institution that
                offers Sharia compliant funding solutions
              </p>
            </div>
            <div className="w-full">
              <Image
                loader={ImageLoader}
                alt="The Group"
                src="/images/sectors/4.png"
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
