

import { projects } from "@/app/lib/data";


const AwardSection = () => {
  return (
    <section className="h-fit w-screen px-[32px] md:px-0 py-[64px] md:py-[96px] lg:py-[100px]">
      <div className=" max-w-[1280px] mx-auto flex flex-col gap-10 lg:gap-[160px]">
        <div className="flex flex-col lg:flex-row gap-5 justify-between">
          <div className="w-fit">
            <h2 className="text-4xl md:text-5xl uppercase font-semibold">
              award-winning <br /> design
            </h2>
          </div>
          <div className="max-w-xl">
            <p>
              Our achievements are a testament to the dedication and expertise
              of our talented team. We pride ourselves on thoughtful,
              sustainable, and innovative design.
            </p>
          </div>
        </div>
        <div className="min-h-fit flex lg:justify-end">
          <ul className="h-fit w-full lg:w-[66%]">
            {projects.map((item) => (
              <div key={item.id}>
                <div className="w-full py-3 group ">
                  <div className="h-fit w-full flex flex-col md:flex-row md:items-center gap-1 md:gap-[24px] lg:gap-[48px] relative">
                    <div className="w-fit">
                      <p className="text-[18px]">{item.year}</p>
                    </div>
                    <div className="grow">
                      <h2 className="text-[20px] lg:text-2xl ">{item.name}</h2>
                    </div>
                    <div className="w-fit">
                      <p>{item.awards}</p>
                    </div>
                  </div>
                </div>
                {item.id === "6" ? null : (
                  <div className="w-full h-[2px] bg-secondary-100" />
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
