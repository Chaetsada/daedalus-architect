import { BlogProps } from "@/app/lib/type";
import Link from "next/link";


interface Props{
  blog:BlogProps[]
}

const FooterLink = ({ blog }:Props) => {
  return (
    <section className="h-fit w-full px-[32px] md:px-0 py-[64px] md:py-[80px]">
        <div className="h-fit w-full">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between md:px-[32px] lg:px-[80px]">
            <Link
              href={blog[0].prevLink}
              className={` ${
                blog[0].id === "1" ? "hidden" : "block"
              } w-full lg:w-[300px] group `}
            >
              <div className="size-[140px] rounded-full border-[2px] border-secondary-200 transition-all duration-300  relative group-hover:border-black">
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 flex items-center gap-1">
                  <div className="w-[100px] h-[2px] bg-black"></div>
                  <h6 className="text-nowrap">PREV POST</h6>
                </div>
              </div>
            </Link>
            <Link
              href={blog[0].nextLink}
              className={` ${
                blog[0].id === "6" ? "hidden" : "block"
              } w-full lg:w-[300px] ml-auto group flex items-end justify-end `}
            >
              <div className="size-[140px] rounded-full border-[2px] border-secondary-200 transition-all duration-300 relative group-hover:border-black">
                <div className="absolute top-1/2 -translate-y-1/2 right-1/2 flex items-center gap-1">
                  <h6 className="text-nowrap">NEXT POST</h6>
                  <div className="w-[100px] h-[2px] bg-black"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
    </section>
  );
};

export default FooterLink;
