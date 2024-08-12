"use client";

import { useUIStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";

export const TopMenu = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const currentPath = usePathname();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-2 md:px-10 py-3">
      <div className="flex items-center gap-4 text-[#0e141b]">
        <IoMenu
          className="w-7 h-7 md:hidden"
          onClick={isSideMenuOpen ? closeMenu : openSideMenu}
        />
        <div className="size-20 hidden md:block">
          <Link href={"/"}>
            <Image alt="logo" src="./logotipoLIG2.svg" width={80} height={80} />
          </Link>
        </div>
        <Link
          className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] "
          href={"/"}
        >
          LIG painting
        </Link>
      </div>

      <div className="flex flex-1 justify-end gap-8 ">
        <div className="md:flex items-center gap-9 hidden">
          <Link
            className="text-[#0e141b] text-sm font-medium leading-normal"
            href="/gallery"
          >
            Gallery
          </Link>
        </div>
        <div className="md:flex items-center gap-9 hidden">
          <Link
            className="text-[#0e141b] text-sm font-medium leading-normal"
            href="/about"
          >
            About us
          </Link>
        </div>
        {currentPath !== "/contact" && (
          <Link
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
            href={"/contact"}
          >
            <span className="truncate">Get a Quote</span>
          </Link>
        )}
      </div>
    </header>
  );
};
