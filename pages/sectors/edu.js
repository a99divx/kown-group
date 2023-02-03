import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import BackHome from "@/components/BackHome";
import Sectors from "../homepage/HomeSectors";
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
                Education
              </h1>
              <p className="text-lg text-kown-s-900">
                • Lusail City School, Qatar The proposed school will offer an
                international curriculum with a capacity of approximately 2,200
                students.
              </p>
              <p className="text-lg text-kown-s-900">
                • Milestone International School, Turkey Located in Istanbul,
                Turkey, the Milestone International School offers the American
                curriculum and is currently operational with a capacity of 1250
                students.
              </p>
            </div>
            <div className="w-full">
              <Image
                loader={ImageLoader}
                alt="The Group"
                src="/images/sectors/2.png"
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
