"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonLink from "@/app/components/ButtonLink";
import SwiperButtons from "@/app/components/SwiperButton";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const images = ["ARBOR", "DAE", "KANSO", "OPA", "PINETREE", "RESIDENCE"];

const HeroSection = () => {
  return (
    <header className="h-fit md:h-screen  flex flex-col md:flex-row pt-[100px] lg:pt-0">
      <div className="flex-1 h-full py-[64px] px-[32px] flex flex-col justify-end gap-12 md:px-[80px] md:py-[80px] md:order-2">
        <div className="md:absolute top-52 left-1/2 md:-translate-x-40  z-10">
          <h1 className="text-primary-200 text-5xl md:text-8xl">DAEDALUS <br /> ARCHITECTS</h1>
        </div>
        <div className="flex flex-col gap-[32px]">
          <p className="max-w-3xl">
            Named after Daedalus, the skillful architect and craftsman who was
            known to have built the paradigmatic Labyrinth for King Minos of
            Crete. Like Daedalus, we strive for innovative and thoughtful
            design.
          </p>
          <ButtonLink link={"/contact"} name={"Contact us"} />
        </div>
      </div>

      <div className="flex-1 h-full flex items-center justify-end">
        <div className="h-[384px] w-full md:h-[600px] md:w-[540px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            slidesPerView="auto"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full h-full relative"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className="relative ">
                <Image
                  className="object-cover"
                  src={`/images/Projects/${src}.webp`}
                  alt="project-image"
                  fill
                />
              </SwiperSlide>
            ))}
            <div className="absolute bottom-0 right-0 z-20">
              <SwiperButtons />
            </div>
          </Swiper>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
