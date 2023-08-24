import Image from "next/image";
import React from "react";
import logo from '@/public/images/HandyGuide2.png'

const Footer = () => {
  return (
    <footer className='flex items-center'>
      <div className='flex px-12 py-10 mx-12 border-t-2 w-full'>
        <div className='flex flex-col max-w-[347px] gap-y-3'>
          <Image src={logo} alt='logo' className='' />
          <span className='text-subText text-[17px] first-letter:capitalize'>
            Embark on an endless journey of knowledge and inspiration through
            this captivating gateway.
          </span>
          <div className='w-1/2 border border-green-500'>socials</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
