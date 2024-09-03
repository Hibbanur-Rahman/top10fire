"use client"; // Important for Next.js 13 app directory
import { cn } from "@/lib/utils"; // Ensure this is correctly imported
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image"; // For using Next.js Image component
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideItem {
  title: string;
  description: string;
  link: string;
  img: any | string; // Use StaticImageData for imported images, or string for URLs
}

interface SliderComponentProps {
  items: SlideItem[]; // Define the type for your slides
}

const SliderComponent: React.FC<SliderComponentProps> = ({ items }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="w-full overflow-hidden pb-16"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="w-[400px]">
          <div className="max-w-xs w-full group/card">
            <div
              className={cn(
                "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-end bg-cover"
              )}
              // style={{
              //   backgroundImage: `url(${
              //     typeof item.img === "string" ? item.img : item.img.src
              //   })`,
              // }}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60 z-[10]"></div>
              <div className="relative flex  h-full w-full">
                <Image
                  src={item.img}
                  alt=""
                  className="h-full w-full object-fill"
                />
                <div className="text-content absolute bottom-0 p-4">
                  <h1 className="font-bold text-xl md:text-2xl text-black group-hover/card:text-white relative z-10">
                    {item.title} {/* Display the actual title */}
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    {item.description} {/* Display the description */}
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderComponent;
