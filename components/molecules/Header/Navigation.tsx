import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/images/HandyGuide2.png";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import { NavItem, navData } from "@/components/data/navigationData";
import DropdownMenu from "./downdrop";
import { Menu } from "@mui/icons-material";
import MobileNav from "./mobileNav";

interface NavigationProps {
  items: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const isLinkActive = (url: string) => {
    return router.asPath === url;
  };

  const isMenuActive = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className='bg-[#fefefe] text-[#676C7A] p-4 w-full container mx-auto border-t border-black/70 relative'>
      <div className='flex flex-col md:flex-row justify-between md:items-center md:space-x-16'>
        <div className='md:pl-4 w-fit'>
          <Link href='/'>
            <Image src={logo} alt='logo' className='w-[140px] md:w-[150px]' />
          </Link>
        </div>
        <div
          className={`hidden md:flex flex-col md:flex-row items-start justify-normal gap-x-12 pr-8`}
        >
          {items.map((item) =>
            "items" in item ? (
              <DropdownMenu
                key={item.label}
                label={item.label}
                url={item.url}
                items={item.items}
              />
            ) : (
              <Link
                key={item.label}
                href={item.url}
                className={`text-[#676C7A] text-base duration-300 transition relative ${
                  isLinkActive(item.url)
                    ? "!text-[#4E4BED] font-bold"
                    : "hover:text-[#676C7A]/90 hover:scale-95"
                }`}
              >
                {item.label}
                {isLinkActive(item.url) && (
                  <span className='w-6 h-1 rounded-full bg-[#4E4BED] absolute -bottom-1 left-1/2 -translate-x-1/2'></span>
                )}
              </Link>
            )
          )}
        </div>
        <span className='absolute top-3.5 right-4' onClick={isMenuActive}>
          <Menu className='flex items-center md:hidden' />
        </span>
        <div
          className={`flex items-center md:hidden w-full ${
            toggleMenu ? "flex" : "hidden"
          }`}
        >
          <MobileNav data={navData} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
