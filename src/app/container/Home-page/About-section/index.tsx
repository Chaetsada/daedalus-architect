import ButtonLink from "@/app/components/ButtonLink";

const AboutSection = () => {
  return (
    <section className="h-fit w-screen px-[32px] md:px-0 py-[64px] md:py-[96px] lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-[64px]">
        <div className="flex-1 flex flex-col gap-5 md:gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl uppercase ">about us</h2>
          </div>
          <div>
            <ButtonLink name={"Learn more"} link={"/about"} />
          </div>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-[64px]">
          <div>
            <p>
              Daedalus Architects is a U.S. based architecture company
              recognized for sustainable and innovative residential, leisure,
              and workplace environments. We stand at the forefront of new
              trends in design, technology, and architecture.
            </p>
          </div>
          <ul className="flex flex-col w-full max-w-[500px] gap-[48px] md:grid md:grid-cols-2">
            <li className="w-full flex flex-col gap-4">
              <h4 className="text-3xl md:text-5xl">19</h4>
              <span className="h-[2px] bg-secondary-200 w-full"/>
              <p>Years of experience</p>
            </li>
            <li className="w-full flex flex-col gap-4">
              <h4 className="text-3xl md:text-5xl">06</h4>
              <span className="h-[2px] bg-secondary-200 w-full"/>
              <p>Team members</p>
            </li>
            <li className="w-full flex flex-col gap-4">
              <h4 className="text-3xl md:text-5xl">09</h4>
              <span className="h-[2px] bg-secondary-200 w-full"/>
              <p>Countries operated in</p>
            </li>
            <li className="w-full flex flex-col gap-4">
              <h4 className="text-3xl md:text-5xl">100+</h4>
              <span className="h-[2px] bg-secondary-100 w-full"/>
              <p>Completed projects</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
