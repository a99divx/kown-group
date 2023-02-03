import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import SwiperCore, { Autoplay, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Navigation]);

export default function Sectors() {
  const list = [
    {
      title: "Real Estate Development",
      img: "bg-sec1",
      url: "/sectors/realestate",
    },
    {
      title: "Education",
      img: "bg-sec2",
      url: "/sectors/edu",
    },
    {
      title: "Hospitality",
      img: "bg-sec3",
      url: "/sectors/hosp",
    },
    {
      title: "Banking",
      img: "bg-sec4",
      url: "/sectors/bank",
    },
    {
      title: "Industrial Development",
      img: "bg-sec5",
      url: "/sectors/dev",
    },
    {
      title: "Agriculture",
      img: "bg-sec6",
      url: "/sectors/agri",
    },
    {
      title: "Green Energy",
      img: "bg-sec7",
      url: "/sectors/green",
    },
  ];

  return (
    <>
      <div id="sectors">
        <div className="container m-auto py-12 pb-0 px-5 md:px-12 xl:px-40 ">
          <h1 className="title text-7xl font-extrabold font-extrabol text-kown-p pb-20">
            Sectors
          </h1>
          <div className="mb-40">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              freeMode={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1020: {
                  slidesPerView: 3,
                },
              }}
              navigation={true}
              modules={[Navigation]}
            >
              {list.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href={item.url}>
                    <div
                      className={
                        "h-96 md:h-80 bg-cover w-full mb-5 " + item.img
                      }
                    ></div>
                    <div className="text-3xl font-extrabold text-kown-p">
                      {item.title}
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
