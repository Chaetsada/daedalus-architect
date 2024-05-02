import ButtonLink from "@/app/components/ButtonLink";
import { projects } from "@/app/lib/data";
import Link from "next/link";
import Image from "next/image";

const AwardSection = () => {
  return (
    <section className="h-fit w-screen px-[32px] md:px-0 py-[64px] md:py-[96px] lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-[64px]">
        <div className="flex-1 flex flex-col gap-5 md:gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl uppercase ">
              awards
            </h2>
          </div>
          <div>
            <ButtonLink name={"View all projects"} link={"/award"} />
          </div>
        </div>
        <div className="min-h-fit w-full lg:w-[66%] ">
          <div className="w-full flex flex-col gap-3">
            {projects.map((item) => (
              <div key={item.id}>
                <div className="w-full py-3 group ">
                  <Link
                    href={item.link}
                    className="h-fit w-full flex flex-col md:flex-row md:items-center gap-3 md:gap-[24px] lg:gap-[48px] relative"
                  >
                    <div className="w-fit">
                      <p className="text-xl ">{item.year}</p>
                    </div>
                    <div className="grow">
                      <h2 className="text-3xl  lg:text-5xl ">{item.name}</h2>
                    </div>
                    <div className="w-fit">
                      <p className="text-base md:text-xl">{item.awards}</p>
                    </div>
                    <div className="hidden lg:block size-[150px] absolute left-2/3 z-20  transition-all duration-150 opacity-0 group-hover:opacity-100 group-hover:scale-150 ">
                      <Image className="object-cover" src={item.thumbnail} alt={item.name} fill />
                    </div>
                  </Link>
                </div>
                {item.id ==="6" ? null : <div className="w-full h-[2px] bg-secondary-200"/> }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
