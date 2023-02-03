import Image from "next/image";
import Link from "next/link";

const imageLoader = ({ src, width, quality }) => {
  return `https://kown-group.vercel.app/${src}?w=${width}&q=${quality || 75}`;
};

export default function About() {
  return (
    <>
      <div id="about" className="md:mb-20">
        <div className="container m-auto py-12 pb-0 px-5 md:px-12 xl:px-40 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          <div className="flex flex-col align-middle justify-center mb-10 md:mb-0 md:h-400">
            <div>
              <h1 className="title text-4xl font-extrabol text-kown-p pb-5">
                The Group
              </h1>
              <p className="mb-5">
                to leverage on the thriving regional and international markets
                and build on unique possibilities.
              </p>
              <Link
                href={"./About"}
                className="px-3 py-3 border-2 border-solid inline-block
              border-kown-s-600 text-kown-s-600 leading-none
              pb-4 hover:text-kown-p hover:border-kown-s-800
              transition ease-in-out duration-150"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="w-full h-mobile md:h-full relative">
            <Image
              loader={imageLoader}
              alt="The Group"
              src="/images/2.png"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="container m-auto py-12 pb-0 px-5 md:px-12 xl:px-40 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 ">
          <div className="w-full h-mobile md:h-full relative order-last md:order-first">
            <Image
              loader={imageLoader}
              alt="The Group"
              src="/images/1.png"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col align-middle justify-center mb-10 md:mb-0 md:h-400">
            <div>
              <h1 className="title text-4xl font-extrabol text-kown-p pb-5">
                What Defines us
              </h1>
              <p className="mb-5">
                To drive strong financial performance, ensure feasible
                investment in multiple sectors and industries, and make a
                healthy impact on the markets of the MENA and further afield.
              </p>
              <Link
                href={"./About"}
                className="px-3 py-3 border-2 border-solid inline-block
              border-kown-s-600 text-kown-s-600 leading-none
              pb-4 hover:text-kown-p hover:border-kown-s-800
              transition ease-in-out duration-150"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="container m-auto py-12 px-5 md:px-12 xl:px-40 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          <div className="flex flex-col align-middle justify-center mb-10 md:mb-0 md:h-400">
            <div>
              <h1 className="title text-4xl font-extrabol text-kown-p pb-5">
                Our Strategy
              </h1>
              <p className="mb-5">
                To invest in projects with high return potential, regardless of
                sector or country, and to seize opportunities in real-time while
                promoting success for elite individuals within the company,
                communities, the Middle East, and beyond.
              </p>
              <Link
                href={"./About"}
                className="px-3 py-3 border-2 border-solid inline-block
              border-kown-s-600 text-kown-s-600 leading-none
              pb-4 hover:text-kown-p hover:border-kown-s-800
              transition ease-in-out duration-150"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="w-full h-mobile md:h-full relative">
            <Image
              loader={imageLoader}
              alt="The Group"
              src="/images/3.png"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
