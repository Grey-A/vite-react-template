import React from "react";
import Navigation from "@/components/molecules/Header/Navigation";
import { navData } from "@/components/data/navigationData";

const Header = () => {
  return (
    <nav className='max-w-[1440px] bg-[#fefefe] w-full mx-auto container'>
      <div className='w-full py-4 px-7'>
        <h4 className='w-fit text-[#676C7A] text-base ml-auto'>
          HandyGuide by GrandGale
        </h4>
      </div>
      <Navigation items={navData} />
    </nav>
  );
};

export default Header;
