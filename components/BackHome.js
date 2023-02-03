import Link from "next/link";

export default function BackHome() {
  return (
    <>
      <div className="container m-auto px-5 md:px-12 xl:px-40">
        <div className="text-kown-p flex items-center">
          <div className="w-3 h-3 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <Link
            className="text-2xl font-extrabold text-kown-s hover:text-kown-p-600 pb-1"
            href={"/"}
          >
            Home
          </Link>
        </div>
      </div>
      ;
    </>
  );
}
