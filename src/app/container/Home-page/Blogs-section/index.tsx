import ButtonLink from "@/app/components/ButtonLink";
import Link from "next/link";
import { blogs } from "@/app/lib/data";
import Image from "next/image";

const BlogSection = () => {
  return (
    <section className="h-fit w-screen px-[32px] md:px-0 py-[64px] md:py-[96px] lg:py-[100px]">
      <div className=" max-w-[1280px] mx-auto flex flex-col gap-[80px]">
        <div className="flex items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl ">
              BLOG
            </h2>
          </div>
          <div className="ml-auto">
            <ButtonLink name={"View all"} link={"/blog"} />
          </div>
        </div>
        <div className="min-h-fit w-full flex justify-center lg:justify-end ">
          <div className="h-fitw-full flex flex-col gap-[32px] md:grid md:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((blog) => (
              <Link
                key={blog.id}
                href={blog.link}
                className="h-[360px] w-full lg:w-[340px] flex flex-col justify-between group"
              >
                <div className="w-full h-[240px] relative overflow-hidden">
                  <Image
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                    src={blog.thumbnail}
                    alt={blog.title}
                    fill
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-secondary-300">{blog.category}</p>
                  <p className="text-xs text-secondary-300">{blog.date}</p>
                </div>
                <div>
                  <h6 className="text-xl">{blog.title}</h6>
                </div>
                <div className="h-[2px] w-full bg-secondary-200" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
