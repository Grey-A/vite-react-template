import Image from "next/image";

import herobg from "@/public/images/herobg.png";
import heroImage from "@/public/images/digital-library-concept-free-vector-removebg-preview 1.png";
import { FilterList, Search } from "@mui/icons-material";
import Card1 from "@/components/molecules/Cards/Card1";
import Book from "@/public/images/book1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card2 from "@/components/molecules/Cards/Card2";
import Footer from "@/components/molecules/Footer/Footer";
import Header from "@/components/molecules/Header/Header";


const CardData = [
  {
    imageUrl: Book,
    title:
      "The Official Sat Subject Test In Chemistry Study Guide (College Board Official Sat Study Guide) - Softcover",
    publisherUrl: "/",
    publisher: "The College Board",
  },
  {
    imageUrl: Book,
    title:
      "The Official Sat Subject Test In Chemistry Study Guide (College Board Official Sat Study Guide) - Softcover",
    publisherUrl: "/",
    publisher: "The College Board",
  },
  {
    imageUrl: Book,
    title:
      "The Official Sat Subject Test In Chemistry Study Guide (College Board Official Sat Study Guide) - Softcover",
    publisherUrl: "/",
    publisher: "The College Board",
  },
  {
    imageUrl: Book,
    title:
      "The Official Sat Subject Test In Chemistry Study Guide (College Board Official Sat Study Guide) - Softcover",
    publisherUrl: "/",
    publisher: "The College Board",
  },
  {
    imageUrl: Book,
    title:
      "The Official Sat Subject Test In Chemistry Study Guide (College Board Official Sat Study Guide) - Softcover",
    publisherUrl: "/",
    publisher: "The College Board",
  },
  {
    imageUrl: Book,
    title:
      "The Official Sat Subject Test In Chemistry Study Guide (College Board Official Sat Study Guide) - Softcover",
    publisherUrl: "/",
    publisher: "The College Board",
  },
  {
    imageUrl: Book,
    title:
      "The Official Sat Subject Test In Chemistry Study Guide (College Board Official Sat Study Guide) - Softcover",
    publisherUrl: "/",
    publisher: "The College Board",
  },
];

export default function Home() {
  return (
    <main className='w-full relative'>
      <header className='fixed top-0 left-0 z-50 w-full'>
        <Header />
      </header>

      <div className='mt-[7.4rem]'>
        {/* Hero Section */}
        <section className=' h-[800px] w-full relative z-10'>
          <Image
            src={herobg}
            alt='Hero BG'
            className='absolute top-0 w-full h-[800px] -z-20'
          />
          <div className='bg-transparent grid grid-cols-2 h-full w-full px-24'>
            <div className='flex flex-col justify-center col-span-1 w-full'>
              <div className='flex flex-col'>
                <span className='text-subText leading-[140%] first-letter:capitalize text-3xl'>
                  welcome to
                </span>
                <h3 className='flex font-bold text-7xl mt-2 mb-7'>
                  <span className='text-primaryBrandColor capitalize'>
                    Handy
                  </span>
                  <span className='text-primaryBrand capitalize'>Guide</span>
                </h3>
                <span className='w-[646px] text-2xl text-subText'>
                  Embark on an endless journey of knowledge and inspiration
                  through this captivating gateway.
                </span>
              </div>

              {/* Form */}

              <form className='flex items-center w-[449px] border-2 border-inputSecondary rounded-[12px] overflow-hidden mt-7'>
                <input
                  type='search'
                  className='w-full outline-none  py-3 px-4 placeholder:text-lg text-lg placeholder:text-inputPlaceholderTextColor text-primaryBrandColor'
                  placeholder='Search handout'
                />

                <span className='flex items-center justify-center w-20 h-14 bg-inputPlaceholderTextColor text-primaryBrandColor cursor-pointer'>
                  <FilterList className='text-[30px]' />
                </span>
                <span className='flex items-center justify-center w-20 h-14 bg-inputPrimary text-inputBg cursor-pointer'>
                  <Search className='text-[30px]' />
                </span>
              </form>
            </div>

            {/* Second Section */}
            <div className='col-span-1 w-full flex items-center justify-center'>
              <Image
                src={heroImage}
                alt='Hero BG'
                className='w-[90%] object-cover'
              />
            </div>
          </div>
        </section>

        <section className='max-w-full flex flex-col items-center gap-4 flex-wrap m-[50px] bg-white'>
          <h5 className='text-primaryBrandColor text-[25px] font-bold first-letter:capitalize w-full'>
            Recommended for you
          </h5>

          <div className='w-full !px-0'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 2.8,
                  spaceBetween: 30,
                },
                1350: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1536: {
                  slidesPerView: 3.5,
                  spaceBetween: 15,
                },
              }}
              className='h-full !bg-[#68fa0e]/0'
            >
              {CardData?.map(
                ({ imageUrl, title, publisher, publisherUrl }, index) => {
                  return (
                    <SwiperSlide key={index} className='!w-fit'>
                      <Card1
                        title={title}
                        imageUrl={imageUrl}
                        publisher={publisher}
                        publisherUrl={publisherUrl}
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
        </section>

        <section className='max-w-full flex flex-col items-center gap-4 flex-wrap m-[50px] bg-white'>
          <h5 className='text-primaryBrandColor text-[25px] font-bold first-letter:capitalize w-full'>
            Available Handouts
          </h5>

          <div className='w-full !px-0'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 2.8,
                  spaceBetween: 30,
                },
                1350: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1536: {
                  slidesPerView: 3.5,
                  spaceBetween: 15,
                },
              }}
              className='h-full !bg-[#68fa0e]/0'
            >
              {CardData?.map(
                ({ imageUrl, title, publisher, publisherUrl }, index) => {
                  return (
                    <SwiperSlide key={index} className='!w-fit'>
                      <Card2
                        title={title}
                        imageUrl={imageUrl}
                        publisher={publisher}
                        publisherUrl={publisherUrl}
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
