"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import img1 from "@/assets/images/img-1.jpg";
export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Top Ten Fire Safety
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Top Ten Fire Safety Is Leading Manufacturers Of Fire Safety Equipments
          </p>
         
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
