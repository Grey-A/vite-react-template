import Image from "next/image";
import React from "react";
import logo from "@/public/images/HandyGuide2.png";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub, BsDiscord, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='flex items-center'>
      <div className='flex flex-col md:flex-row px-4 md:px-10 py-10 mx-4 md:mx-12 border-t-2 w-full space-y-10 md:space-y-0 md:space-x-24 lg:space-x-36'>
        <div className='flex flex-col max-w-[347px] gap-y-3'>
          <Image src={logo} alt='logo' className='' />
          <span className='text-subText text-[17px] first-letter:capitalize'>
            Embark on an endless journey of knowledge and inspiration through
            this captivating gateway.
          </span>
          <div className='flex gap-8 w-1/2'>
            <Link
              href='http://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl'
            >
              <FaXTwitter />
            </Link>
            <Link
              href='http://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl'
            >
              <BsGithub />
            </Link>
            <Link
              href='http://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl'
            >
              <BsDiscord />
            </Link>
            <Link
              href='http://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl'
            >
              <BsInstagram />
            </Link>
          </div>
        </div>

        <div className='flex flex-wrap gap-y-16 gap-x-14 sm:gap-x-20 md:gap-x-28'>
          <ul className='flex flex-col gap-y-1'>
            <li className='text-[#0E0D35] text-[21px] font-bold'>Discover</li>
            <li className='text-[#676C7A] text-[17px]'>
              <Link href='http://twitter.com/' className=''>
                Home
              </Link>
            </li>
            <li className='text-[#676C7A] text-[17px]'>
              <Link href='http://twitter.com/' className=''>
                Faculty
              </Link>
            </li>
            <li className='text-[#676C7A] text-[17px]'>
              <Link href='http://twitter.com/' className=''>
                Department
              </Link>
            </li>
            <li className='text-[#676C7A] text-[17px]'>
              <Link href='http://twitter.com/' className=''>
                Courses
              </Link>
            </li>
            <li className='text-[#676C7A] text-[17px]'>
              <Link href='http://twitter.com/' className=''>
                Level
              </Link>
            </li>
          </ul>
          <ul className='flex flex-col gap-y-1'>
            <li className='text-[#0E0D35] text-[21px] font-bold'>Help</li>
            <li className='text-[#676C7A] text-[17px]'>
              <Link href='http://twitter.com/' className=''>
                Help Center
              </Link>
            </li>
            <li className='text-[#676C7A] text-[17px]'>
              <Link href='http://twitter.com/' className=''>
                Report a Problem
              </Link>
            </li>
          </ul>
          <ul className='flex flex-col gap-y-1'>
            <li className='text-[#676C7A] text-[17px]'>
              <Link href='http://twitter.com/' className=''>
                About Us
              </Link>
            </li>
            <li className='text-[#676C7A] text-[17px]'>
              <Link href='http://twitter.com/' className=''>
                Privacy Policy
              </Link>
            </li>
            <li className='text-[#676C7A] text-[17px]'>
              <Link href='http://twitter.com/' className=''>
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
