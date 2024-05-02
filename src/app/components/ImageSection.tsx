"use client";

import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Props {
  id: string;
  link: string;
  image: string;
  inViewHandler: any;
}

const ImageSection = ({ id, link,image, inViewHandler }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (isInView) {
      inViewHandler(id);
    }
  }, [isInView, id]);

  return (
    <div ref={ref} id={id} className="h-[100vh] w-full relative group">
      <Link href={link}>
        <div className="w-full h-full relative">
          <Image
            className="object-cover"
            src={image}
            alt="project-image"
            fill
          />
        </div>
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[180px] bg-white bg-opacity-80 rounded-full flex justify-center items-center scale-0 transition-all duration-500  group-hover:scale-100">
          <h5 className="text-xl uppercase text-center">
            view <br /> Project
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default ImageSection;
