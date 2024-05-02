
const InformationSection = () => {
  return (
    <section className='h-fit w-screen px-[32px] md:px-0 py-[64px] md:py-[96px] lg:py-[200px]'>
      <div className=" max-w-[1280px] mx-auto flex flex-col md:flex-row gap-[64px]">
        <div className="flex-1 flex justify-start lg:justify-center gap-5 md:gap-10">
          <p className="text-xl ">FOUNDED IN 2004</p>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-[48px]">
          <div className="flex flex-col gap-5">
            <p >
              Daedalus Architects is a U.S. based architecture and design
              practice celebrated for its eco-friendly and inventive designs in
              residential, leisure, and workplace spaces. We are pioneers in
              cutting-edge design, technology, and architectural trends.
            </p>
            <p>
              Our incredibly talented team is widely recognized for
              groundbreaking ideas and prompt, hands-on project execution.
              Keeping pace with the rapid evolution of the global market,
              Daedalus fuses contemporary trends with imaginative originality.
            </p>
          </div>
          <ul className="flex flex-col w-full max-w-[500px] gap-8 lg:gap-[48px] md:grid md:grid-cols-2">
            <li className="w-full flex flex-col gap-3">
              <h4 className="text-4xl md:text-5xl">19</h4>
              <span className="h-[2px] bg-secondary-200 w-full" />
              <p>Years of experience</p>
            </li>
            <li className="w-full flex flex-col gap-3">
              <h4 className="text-4xl md:text-5xl">06</h4>
              <span className="h-[2px] bg-secondary-200 w-full" />
              <p>Team members</p>
            </li>
            <li className="w-full flex flex-col gap-3">
              <h4 className="text-4xl md:text-5xl">09</h4>
              <span className="h-[2px] bg-secondary-200 w-full" />
              <p>Countries operated in</p>
            </li>
            <li className="w-full flex flex-col gap-3">
              <h4 className="text-4xl md:text-5xl">100+</h4>
              <span className="h-[2px] bg-secondary-200 w-full" />
              <p>Completed projects</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
