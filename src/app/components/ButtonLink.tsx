import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

interface Props {
  name: string;
  link: string;
}

const ButtonLink = ({ name, link }: Props) => {
  return (
    <>
      <Link className="h-fit w-fit flex items-center gap-5 group" href={link}>
        <div className="h-[64px] w-[64px] rounded-full border border-primary-200 flex justify-center items-center relative overflow-hidden ">
          <div className="h-[64px] w-[64px] rounded-full border-2 border-primary-200 absolute right-[100%] z-10 transition-all duration-300 bg-primary-200 group-hover:right-0" />
          <div className="relative z-10">
            <GoArrowRight className="text-primary text-xl group-hover:text-white" />
          </div>
        </div>

        <div>
          <p className="group-hover:underline">{name}</p>
        </div>
      </Link>
    </>
  );
};

export default ButtonLink;
