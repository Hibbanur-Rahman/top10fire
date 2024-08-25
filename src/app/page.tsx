"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import img1 from "@/assets/images/img-1.jpg";
import aboutImg from "@/assets/images/about-img.png";
export default function Home() {
  const WhatWeDo = [
    {
      title: "Fire Extinguisher Supply",
      description:
        "We are the main association which gives Fire Extinguisher Refilling Services in business.",
      link: "#",
      img:img1
    },
    {
      title: "Fire Hydrant System & AMC",
      description:
        "Our range of products include car fire extinguisher,and AMC of fire hydrant system.",
      link: "#",
      img:img1
    },
    {
      title: "Fire Suppression System",
      description:
        "We provide Fire Suppression system across the country and even to remote location.",
      link: "#",
      img:img1
    },
    {
      title: "Fire Audit",
      description:
        "Fire Audit Services executed by our team of professionals who are expertise in respective domains.",
      link: "#",
      img:img1
    },
    {
      title: "Fire Alarm Smoke Detection Sysems",
      description:
        "We provide complete Smoke Detectors services from installation,testing, maintenance last 50 years.",
      link: "#",
      img:img1
    },
    {
      title: "Fire Fighting Training",
      description:
        "We provide Fire Fighting training across India. This training is provided by our expertise.",
      link: "#",
      img:img1
    },
  ];
  
  return (
    <main className="w-full flex flex-col items-center bg-neutral-950">
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Top Ten Fire Safety
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Top Ten Fire Safety Is Leading Manufacturers Of Fire Safety
            Equipments
          </p>
        </div>
        <BackgroundBeams />
      </div>
      <div className="bg-neutral-950 w-11/12 flex justify-between">
        <div className="w-6/12 flex">
          <Image src={aboutImg} alt="" className="h-[400px] w-[450px]" />
        </div>
        <div className="w-6/12">
          <h1 className="text-4xl text-white text-center">About Us</h1>
          <p className="text-white mt-4">
            Top Ten Fire Safety stands as a leading force in the fire safety
            industry with over 50 years of experience, committed to protecting
            lives and property across the nation. As a pioneer in fire safety
            from India, we have set the standard in the industry by constantly
            innovating and enhancing our range of fire protection solutions.
          </p>
          <p className="text-white mt-4">
            At Top Ten Fire Safety, we pride ourselves on our extensive
            expertise in testing and manufacturing a comprehensive array of fire
            fighting equipment and systems. Our commitment to excellence drives
            us to continually refine our products to better serve our customers
            and address the unique challenges they face.
          </p>
          <p className="text-white mt-4">
            Our product line includes a diverse selection of Fire Extinguishers,
            designed for various applications, Special Application
            Extinguishers, state-of-the-art In-Panel Suppression Systems, Total
            Flooding Systems, Wet Chemical Based Kitchen Fire Suppression
            Systems, Hydrant Systems, and other advanced fire fighting
            technologies.
          </p>
        </div>
      </div>
      <div className="w-11/12 flex flex-col items-center mt-16">
        <h1 className="text-2xl text-white text-center">Our Services</h1>
        <h2 className="text-white text-4xl text-center">What we do?</h2>
        <div className="w-full mt-8">
        <HoverEffect items={WhatWeDo} />
        </div>
      </div>
    </main>
  );
}

