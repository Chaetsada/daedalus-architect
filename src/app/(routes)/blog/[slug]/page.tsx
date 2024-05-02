import Footer from "@/app/components/Footer";
import AsideLink from "@/app/container/Blog-page/Aside-section";
import ContentSection from "@/app/container/Blog-page/Content-section";
import FooterLink from "@/app/container/Blog-page/Footer-section";
import { blogs } from "@/app/lib/data";

const page = ({ params }: any) => {
  
  const blog = blogs.filter((item) => item.link === `/blog/${params.slug}`);
  const asideMenu = blogs.filter(
    (item) => item.link !== `/blog/${params.slug}`
  );

  return (
    <main className="pt-[150px]">
      <div className="h-fit max-w-[1280px] mx-auto flex gap-[80px] px-[32px] ">
        <AsideLink data={asideMenu} />
        <ContentSection blog={blog} />
      </div>
      <FooterLink blog={blog} />
      <Footer />
    </main>
  );
};

export default page;
