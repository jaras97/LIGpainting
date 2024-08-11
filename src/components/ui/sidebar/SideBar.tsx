"use client";

import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const SideBar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <div>
      {/*  Background black */}

      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/*  Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/*  Sidemenu */}

      <nav
        //todo:efecto slide
        className={clsx(
          "fixed p-5 left-0 top-0 w-[80vw] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "-translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer z-50"
          onClick={closeMenu}
        />

        {/*  input */}
        <div className="absolute left-0 top-0 z-40 size-full min-h-screen bg-[#141414]/40">
          <div className="flex h-full min-h-screen  flex-col gap-4 bg-[#FFFFFF] p-4 py-16">
            <ul className="flex flex-col gap-4">
              <Link
                className="flex h-12 items-center gap-4 rounded-full px-4 hover:bg-[#F4EFE6] cursor-pointer"
                href={"/"}
                onClick={closeMenu}
              >
                <p className="text-[#1C160C] text-base font-bold leading-tight truncate">
                  Home
                </p>
              </Link>

              <Link
                className="flex h-12 items-center gap-4 rounded-full px-4 hover:bg-[#F4EFE6] cursor-pointer"
                href={"/contact"}
                onClick={closeMenu}
              >
                <p className="text-[#1C160C] text-base font-bold leading-tight truncate">
                  Contact
                </p>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
