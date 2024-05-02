import Image from "next/image";

const HeroSection = () => {
  return (
    <header className="h-fit w-full">
      <div className="h-fit w-full max-w-[1280px] mx-auto flex flex-col gap-[24px] lg:gap-[40px] px-[32px] pt-[100px] lg:pt-[150px] lg:px-0">
        <div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl uppercase">about us</h2>
        </div>
        <div className="h-[180px] sm:h-[250px] md:h-[350px] lg:h-[600px] w-full relative">
          <Image
            className="w-full h-full object-cover"
            src="/images/About-page/hero-section/image.webp"
            alt="hero-image"
            fill
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
