"use client"; // Important for Next.js 13 app directory
import { cn } from "@/lib/utils"; // Ensure this is correctly imported
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      className="w-full overflow-hidden"
      
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="w-[400px]">
          <div className="max-w-xs w-full group/card">
            <div
              className={cn(
                "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4 bg-cover"
              )}
              style={{
                backgroundImage: `url(${typeof item.img === 'string' ? item.img : item.img.src})`, // Correctly reference the image
              }}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  {item.title} {/* Display the actual title */}
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  {item.description} {/* Display the description */}
                </p>
              </div>
            </div>
          </div>
          {/* Uncomment this section if you want to use the Image component directly
          <div className="flex flex-col items-center">
            <Image src={item.img} alt={item.title} className="w-full h-40 " />
            <h3 className="text-white text-lg mt-4">{item.title}</h3>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderComponent;
