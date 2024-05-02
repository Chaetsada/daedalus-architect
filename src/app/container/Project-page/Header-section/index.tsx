import { ProjectProps } from "@/app/lib/type";
import Image from "next/image";


interface Props{
    project:ProjectProps[]
}


const HeaderSection = ({ project }:Props) => {
  return (
    <header className="h-fit w-full pt-[100px] lg:pt-[20px]">
      <div className="h-fit w-full max-w-[1280px] mx-auto flex flex-col gap-[24px] lg:gap-[40px] px-[32px] pt-[100px] lg:pt-[150px] lg:px-0">
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-8xl uppercase">
            {project[0].name}
          </h2>
        </div>
        <div className="h-[180px] sm:h-[250px] md:h-[350px] lg:h-[600px] w-full relative">
          <Image
            className="w-full h-full object-cover"
            src={project[0].thumbnail}
            alt={project[0].name}
            fill
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
