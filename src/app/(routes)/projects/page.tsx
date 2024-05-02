"use client";
import { useState } from "react";
import Link from "next/link";
import ImageSection from "@/app/components/ImageSection";
import { projects } from "@/app/lib/data";
import Image from "next/image";

const ProjectPage = () => {
  const [inView, setInView] = useState<string>('');

  const inViewHandler = (id:string) => {
    setInView(id);
  };

  return (
    <div className="min-h-screen w-screen">
      <div className="hidden md:block w-1/2 min-h-[100vh] ">
        {projects.map( project => (
          <ImageSection
            key={project.id}
            image={project.thumbnail}
            id={project.id}
            link={project.link}
            inViewHandler={inViewHandler}
          />
        ))}
      </div>
      {/*--- END IMAGE SECTION ---*/}
      <div className="hidden md:flex w-1/2 h-[100vh] fixed top-0 right-0 bg-secondary px-10 py-20  items-end">
        <div className="flex flex-col gap-2">
          {projects.map((project, index) => (
            <a
              key={index}
              href={`#${project.id}`}
              className="flex items-center gap-2"
            >
              <span
                className={` ${
                  inView === project.id ? "w-[25px]" : "w-0"
                } hidden md:block h-[2px] bg-black transition-all duration-500`}
              />
              <h5 className="text-base md:text-2xl font-heading text-black">
                {project.name}
              </h5>
            </a>
          ))}
        </div>
      </div>
      {/*--- END POROJECT MENU SECTION ---*/}
      <div className="md:hidden flex flex-col px-5 pt-24">
        {projects.map((project) => (
          <div key={project.id} className="w-full h-fit flex flex-col gap-3 mb-5">
            <div className="h-[350px] w-full relative">
              <Image
                className="object-cover"
                src={project.thumbnail}
                alt="project-images"
                fill
              />
            </div>
            <h5 className="text-xl font-heading">{project.name}</h5>
            <Link className="underline" href={project.link}>view project</Link>
          </div>
        ))}
      </div>
      {/*--- @MEDIA QUERY SMALL SCREEN ---*/}
    </div>
  );
};

export default ProjectPage;
