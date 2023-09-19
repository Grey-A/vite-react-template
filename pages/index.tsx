import Image from "next/image";
import herobg from "@/public/images/bg.png";
import heroImage from "@/public/images/digital-library-concept-free-vector-removebg-preview 1.png";
import { FilterList, Search } from "@mui/icons-material";
import Card1 from "@/components/molecules/Cards/Card1";
import Book from "@/public/images/book1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card2 from "@/components/molecules/Cards/Card2";
import Footer from "@/components/molecules/Footer/Footer";
import Header from "@/components/molecules/Header/Header";
import Link from "next/link";
import { truncateWords } from "@/components/atoms/truncateWords";
import Card3 from "@/components/molecules/Cards/Card3";
import { Navigation } from "swiper/modules";

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
    <main className='max-w-[1440px] container relative mx-auto'>
      <header className='fixed top-0 left-0 z-50 w-full'>
        <Header />
      </header>

      <div className='mt-[7.4rem] smd:mt-auto'>
        {/* Hero Section */}
        <section className='h-screen w-full relative z-10 mix-blend-hard-light py-16 smd:py-auto overflow-hidden'>
          <Image
            src={herobg}
            alt='Hero BG'
            className='absolute top-0 w-full h-screen object-cover -z-20 mix-blend-hard-light'
          />
          <div className='bg-transparent grid grid-cols-1 smd:grid-cols-2 h-full w-full px-4 md:px-10 lg:px-16 xl:px-20 gap-y-20'>
            <div className='flex flex-col justify-center items-center smd:items-start col-span-1 w-full'>
              <div className='flex flex-col'>
                <span className='text-subText leading-[140%] first-letter:capitalize text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center smd:text-start'>
                  welcome to
                </span>
                <h3 className='flex items-center justify-center smd:justify-start font-bold text-[60px] md:text-[70px] lg:text-[80px] 2xl:text-[90px] leading-[63px] md:mt-2 text-center smd:text-start w-full'>
                  <span className='text-primaryBrandColor capitalize text-center smd:text-start'>
                    Handy
                  </span>
                  <span className='text-primaryBrand capitalize text-center smd:text-start'>
                    Guide
                  </span>
                </h3>
                <span className='max-w-full w-full lg:max-w-full 2xl:w-[646px] text-[18px] md:text-[20px] lg:text-[25px] xl:text-[25px] leading-[23px] md:leading-[25px] lg:leading-[30px] xl:leading-[38px] text-subText md:mt-[18px] lg:mt-[22px] xl:mt-[24px] 2xl:mt-[30px] text-center smd:text-start'>
                  Embark on an endless journey of knowledge and inspiration
                  through this captivating gateway.
                </span>
              </div>

              {/* Form */}

              <form className='flex items-center w-full lg:w-[449px] border-2 border-inputSecondary rounded-[12px] overflow-hidden mt-7'>
                <input
                  type='search'
                  className='w-full outline-none py-2.5 sm:py-3 px-4 placeholder:text-lg text-lg placeholder:text-inputPlaceholderTextColor text-primaryBrandColor'
                  placeholder='Search handout'
                />

                <span className='flex items-center justify-center w-16 sm:w-20 h-full bg-inputPlaceholderTextColor text-primaryBrandColor cursor-pointer'>
                  <FilterList className='text-[30px]' />
                </span>
                <span className='flex items-center justify-center w-16 sm:w-20 h-full bg-inputPrimary text-inputBg cursor-pointer'>
                  <Search className='text-[30px]' />
                </span>
              </form>
            </div>

            {/* Second Section */}
            <div className='col-span-1 w-full h-full flex items-center justify-center'>
              <Image
                src={heroImage}
                alt='Hero BG'
                className='w-[100%] h-full object-cover'
              />
            </div>
          </div>
        </section>

        <section className='max-w-full flex flex-col items-center gap-4 flex-wrap my-16 mx-[20px] sm:mx-[50px] bg-white'>
          <h5 className='text-primaryBrandColor text-[25px] font-bold first-letter:capitalize w-full'>
            Recommended for you
          </h5>

          <div className='w-full !px-0'>
            <Swiper
              slidesPerView={2}
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
                        imageUrl={imageUrl}
                        title={title}
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

        <section className='max-w-full flex flex-col items-center gap-4 flex-wrap my-16 mx-[20px] sm:mx-[50px] bg-white'>
          <h5 className='text-primaryBrandColor text-[25px] font-bold first-letter:capitalize w-full'>
            Recently uploaded
          </h5>

          <div className='w-full !px-0'>
            <Swiper
              slidesPerView={2}
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

        <section className='max-w-full flex flex-col items-center gap-4 flex-wrap my-16 mx-[20px] sm:mx-[50px] bg-white'>
          <h5 className='text-primaryBrandColor text-[25px] font-bold first-letter:capitalize w-full'>
            most downloaded
          </h5>

          <div className='w-full'>
            <Swiper
              slidesPerView={2}
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
                        imageUrl={imageUrl}
                        title={title}
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
