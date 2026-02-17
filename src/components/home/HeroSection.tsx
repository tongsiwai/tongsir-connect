import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroPortrait from "@/assets/Felix.jpg";

const roles = [
  "崇拜者 Worshiper",
  "默觀輔導員 Contemplative Counselor",
  "臨床督導 Clinical Supervisor",
  "教師/講師 Teacher & Lecturer",
  "聚焦導師 Certified Focusing Trainer",
  "聚焦取向心理治療師 Focusing-Oriented Therapist",
  "牧師 Pastor",
  "校牧 University Chaplain",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding overflow-hidden bg-gradient-to-b from-background to-accent/5">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body font-chinese">
              輔導員 · 牧師 · 教育工作者
            </p>
            <p className="text-xs uppercase tracking-widest text-accent/70 mb-2">
              Counselor · Pastor · Educator
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.1] mb-3">
              TongSir
            </h1>
            <p className="text-2xl md:text-3xl font-display text-muted-foreground font-chinese">
              唐思偉博士
            </p>
            <p className="text-xl md:text-2xl font-display text-muted-foreground/80 mt-1">
              Dr. Felix Tong
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 h-12"
          >
            <div className="flex items-center gap-3">
              <div className="gold-line" />
              <span
                key={roleIndex}
                className="text-base md:text-lg font-body font-light text-accent italic animate-fade-up"
              >
                {roles[roleIndex]}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-8 space-y-4"
          >
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed font-body font-chinese">
              <span className="font-semibold text-foreground">紐西蘭信義會蒙恩堂牧師</span>，負責華人事工及開展，並為<span className="font-semibold text-foreground">奧克蘭理工大學校牧</span>。
            </p>
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed font-body">
              Pastor at Mountainside Lutheran Church, New Zealand, serving Chinese ministry and Auckland University of Technology Chaplain.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">🌏 Auckland, NZ</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">🎓 D.Min (Spiritual Direction)</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">🏆 Hong Kong Outstanding Teacher</span>
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 md:w-80 lg:w-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl translate-x-4 translate-y-4" />
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-3xl blur-2xl" />
            <img
              src={heroPortrait}
              alt="Dr. Felix Tong - 唐思偉博士"
              className="relative rounded-2xl w-full object-cover shadow-2xl border-2 border-accent/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
