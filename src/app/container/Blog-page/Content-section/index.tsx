import { BlogProps, contents } from "@/app/lib/type";
import Image from "next/image";

interface Props {
  blog: BlogProps[];
}

const ContentSection = ({ blog }: Props) => {
  return (
    <div key={blog[0].id} className="flex-1 flex flex-col gap-[48px]">
      <header className="flex flex-col gap-[24px]">
        <h1 className="text-4xl md:text-5xl">{blog[0].title}</h1>
        <div className="flex items-center justify-between">
          <p className="text-xs text-secondary-300">{blog[0].category}</p>
          <p className="text-xs text-secondary-300">{blog[0].date}</p>
        </div>
      </header>
      {/*--- END HEADER ---*/}
      <div className="w-full h-[40vw] lg:h-[415px] relative">
        <Image
          className="object-cover"
          src={blog[0].thumbnail}
          alt={blog[0].title}
          fill
        />
      </div>
      {/*--- END THUMBNAIL IMAGE ---*/}
      <div className="flex flex-col gap-10">
        <p>{blog[0].main.abstract}</p>
        {blog[0].main.content?.map((item: contents, index: number) => (
          <div key={index} className="flex flex-col gap-2">
            <h5 className="text-xl">{item.title}</h5>
            <p>{item.paragraph}</p>
          </div>
        ))}
        <p>{blog[0].main.conclusion}</p>
      </div>
      {/*--- END PARAGRAPH SECTION ---*/}
    </div>
  );
};

export default ContentSection;
