import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Sectors from "../homepage/HomeSectors";
const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function RealEstate() {
  return (
    <>
      <Header />

      <div className="md:mb-20">
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
                Hospitality
              </h1>
              <p className="text-lg text-kown-s-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                condimentum scelerisque metus hendrerit volutpat. Nullam id urna
                ac dolor posuere egestas. In neque massa, hendrerit quis nulla
                a, commodo facilisis orci. Nam aliquet ac urna id lobortis.
                Donec fermentum eget velit in dignissim. Sed id nulla nec mauris
                bibendum pellentesque ac volutpat lorem. In commodo massa id
                tellus euismod, eleifend consequat sem fermentum. Integer semper
                ultrices arcu sit amet gravida. Praesent quis velit nec libero
                faucibus blandit. Nulla id dignissim nisi, eget scelerisque
                augue. Proin dignissim tellus vel neque accumsan, consequat
                consectetur velit tempor. Maecenas dolor nisi, efficitur at nisi
                at, maximus ullamcorper felis.{" "}
              </p>
            </div>
            <div className="w-full">
              <Image
                loader={imageLoader}
                alt="The Group"
                src="/images/sectors/3.png"
                width={600}
                height={500}
              />
            </div>
          </div>
          <p className="text-lg text-kown-s-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            condimentum scelerisque metus hendrerit volutpat. Nullam id urna ac
            dolor posuere egestas. In neque massa, hendrerit quis nulla a,
            commodo facilisis orci. Nam aliquet ac urna id lobortis. Donec
            fermentum eget velit in dignissim. Sed id nulla nec mauris bibendum
            pellentesque ac volutpat lorem. In commodo massa id tellus euismod,
            eleifend consequat sem fermentum. Integer semper ultrices arcu sit
            amet gravida. Praesent quis velit nec libero faucibus blandit. Nulla
            id dignissim nisi, eget scelerisque augue. Proin dignissim tellus
            vel neque accumsan, consequat consectetur velit tempor. Maecenas
            dolor nisi, efficitur at nisi at, maximus ullamcorper felis.{" "}
          </p>
        </div>
        <Sectors />
      </div>
      <Footer />
    </>
  );
}
