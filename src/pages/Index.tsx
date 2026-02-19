import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import YoutubeSection from "@/components/home/YoutubeSection";
import churchBg from "@/assets/MSLC02.jpg";

export default function Index() {
  const { t } = useLanguage();
  
  return (
    <>
      <HeroSection />
      
      {/* Calling & Ministry Section with Photo Background */}
      <section 
        className="section-padding bg-photo-cover bg-photo-overlay-dark min-h-[400px] flex items-center"
        style={{ backgroundImage: `url(${churchBg})` }}
      >
        <div className="container-wide mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t('Calling & Ministry', '呼召與服事')}
            </h2>
            <div className="gold-line mb-6"></div>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              {t(
                'Walking alongside with faith, counseling, and creative education, serving families, churches, and communities. Committed to providing professional support and spiritual guidance at different stages of life.',
                '以信仰、輔導與創意教育同行，服事家庭、教會與社群。致力於在生命的不同階段，提供專業的支持與靈性的引導。'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      <ExperienceSection />
      <YoutubeSection />
    </>
  );
}
