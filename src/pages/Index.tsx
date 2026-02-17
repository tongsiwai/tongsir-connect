import HeroSection from "@/components/home/HeroSection";
import EducationSection from "@/components/home/EducationSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import PublicationsSection from "@/components/home/PublicationsSection";
import SkillsSection from "@/components/home/SkillsSection";
import BlogSection from "@/components/home/BlogSection";
import YoutubeSection from "@/components/home/YoutubeSection";

export default function Index() {
  return (
    <>
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <PublicationsSection />
      <SkillsSection />
      <BlogSection />
      <YoutubeSection />
    </>
  );
}
