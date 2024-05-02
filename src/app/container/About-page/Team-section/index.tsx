
import { MotionDiv } from "@/app/components/MotionComponent";
import Image from "next/image";

const teamMembers = [
  {
    name: "FRANK WRIGHT",
    role: "Director",
    url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "ZAHA HADID",
    role: "Design Director",
    url: "https://images.unsplash.com/photo-1593207129063-c99ebcf14ea4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "IEOH PEI",
    role: "Associate Director",
    url: "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "NORMA FOSTER",
    role: "Associate Director",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "LOUIS KHAN",
    role: "Architect",
    url: "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "ANTONI GAUDI",
    role: "Architect",
    url: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const animContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const slideUpVarient = {
  hidden: { y: 100, opacity: 0.2 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const TeamSection = () => {
  return (
    <section className="h-fit w-screen px-[32px] md:px-0 py-[64px] md:py-[96px] lg:py-[100px]">
      <div className=" max-w-[1280px] mx-auto flex flex-col gap-10 lg:gap-[50px]">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl uppercase font-semibold">
              our team
            </h2>
          </div>
          <div className="flex-1">
            <p>
              Daedalus Architects is a small team of 6 problems solvers and
              innovative thinkers dedicated to making the world around us a
              better place for everyone.
            </p>
          </div>
        </div>

        <MotionDiv
          variants={animContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" w-full grid md:grid-cols-2 lg:grid-cols-3  mt-20 "
        >
          {teamMembers.map((item, i) => (
            <MotionDiv
              variants={slideUpVarient}
              key={i}
              className="w-full md:max-w-[350px] h-[450px] flex flex-col gap-5"
            >
              <div className="h-2/3 w-full relative">
                <Image
                  className="object-cover"
                  src={item.url}
                  alt="team-images"
                  fill
                />
              </div>
              <div className="h-fit w-full">
                <h5 className="text-xl font-heading">{item.name}</h5>
                <p>{item.role}</p>
              </div>
              <span className="h-[2px] w-full bg-secondary-200"></span>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};

export default TeamSection;
