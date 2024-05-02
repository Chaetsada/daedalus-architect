import Section from "@/app/components/Section";
import { ProjectProps } from "@/app/lib/type";


interface Props{
  project:ProjectProps[];
}

const AboutSection = ({ project }:Props) => {
  return (
    <Section>
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[24px] md:flex-row w-full">
        <div className="grow lg:p-[48px] flex lg:justify-center">
          <h5 className="text-xl uppercase">about project</h5>
        </div>
        <div className="h-fit w-full lg:w-[60%] lg:p-[48px] flex flex-col gap-[64px]">
          <p>
            Lorem ipsum dolor sit amet consectetur. Bibendum hac morbi tincidunt
            turpis. Non sagittis elit enim nunc. Dignissim sapien arcu commodo
            pharetra quis. Venenatis odio elit elementum nisi sed consectetur
            dictum erat pretium. Varius pretium amet nunc posuere et lobortis
            habitant. Urna aliquet lobortis purus sit diam leo. Id amet eu
            tincidunt adipiscing venenatis sodales. Eu tortor tempor lobortis
            morbi gravida. Quis id id at suspendisse.
          </p>
          <ul className="flex flex-col w-full lg:max-w-[500px]">
            <li className="py-6 border-t-[2px] border-secondary-200 flex items-center justify-between">
              <p>LOCATION</p>
              <p>{project[0].location}</p>
            </li>
            <li className="py-6 border-t-[2px] border-secondary-200 flex items-center justify-between">
              <p>TOTAL AREA</p>
              <p>{project[0].area}</p>
            </li>
            <li className="py-6 border-t-[2px] border-secondary-200 flex items-center justify-between">
              <p>ARCHITECTS</p>
              <p>{project[0].architects}</p>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
