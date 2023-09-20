import { truncateWords } from "@/components/atoms/truncateWords";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Book from "@/public/images/book1.png";

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
    <div className='min-w-[266px] w-[266px] h-[327px] rounded-2xl shadow-[0px_4px_50px_5px_rgba(217,_217,_217,_0.25)] px-3'>
      <div className='flex flex-col justify-center h-full w-fit'>
        <div className='w-[166px] h-[219px]'>
          <Image
            src={typeof imageUrl === "string" ? imageUrl : imageUrl.src}
            alt={title}
            width={100}
            height={100}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='flex flex-col justify-center w-full mt-3.5'>
          <span className='font-bold text-subText text-ellipsis text-[16px] sm:text-[19px] leading-[24px]'>
            {truncateWords(title, 4)}
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
