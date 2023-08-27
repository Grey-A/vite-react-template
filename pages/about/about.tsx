import Navigation from "@/components/molecules/Header/Navigation";
import { navData } from "@/components/data/navigationData";

export default function AboutDetails() {
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
