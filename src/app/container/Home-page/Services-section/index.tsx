import { MotionDiv } from "@/app/components/MotionComponent";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const services = [
  { id: "01", title: "ARCHITECTURAL DESIGN", image: "1.webp" },
  { id: "02", title: "INTERIOR DESIGN", image: "2.webp" },
  { id: "03", title: "SPACIAL PLANNING", image: "3.webp" },
];
const animVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ServiceSection = () => {
  return (
    <section className="h-fit w-screen px-[32px] md:px-0 py-[64px] md:py-[96px] lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[48px] md:gap-[64px]">
        <div>
          <h2 className="text-4xl md:text-5xl uppercase">
            our services
          </h2>
        </div>

        <div className="w-full flex lg:justify-end">
          <MotionDiv
            variants={animVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full lg:w-[85%] h-fit flex flex-col gap-5  md:grid md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((item) => (
              <MotionDiv variants={animVariants} key={item.id}>
                <Link
                  href="/contact"
                  className="bg-secondary-100 h-[280px] md:h-[350px] p-[32px] flex items-end group overflow-hidden relative"
                >
                  <div className="flex flex-col gap-3 translate-y-[60px] group-hover:translate-y-0 transition-all duration-300 relative z-30">
                    <h5 className="text-2xl uppercase md:group-hover:text-white">
                      {item.title}
                    </h5>
                    <p className="max-w-[280px] md:group-hover:text-white">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                      <p className="hover:underline md:group-hover:text-white">
                        Contact us
                      </p>
                      <GoArrowRight className="md:group-hover:text-white" />
                    </div>
                  </div>
                  {/*--- END CARD CONTENT ---*/}
                  <div className="w-10 h-10 rounded-full border-[2px] border-secondary-200 absolute top-5 left-5 z-30 flex items-center justify-center md:group-hover:border-white">
                    <p className="md:group-hover:text-white text-xs">
                      {item.id}
                    </p>
                  </div>
                  {/*--- END TAG ---*/}
                  <div className="hidden md:block absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full h-full transition-all duration-500 scale-0 group-hover:scale-100 ">
                    <Image
                      className="object-cover"
                      src={`/images/Home-page/services-section/${item.image}`}
                      alt="service-image"
                      fill
                    />
                  </div>
                  <div className="absolute top-0 left-0 z-20 w-full h-full bg-black bg-opacity-50 hidden md:group-hover:block"></div>
                  {/*--- END OVERLAY ---*/}
                </Link>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
