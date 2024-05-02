import { BlogProps } from "@/app/lib/type";
import Link from "next/link";

interface Props {
  data: BlogProps[];
}

const AsideLink = ({ data }: Props) => {
  return (
    <section className="w-[320px] hidden lg:flex flex-col gap-7">
      {data.map((item) => (
        <Link
          href={item.link}
          key={item.id}
          className="flex flex-col gap-3 group hover:cursor-pointer"
        >
          <div className="h-[2px] w-full bg-secondary-200 relative">
            <div className="absolute top-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </div>
          <p className="text-secondary-300 text-xs">{item.category}</p>
          <h3>{item.title}</h3>
        </Link>
      ))}
    </section>
  );
};

export default AsideLink;
