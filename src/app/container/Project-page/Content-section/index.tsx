import { MotionDiv } from "@/app/components/MotionComponent";
import Section from "@/app/components/Section";
import { fadeLeftVarient, fadeRightVarient } from "@/app/lib/animate";
import { ProjectProps } from "@/app/lib/type";
import Image from "next/image";

interface Props{
  project:ProjectProps[];
}

const ContentSection = ({ project }: Props) => {
  return (
    <main>
      <Section>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-5 h-fit">
          <MotionDiv
            variants={fadeRightVarient}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full md:w-[60%] h-[240px] md:h-[480px] relative"
          >
            <Image
              className="object-cover"
              src={project[0].images[0]}
              alt={project[0].name}
              fill
            />
          </MotionDiv>
          <MotionDiv
            variants={fadeLeftVarient}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full lg:flex-1 h-[240px] md:h-[480px] relative"
          >
            <Image
              className="object-cover"
              src={project[0].images[1]}
              alt={project[0].name}
              fill
            />
          </MotionDiv>
        </div>
      </Section>
      {/*--- END FIRST IMAGES SECTION ---*/}
      <Section>
        <div className="max-w-[1280px] mx-auto ml-0 pl-0 lg:ml-[100px] lg:pl-[100px]">
          <p className="max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Bibendum hac morbi tincidunt
            turpis. Non sagittis elit enim nunc. Dignissim sapien arcu commodo
            pharetra quis. Venenatis odio elit elementum nisi sed consectetur
            dictum erat pretium. Varius pretium amet nunc posuere et lobortis
            habitant. Urna aliquet lobortis purus sit diam leo. Id amet eu
            tincidunt adipiscing venenatis sodales. Eu tortor tempor lobortis
            morbi gravida. Quis id id at suspendisse.
          </p>
        </div>
      </Section>
      {/*--- END FIRST PARAGRAPH ---*/}
      <Section>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-5 h-fit">
          <MotionDiv
            variants={fadeRightVarient}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full lg:flex-1 h-[240px] md:h-[480px] relative"
          >
            <Image
              className="object-cover"
              src={project[0].images[2]}
              alt={project[0].name}
              fill
            />
          </MotionDiv>
          <MotionDiv
            variants={fadeLeftVarient}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full md:w-[60%] h-[240px] md:h-[480px] relative"
          >
            <Image
              className="object-cover"
              src={project[0].images[3]}
              alt={project[0].name}
              fill
            />
          </MotionDiv>
        </div>
      </Section>
      {/*--- END SECOND IMAGES SECTION ---*/}
      <Section>
        <div className="max-w-[1280px] mx-auto flex lg:justify-end  lg:pr-[100px]">
          <p className="max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Bibendum hac morbi tincidunt
            turpis. Non sagittis elit enim nunc. Dignissim sapien arcu commodo
            pharetra quis. Venenatis odio elit elementum nisi sed consectetur
            dictum erat pretium. Varius pretium amet nunc posuere et lobortis
            habitant. Urna aliquet lobortis purus sit diam leo. Id amet eu
            tincidunt adipiscing venenatis sodales. Eu tortor tempor lobortis
            morbi gravida. Quis id id at suspendisse.
          </p>
        </div>
      </Section>
      {/*--- END SECOND PARAGRAPH  ---*/}
      <Section>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-5 h-fit">
          <MotionDiv
            variants={fadeRightVarient}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full md:w-[60%] h-[240px] md:h-[480px] relative"
          >
            <Image
              className="object-cover"
              src={project[0].images[4]}
              alt={project[0].name}
              fill
            />
          </MotionDiv>
          <MotionDiv
            variants={fadeLeftVarient}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full lg:flex-1 h-[240px] md:h-[480px] relative"
          >
            <Image
              className="object-cover"
              src={project[0].images[5]}
              alt={project[0].name}
              fill
            />
          </MotionDiv>
        </div>
      </Section>
      {/*--- END THIRD IMAGES SECTION ---*/}
      <Section>
        <div className="max-w-[1280px] mx-auto ml-0 pl-0 lg:ml-[100px] lg:pl-[100px]">
          <p className="max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Bibendum hac morbi tincidunt
            turpis. Non sagittis elit enim nunc. Dignissim sapien arcu commodo
            pharetra quis. Venenatis odio elit elementum nisi sed consectetur
            dictum erat pretium. Varius pretium amet nunc posuere et lobortis
            habitant. Urna aliquet lobortis purus sit diam leo. Id amet eu
            tincidunt adipiscing venenatis sodales. Eu tortor tempor lobortis
            morbi gravida. Quis id id at suspendisse.
          </p>
        </div>
      </Section>
      {/*--- END THIRD PARAGRAPH  ---*/}
    </main>
  );
};

export default ContentSection;
