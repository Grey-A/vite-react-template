import Image from "next/image";
import React from "react";
import logo from "@/public/images/HandyGuide2.png";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import { NavItem } from "@/components/data/navigationData";
import DropdownMenu from "./downdrop";

interface NavigationProps {
  items: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const router = useRouter();

  const isLinkActive = (url: string) => {
    return router.asPath === url;
  };

  return (
    <div className='bg-white text-[#676C7A] p-4 w-full container mx-auto border-y border-black/70'>
      <div className='container mx-auto flex justify-between items-center space-x-16'>
        <div className='pl-4'>
          <Link href='/'>
            <Image src={logo} alt='logo' />
          </Link>
        </div>
        <div className='hidden md:flex gap-x-12 pr-8'>
          {items.map((item) =>
            "items" in item ? (
              <DropdownMenu
                key={item.label}
                label={item.label}
                items={item.items}
              />
            ) : (
              <Link
                key={item.label}
                href={item.url}
                className={`text-[#676C7A] text-base duration-300 transition ${
                  isLinkActive(item.url)
                    ? "text-[#0070f3] font-bold" // Active link styles
                    : "hover:text-[#676C7A]/90 hover:scale-95"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
