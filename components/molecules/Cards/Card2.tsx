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
    <div className='min-w-[266px] w-[266px] h-[476px] rounded-2xl shadow-[0px_4px_50px_5px_rgba(217,_217,_217,_0.25)] px-3'>
      <div className='flex flex-col justify-center h-full w-fit'>
        <div className='w-[206px] h-[263.897px]'>
          <Image
            src={typeof imageUrl === "string" ? imageUrl : imageUrl.src}
            alt={title}
            width={100}
            height={100}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='flex flex-col justify-center w-full mt-3.5'>
          <span className='font-bold text-subText text-ellipsis text-[16px] sm:text-[19px] leading-[38px]'>
            {truncateWords(title, 4)}
          </span>
          <Link
            href={publisherUrl}
            className='no-underline text-[15px] text-primaryBrand overflow-hidden'
          >
            {publisher}
          </Link>
          <span className='text-subText text-[15px]'>
            {course ||
              truncateWords("Faculty of Health - Biochemistry Department", 5)}
          </span>
        </div>

        {/*  */}
        <div className='flex items-center w-full gap-x-3 my-4'>
          <button className='py-1.5 px-4 border-2 border-primaryBrand rounded-full text-[14px] text-primaryBrand w-full whitespace-nowrap'>
            More in this category
          </button>
          <Link
            href={downloadLink ? downloadLink : ""}
            className='bg-primaryBrand text-white rounded-full py-1.5 px-[7px]'
            download={true}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Download className='text-[24px]' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card2;
