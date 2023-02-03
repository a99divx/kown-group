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
                Industrial Development
              </h1>
              <p className="text-lg text-kown-s-900">
                • Abu Ghrieb Dairy Factory, Iraq One of Iraq’s largest dairy
                factories located 20 km west of Baghdad.
              </p>
              <p className="text-lg text-kown-s-900">
                • ROV Tobacco Factory, Erbil An establishment of Iraq’s only
                licensed tobacco manufacturing facility located in Erbil.
              </p>
              <p className="text-lg text-kown-s-900">
                • Chlorine Production Factory, Iraq A development of a chlorine
                factory to produce caustic soda, chlorine gas and hydrogen gas.
              </p>
              <p className="text-lg text-kown-s-900">
                • Urea and Ammonia Production Factory, Iraq The biggest
                manufacturing facility located at Baiji, Iraq, for ammonia and
                urea production.
              </p>
            </div>
            <div className="w-full">
              <Image
                loader={ImageLoader}
                alt="The Group"
                src="/images/sectors/5.png"
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
