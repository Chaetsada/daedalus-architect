import Divider from "./components/Divider";
import Footer from "./components/Footer";
import AboutSection from "./container/Home-page/About-section";
import AwardSection from "./container/Home-page/Awards-section";
import BlogSection from "./container/Home-page/Blogs-section";
import HeroSection from "./container/Home-page/Hero-section";
import ServiceSection from "./container/Home-page/Services-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Divider />
      <ServiceSection />
      <Divider />
      <AwardSection />
      <Divider />
      <BlogSection />
      <Footer />
    </main>
  );
}
