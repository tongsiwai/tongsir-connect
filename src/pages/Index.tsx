import { motion } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import YoutubeSection from "@/components/home/YoutubeSection";
import ordainationBg from "@/assets/MSLC02.jpg";

export default function Index() {
  return (
    <>
      <HeroSection />
      
      {/* Calling & Ministry Section with Photo Background */}
      <section 
        className="section-padding bg-photo-cover bg-photo-overlay-dark min-h-[400px] flex items-center"
        style={{ backgroundImage: `url(${ordainationBg})` }}
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
              Calling & Ministry
            </h2>
            <div className="gold-line mb-6"></div>
            <p className="text-xl font-chinese text-muted-foreground mb-8">呼召與服事</p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-chinese">
              以信仰、輔導與創意教育同行，服事家庭、教會與社群。
              <br />
              致力於在生命的不同階段，提供專業的支持與靈性的引導。
            </p>
          </motion.div>
        </div>
      </section>

      <ExperienceSection />
      <YoutubeSection />
    </>
  );
}
