import { truncateWords } from "@/components/atoms/truncateWords";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Book from "@/public/images/book1.png";

interface Card3 {
  imageUrl: string | StaticImageData;
  title: string;
  publisher: string;
  publisherUrl: string;
}

const Card3: React.FC<Card3> = ({
  imageUrl,
  title,
  publisher,
  publisherUrl,
}) => {
  return (
    <div className='min-w-[342px] w-auto h-full rounded-2xl shadow-[0px_4px_50px_5px_rgba(217,_217,_217,_0.25)] px-3 py-3 bg-blue-400'>
      <div className='flex flex-row items-center justify-center h-full w-fit gap-x-3'>
        <div className='w-[87px] h-[101px]'>
          <Image
            src={typeof imageUrl === "string" ? imageUrl : imageUrl.src}
            alt={title}
            width={100}
            height={100}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='flex flex-col justify-center w-full my-auto'>
          <span className='font-bold text-subText text-ellipsis text-[16px] sm:text-[19px] leading-[38px]'>
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

export default Card3;
