import Footer from "@/app/components/Footer";
import AboutSection from "@/app/container/Project-page/About-section";
import ContentSection from "@/app/container/Project-page/Content-section";
import FooterLink from "@/app/container/Project-page/Footer-section";
import HeaderSection from "@/app/container/Project-page/Header-section";

import { projects } from "@/app/lib/data";

const page = ({ params }: any) => {
  const project = projects.filter(
    (item) => item.link === `/projects/${params.slug}`
  );

  return (
    <main >
      <HeaderSection project={project} />
      <AboutSection project={project} />
      <ContentSection  project={project}/>
      <FooterLink project={project} />
      <Footer />
    </main>
  );
};

export default page;
