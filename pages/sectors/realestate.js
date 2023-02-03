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
                Real Estate Development
              </h1>
              <p className="text-lg text-kown-s-900">
                <h1 className="font-bold text-2xl mb-10">Projects</h1>
                <ul>
                  <li>
                    <strong>Al Adel Community Mall, Iraq</strong>

                    <ul>
                      <li>
                        Located in the center of Baghdad, Al Adel Community Mall
                        will feature hypermarkets, commercial entities, a
                        medical center, gym, caf&eacute;s, and restaurants.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Baghdad Towers, Iraq</strong>
                    <ul>
                      <li>
                        A real estate complex located in a prime location in
                        Baghdad, consisting of residential high-rise towers. In
                        one of the building blocks there sits a retail strip, an
                        inside boulevard, entertainment facilities and education
                        campuses.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Al Jadriyah Project, Iraq</strong>
                    <ul>
                      <li>
                        A real estate project comprises of one luxury hotel in
                        addition to four premium serviced apartments towers.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Business Park, Iraq</strong>
                    <ul>
                      <li>
                        The Business Park will provide the first purpose-built
                        commercial space in Baghdad.
                      </li>
                    </ul>
                  </li>
                </ul>

                <p className="font-bold">
                  Other Real Estate Projects in Development:
                </p>

                <ul className="list-disc pl-10">
                  <li>Land portfolio &ndash; Jordan</li>
                  <li>Land portfolio &ndash; Iraq</li>
                  <li>Residential Villas Development &ndash; Montenegro</li>
                </ul>
              </p>
            </div>
            <div className="w-full">
              <Image
                loader={ImageLoader}
                alt="The Group"
                src="/images/sectors/1.png"
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
