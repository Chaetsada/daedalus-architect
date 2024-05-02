
import { MotionList, MotionListItem } from "@/app/components/MotionComponent";

const services = [
  { id: "01", name: "RESIDENTIAL DESIGN" },
  { id: "02", name: "COMERCIAL DESIGN" },
  { id: "03", name: "CORPORATE DESIGN" },
  { id: "04", name: "SUSTAINABLE DESIGN" },
  { id: "05", name: "INERRIOR DESIGN" },
  { id: "06", name: "SPACIAL  PLANNING" },
];

const animVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ServiceSection = () => {
  return (
    <section className="h-fit w-screen px-[32px] md:px-0 py-[64px] md:py-[96px] lg:py-[100px]">
      <div className=" max-w-[1280px] mx-auto flex flex-col gap-10 lg:gap-[160px]">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl uppercase font-semibold">
              our services
            </h2>
          </div>
          <div className="flex-1">
            <p>
              We offer a wide variety of services in-house. From concept to
              completion, our architects will work with you to bring you vision
              to life.
            </p>
          </div>
        </div>

        <div>
          <div className="flex lg:justify-end">
            <MotionList
              variants={container}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="w-full lg:w-[60%] flex flex-col gap-3"
            >
              {services.map((item) => (
                <MotionListItem
                  key={item.id}
                  variants={animVariants}
                  className="flex justify-between items-center p-6 bg-secondary-100 transition-all duration-150 "
                >
                  <p>{item.id}</p>
                  <p className="text-base lg:text-[18px]">{item.name}</p>
                </MotionListItem>
              ))}
            </MotionList>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
