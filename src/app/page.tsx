"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import img1 from "@/assets/images/img-1.jpg";
import aboutImg from "@/assets/images/about-img.png";

import ItemImg6 from "@/assets/images/item-6.jpg";
import ItemImg5 from "@/assets/images/item-5.jpeg";
import ItemImg4 from "@/assets/images/item-4.jpeg";
import ItemImg3 from "@/assets/images/item-3.jpeg";
import ItemImg2 from "@/assets/images/item-2.jpeg";
import ItemImg1 from "@/assets/images/item-1.jpeg";
import SliderComponent from "@/components/sliderComponets";

import ExtinguisherItemImg1 from "@/assets/images/extinguisher-item-1.jpeg";
import ExtinguisherItemImg2 from "@/assets/images/extinguisher-item-2.jpeg";
import ExtinguisherItemImg3 from "@/assets/images/extinguisher-item-3.jpeg";
import ExtinguisherItemImg4 from "@/assets/images/extinguisher-item-4.jpeg";
import ExtinguisherItemImg5 from "@/assets/images/extinguisher-item-5.jpeg";
import ExtinguisherItemImg6 from "@/assets/images/extinguisher-item-6.jpeg";
import ExtinguisherItemImg7 from "@/assets/images/extinguisher-item-7.jpeg";
import ExtinguisherItemImg8 from "@/assets/images/extinguisher-item-8.jpeg";
import ExtinguisherItemImg9 from "@/assets/images/extinguisher-item-9.jpeg";
import ExtinguisherItemImg10 from "@/assets/images/extinguisher-item-10.jpeg";

import fireAlarmItems1 from '@/assets/images/fire-alarm-items-1.jpg';
import fireAlarmItems2 from '@/assets/images/fire-alarm-items-2.jpg';
import fireAlarmItems3 from '@/assets/images/fire-alarm-items-3.jpg';
import fireAlarmItems4 from '@/assets/images/fire-alarm-items-4.jpg';
import fireAlarmItems5 from '@/assets/images/fire-alarm-items-5.jpg';
import fireAlarmItems6 from '@/assets/images/fire-alarm-items-6.jpg';
import fireAlarmItems7 from '@/assets/images/fire-alarm-items-7.jpg';
import fireAlarmItems8 from '@/assets/images/fire-alarm-items-8.jpg';

import fireHydrantItemsImg1 from '@/assets/images/fire-hidrant-items-1.jpg';
import fireHydrantItemsImg2 from '@/assets/images/fire-hidrant-items-2.jpg';
import fireHydrantItemsImg3 from '@/assets/images/fire-hidrant-items-3.jpg';
import fireHydrantItemsImg4 from '@/assets/images/fire-hidrant-items-4.jpg';
import fireHydrantItemsImg5 from '@/assets/images/fire-hidrant-items-5.jpg';
import fireHydrantItemsImg6 from '@/assets/images/fire-hidrant-items-6.jpg';
import fireHydrantItemsImg7 from '@/assets/images/fire-hidrant-items-7.jpg';
import fireHydrantItemsImg8 from '@/assets/images/fire-hidrant-items-8.jpg';
import fireHydrantItemsImg9 from '@/assets/images/fire-hidrant-items-9.jpg';
import fireHydrantItemsImg10 from '@/assets/images/fire-hidrant-items-10.jpg';
import fireHydrantItemsImg11 from '@/assets/images/fire-hidrant-items-11.jpg';

import sparePartItemImg1 from '@/assets/images/spare-parts-item-1.jpg'
import sparePartItemImg2 from '@/assets/images/spare-parts-item-2.jpg'
import sparePartItemImg3 from '@/assets/images/spare-parts-item-3.jpg'
import sparePartItemImg4 from '@/assets/images/spare-parts-item-4.jpg'
import sparePartItemImg5 from '@/assets/images/spare-parts-item-5.jpg'
import sparePartItemImg6 from '@/assets/images/spare-parts-item-6.jpg'
import sparePartItemImg7 from '@/assets/images/spare-parts-item-7.jpg'
import sparePartItemImg8 from '@/assets/images/spare-parts-item-8.jpg'
import sparePartItemImg9 from '@/assets/images/spare-parts-item-9.jpg'
import sparePartItemImg10 from '@/assets/images/spare-parts-item-10.jpg'
import sparePartItemImg11 from '@/assets/images/spare-parts-item-11.jpg'
import sparePartItemImg12 from '@/assets/images/spare-parts-item-12.jpg'
import sparePartItemImg13 from '@/assets/images/spare-parts-item-13.jpg'
import sparePartItemImg14 from '@/assets/images/spare-parts-item-14.jpg'
import sparePartItemImg15 from '@/assets/images/spare-parts-item-15.jpg'
import sparePartItemImg16 from '@/assets/images/spare-parts-item-16.jpg'
import sparePartItemImg17 from '@/assets/images/spare-parts-item-17.jpg'
import sparePartItemImg18 from '@/assets/images/spare-parts-item-18.jpg'
import sparePartItemImg19 from '@/assets/images/spare-parts-item-19.jpg'
import sparePartItemImg20 from '@/assets/images/spare-parts-item-20.jpg'
import sparePartItemImg21 from '@/assets/images/spare-parts-item-21.jpg'
import sparePartItemImg22 from '@/assets/images/spare-parts-item-22.jpg'
import sparePartItemImg23 from '@/assets/images/spare-parts-item-23.jpg'
import sparePartItemImg24 from '@/assets/images/spare-parts-item-24.jpg'
import sparePartItemImg25 from '@/assets/images/spare-parts-item-25.jpg'
import sparePartItemImg26 from '@/assets/images/spare-parts-item-26.jpg'
import sparePartItemImg27 from '@/assets/images/spare-parts-item-27.jpg'

export default function Home() {
  const WhatWeDo = [
    {
      title: "Fire Extinguisher Supply",
      description:
        "We are the main association which gives Fire Extinguisher Refilling Services in business.",
      link: "#",
      img: ItemImg1,
    },
    {
      title: "Fire Hydrant System & AMC",
      description:
        "Our range of products include car fire extinguisher,and AMC of fire hydrant system.",
      link: "#",
      img: ExtinguisherItemImg9,
    },
    {
      title: "Fire Suppression System",
      description:
        "We provide Fire Suppression system across the country and even to remote location.",
      link: "#",
      img: ItemImg3,
    },
    {
      title: "Fire Audit",
      description:
        "Fire Audit Services executed by our team of professionals who are expertise in respective domains.",
      link: "#",
      img: ItemImg4,
    },
    {
      title: "Fire Alarm Smoke Detection Sysems",
      description:
        "We provide complete Smoke Detectors services from installation,testing, maintenance last 50 years.",
      link: "#",
      img: ItemImg5,
    },
    {
      title: "Fire Fighting Training",
      description:
        "We provide Fire Fighting training across India. This training is provided by our expertise.",
      link: "#",
      img: ItemImg6,
    },
  ];

  const extinguisherItemSlides = [
    {
      title: "ABC Powder Fire Extinguishers",
      description: "",
      link: "#",
      img: ExtinguisherItemImg1,
    },
    {
      title: "BC Powder Fire Extinguisher",
      description: "",
      link: "#",
      img: ExtinguisherItemImg2,
    },
    {
      title: "CO2 Based Fire Extinguishers",
      description: "",
      link: "#",
      img: ExtinguisherItemImg3,
    },
    {
      title: "Water Fire Extinguishers",
      description: "",
      link: "#",
      img: ExtinguisherItemImg4,
    },
    {
      title: "Clean Agent Fire Extinguishers",
      description: "",
      link: "#",
      img: ExtinguisherItemImg5,
    },
    {
      title: "Kitchen Fire Extinguishers",
      description: "",
      link: "#",
      img: ExtinguisherItemImg6,
    },
    {
      title: "Fire Extinguisher Supply",
      description: "",
      link: "#",
      img: ExtinguisherItemImg7,
    },
    {
      title: "Automatic Modular Type Fire Extinguishers",
      description: "",
      link: "#",
      img: ExtinguisherItemImg8,
    },
    {
      title: "Foam Fire Extinguishers",
      description: "",
      link: "#",
      img: ExtinguisherItemImg9,
    },
    {
      title: "Fire Extinguisher Supply",
      description: "",
      link: "#",
      img: ExtinguisherItemImg10,
    },
  ];
  const fireAlarmItemSlides = [
    {
      title: "Ravel Detector",
      description: "",
      link: "#",
      img: fireAlarmItems1,
    },
    {
      title: "Heat Detector",
      description: "",
      link: "#",
      img: fireAlarmItems2,
    },
    {
      title: "Response Indicator",
      description: "",
      link: "#",
      img: fireAlarmItems3,
    },
    {
      title: "MCP",
      description: "",
      link: "#",
      img: fireAlarmItems4,
    },
    {
      title: "ABC HOOTER",
      description: "",
      link: "#",
      img: fireAlarmItems5,
    },
    {
      title: "HOOTER CUM FLASHER",
      description: "",
      link: "#",
      img: fireAlarmItems6,
    },
    {
      title: "FIRE ALARM PANEL",
      description: "",
      link: "#",
      img: fireAlarmItems7,
    },
    {
      title: "HOOTER CUM MEANS MCB",
      description: "",
      link: "#",
      img: fireAlarmItems8,
    },
   
  ];
  const fireHydrantItemSlides = [
    {
      title: "Fire House Pipe",
      description: "",
      link: "#",
      img: fireHydrantItemsImg1,
    },
    {
      title: "4 Way Fire Bridge Connection",
      description: "",
      link: "#",
      img: fireHydrantItemsImg2,
    },
    {
      title: "Two  Way Fire Bridge Connection",
      description: "",
      link: "#",
      img: fireHydrantItemsImg3,
    },
    {
      title: "RRL Type B Hose Pipe",
      description: "",
      link: "#",
      img: fireHydrantItemsImg4,
    },
    {
      title: "Single Headed Fire Hydrant Valve",
      description: "",
      link: "#",
      img: fireHydrantItemsImg5,
    },
    {
      title: "Double Headed Fire Hydrant Valve",
      description: "",
      link: "#",
      img: fireHydrantItemsImg6,
    },
    {
      title: "Safe Pro Fire First Aid Hose Pipe",
      description: "",
      link: "#",
      img: fireHydrantItemsImg7,
    },
    {
      title: "Short Bran Pipe Nozzle",
      description: "",
      link: "#",
      img: fireHydrantItemsImg8,
    },
    {
      title: "MALE FEMALE COUPLING",
      description: "",
      link: "#",
      img: fireHydrantItemsImg9,
    },
    {
      title: "HYDRANT ADOPTORS AND COUPLING",
      description: "",
      link: "#",
      img: fireHydrantItemsImg10,
    },
    {
      title: "TRIPPLE PURPOSE NOZZLE",
      description: "",
      link: "#",
      img: fireHydrantItemsImg11,
    },
   
  ];
  const sparePartItemSlides = [
    {
      title: "Sprinkler",
      description: "",
      link: "#",
      img: sparePartItemImg1,
    },
    {
      title: "Flexible drops",
      description: "",
      link: "#",
      img: sparePartItemImg2,
    },
    {
      title: "Rosette plate for sprinkler",
      description: "",
      link: "#",
      img: sparePartItemImg3,
    },
    {
      title: "Fire ball",
      description: "",
      link: "#",
      img: sparePartItemImg4,
    },
    {
      title: "Safety fire stop portable spray",
      description: "",
      link: "#",
      img: sparePartItemImg5,
    },
    {
      title: "ABC valve",
      description: "",
      link: "#",
      img: sparePartItemImg6,
    },
    {
      title: "ABC HOUSE PIPE",
      description: "",
      link: "#",
      img: sparePartItemImg7,
    },
    {
      title: "FIRE EXTINGUISHER BELT",
      description: "",
      link: "#",
      img: sparePartItemImg8,
    },
    {
      title: "FIRE EXTINGUISHER pressure gauge",
      description: "",
      link: "#",
      img: sparePartItemImg9,
    },
    {
      title: "SAFE PRO BC",
      description: "",
      link: "#",
      img: sparePartItemImg10,
    },
    {
      title: "PVC yellow seal tag",
      description: "",
      link: "#",
      img: sparePartItemImg11,
    },
    {
      title: "rubber fire extinguiser",
      description: "",
      link: "#",
      img: sparePartItemImg12,
    },
    {
      title: "wall bracket",
      description: "",
      link: "#",
      img: sparePartItemImg13,
    },
    {
      title: "co2 hose pipe",
      description: "",
      link: "#",
      img: sparePartItemImg14,
    },
    {
      title: "50 kg mf fire extinguisher",
      description: "",
      link: "#",
      img: sparePartItemImg15,
    },
    {
      title: "co2 pin",
      description: "",
      link: "#",
      img: sparePartItemImg16,
    },
    {
      title: "ABC SAFETY PIN",
      description: "",
      link: "#",
      img: sparePartItemImg17,
    },
    {
      title: "SAFE pro abc",
      description: "",
      link: "#",
      img: sparePartItemImg18,
    },
    {
      title: "fire extinguisher tube",
      description: "",
      link: "#",
      img: sparePartItemImg19,
    },
    {
      title: "hydrant wheel",
      description: "",
      link: "#",
      img: sparePartItemImg20,
    },
    {
      title: "co2 trolley",
      description: "",
      link: "#",
      img: sparePartItemImg21,
    },
    {
      title: "co2 operating wheel",
      description: "",
      link: "#",
      img: sparePartItemImg22,
    },
    {
      title: "nozzle DCP",
      description: "",
      link: "#",
      img: sparePartItemImg23,
    },
    {
      title: "HOSE BOX KEY",
      description: "",
      link: "#",
      img: sparePartItemImg24,
    },
    {
      title: "SHOT NOZZLE",
      description: "",
      link: "#",
      img: sparePartItemImg25,
    },
    {
      title: "FIRE MAN AXE",
      description: "",
      link: "#",
      img: sparePartItemImg26,
    },
    {
      title: "SHOT OF NOZZLE",
      description: "",
      link: "#",
      img: sparePartItemImg27,
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
      <div className="w-11/12 flex flex-col items-center mt-16">
        <h1 className="text-2xl text-white text-center">
          Products You May Love
        </h1>
        <h2 className="text-white text-4xl text-center">Fire Extinguisers</h2>
        <div className="w-full mt-16">
          <SliderComponent items={extinguisherItemSlides}></SliderComponent>
        </div>
      </div>
      <div className="w-11/12 flex flex-col items-center mt-16">
        <h1 className="text-3xl text-white text-center">
          Fire Suppression System
        </h1>
        <div className="w-full mt-16">
          <SliderComponent items={extinguisherItemSlides}></SliderComponent>
        </div>
      </div>
      <div className="w-11/12 flex flex-col items-center mt-16">
        <h1 className="text-3xl text-white text-center">
          Fire Hydrant Accessories
        </h1>
        <div className="w-full mt-16">
          <SliderComponent items={fireHydrantItemSlides}></SliderComponent>
        </div>
      </div>
      <div className="w-11/12 flex flex-col items-center mt-16">
        <h1 className="text-3xl text-white text-center">
          Fire Alarm System / Signage
        </h1>
        <div className="w-full mt-16">
          <SliderComponent items={fireAlarmItemSlides}></SliderComponent>
        </div>
      </div>
      <div className="w-11/12 flex flex-col items-center mt-16">
        <h1 className="text-3xl text-white text-center">
          Fire Extinguisers Spare Parts
        </h1>
        <div className="w-full mt-16">
          <SliderComponent items={sparePartItemSlides}></SliderComponent>
        </div>
      </div>
    </main>
  );
}
