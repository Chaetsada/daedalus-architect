import Divider from "@/app/components/Divider";
import Footer from "@/app/components/Footer";
import AwardSection from "@/app/container/About-page/Awards-section";
import HeroSection from "@/app/container/About-page/Hero-section";
import InformationSection from "@/app/container/About-page/Info-section";
import MissionSection from "@/app/container/About-page/Mission-section";
import ServiceSection from "@/app/container/About-page/Services-section";
import TeamSection from "@/app/container/About-page/Team-section";

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <InformationSection />
      <Divider />
      <AwardSection />
      <Divider />
      <ServiceSection />
      <Divider />
      <TeamSection />
      <Footer />
    </main>
  );
}
