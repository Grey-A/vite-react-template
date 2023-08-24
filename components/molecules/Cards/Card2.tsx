import { truncateWords } from "@/components/atoms/truncateWords";
import { Download } from "@mui/icons-material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Card2 {
  imageUrl: string | StaticImageData;
  title: string;
  publisher: string;
  publisherUrl: string;
  downloadLink?: string;
  course?: string;
}

const Card2: React.FC<Card2> = ({
  imageUrl,
  title,
  publisher,
  publisherUrl,
  course,
  downloadLink,
}) => {
  return (
    <div className='flex flex-col items-center justify-center w-[393px] h-full p-3 shadow-[0px_10px_80px_rgba(0,_0,_0,_0.32)] bg-white overflow-hidden'>
      <div className='flex flex-col justify-center items-center h-full w-fit'>
        <div className='w-[361px] h-full max-w-[361px] mb-2'>
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
          <span className='text-subText text-[15px] '>
            {course ||
              truncateWords("Faculty of Health - Biochemistry Department", 6)}
          </span>
        </div>

        <div className='flex items-center w-full h-full gap-x-4 mt-4'>
          <button className='py-1.5 px-14 border-2 border-primaryBrand rounded-full text-[14px] text-primaryBrand w-full'>
            See more in this category
          </button>
          <Link
            href={downloadLink ? downloadLink : ""}
            className='bg-primaryBrand text-white rounded-full p-2'
            download={true}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Download className="text-[24px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card2;
