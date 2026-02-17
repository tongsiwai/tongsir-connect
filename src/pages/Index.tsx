import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import EducationSection from "@/components/home/EducationSection";
import PublicationsSection from "@/components/home/PublicationsSection";
import SkillsSection from "@/components/home/SkillsSection";
import BlogSection from "@/components/home/BlogSection";
import YoutubeSection from "@/components/home/YoutubeSection";

export default function Index() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <PublicationsSection />
      <SkillsSection />
      <BlogSection />
      <YoutubeSection />
    </>
  );
}
