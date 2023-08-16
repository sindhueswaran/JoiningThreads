"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import MenuItems from "@/data/menu.json";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="justify-between h-20 lg:px-20 lg:items-center lg:flex ">
          <div>
            <div className="flex items-center justify-between my-auto py-auto px-4 lg:block">
              <Link href="/" aria-label="Home Page" className="block lg:hidden">
                <Image
                  src="/images/jtjllogo.png"
                  alt=""
                  width={75}
                  height={75}
                />
              </Link>
              <Link href="/" aria-label="Home Page" className="hidden lg:block">
                <Image
                  src="/images/jtjllogo.png"
                  alt=""
                  width={90}
                  height={90}
                />
              </Link>
              <div className="lg:hidden">
                <button
                  className=" w-10 h-10  rounded-md outline-none focus:border-none focus:border border-none ease-in-out duration-500"
                  onClick={() => setNavbar(!navbar)}
                  aria-label="Menu Icon"
                >
                  {navbar ? (
                    <Icon icon="ph:x" className="w-8 h-8" />
                  ) : (
                    <Icon icon="ph:list" className="w-8 h-8" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "lg:p-0 block" : "hidden"
              }`}
            >
              <ul className="bg-white h-screen lg:h-full items-center justify-center lg:flex">
                {MenuItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-lg text-center font-normal py-6 lg:py-2 px-3 
                    border-b-2 lg:border-b-0 border-mkorange hover:bg-slate-500 active:text-mkorange
                    hover:text-white hover:text-opacity-60 lg:hover:text-slate-500 lg:hover:bg-transparent ease-in-out duration-300"
                  >
                    <Link href={item.url} onClick={() => setNavbar(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
