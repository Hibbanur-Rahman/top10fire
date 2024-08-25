"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { FloatingNav } from "@/components/ui/floating-navbar";

import logo from "@/assets/images/logo-1.png";
const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="w-full flex justify-center bg-transparent fixed z-[100] shadow-sm">
      {/* <div className="w-11/12 p-3 flex justify-between">
        <Image src={logo} alt="" className="h-[60px] w-[100px]" />
        <div className="w-auto flex items-center">

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-lg`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/discussion" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-lg`}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/discussion" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-lg`}
                  >
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/discussion" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-lg`}
                  >
                    Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/discussion" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-lg`}
                  >
                    Catalogue
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/discussion" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-lg`}
                  >
                    Contact us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div> */}
      {/* <FloatingNav navItems={navItems} /> */}
      <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
        <Menu setActive={setActive}>
          <div className="w-full flex items-center justify-between">
            <Image src={logo} alt="" className="h-[50px] w-[60px]" />
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Products</Link>
            <Link href="/">Catalogue</Link>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
