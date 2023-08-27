import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "@/components/molecules/Header/Navigation";
import { navData } from "@/components/data/navigationData";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main className='w-full'>
      <div className='bg-white h-full w-full'>
        <div className='w-full py-4 px-7'>
          <h4 className='w-fit text-[#676C7A] text-base ml-auto'>
            HandyGuide by GrandGale
          </h4>
        </div>
        <Navigation items={navData} />
      </div>
    </main>
  );
}
