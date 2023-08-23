import { truncateWords } from "@/components/atoms/truncateWords";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Card1 {
  imageUrl: string | StaticImageData;
  title: string;
  publisher: string;
  publisherUrl: string;
}

const Card1: React.FC<Card1> = ({
  imageUrl,
  title,
  publisher,
  publisherUrl,
}) => {
  return (
    <div className='flex flex-col items-center justify-center w-[393px] h-[493px] p-3 shadow-[0px_10px_80px_rgba(0,_0,_0,_0.32)] bg-white overflow-hidden'>
      <div className='flex flex-col justify-center items-center h-full w-fit'>
        <div className='w-[361px] h-full max-h-[410px] max-w-[361px]'>
          <Image
            src={imageUrl}
            alt={title}
            className='w-full h-full px-4 object-cover'
          />
        </div>

        <div className='flex flex-col justify-center w-full mt-2'>
          <span className='font-bold text-subText text-ellipsis text-[18px] leading-[20px]'>
            {truncateWords(title, 5)}
          </span>
          <Link
            href={publisherUrl}
            className='no-underline text-[15px] text-primaryBrand overflow-hidden'
          >
            {publisher}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card1;
