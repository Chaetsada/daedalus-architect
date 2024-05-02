import Link from "next/link";

interface Props {
  prevLink: string;
  nextLink: string;
  id: string;
}

const Pagination = ({ prevLink, nextLink, id  }: Props) => {
  return (
    <div className="min-h-fit w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row  md:px-[32px] lg:px-[80px]">
        <Link href={prevLink} className={` ${id === "1" ? "hidden":"block" } w-full lg:w-[300px] group `}>
          <div className="size-[120px] rounded-full border-[2px] border-secondary-200 transition-all duration-300  relative group-hover:border-black">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 flex items-center gap-1">
              <div className="w-[100px] h-[2px] bg-black"></div>
              <h6 className="text-nowrap">PREV PROJECT</h6>
            </div>
          </div>
        </Link>

        <Link
          href={nextLink}
          className={` ${id === "6" ? "hidden":"block"} w-full lg:w-[300px]  group `}
        >
          <div className="size-[120px] rounded-full border-[2px] border-secondary-200 ml-auto transition-all duration-300 relative group-hover:border-black">
            <div className="absolute top-1/2 -translate-y-1/2 right-1/2 flex items-center gap-1">
              <h6 className="text-nowrap">NEXT PROJECT</h6>
              <div className="w-[100px] h-[2px] bg-black"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
