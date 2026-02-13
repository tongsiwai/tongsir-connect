import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";

const roles = [
  "Worshiper",
  "Contemplative Counselor",
  "Clinical Supervisor",
  "Teacher / Lecturer",
  "Focusing Trainer",
  "Focusing-Oriented Psychotherapist",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body">
              Counselor · Pastor · Educator
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.1]">
              TongSir
            </h1>
            <p className="text-xl md:text-2xl font-display text-muted-foreground mt-2">
              Dr. Felix Tong <span className="font-chinese">唐思偉博士</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 h-10"
          >
            <div className="flex items-center gap-3">
              <div className="gold-line" />
              <span
                key={roleIndex}
                className="text-lg font-body font-light text-accent italic animate-fade-up"
              >
                {roles[roleIndex]}
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-8 text-base text-muted-foreground max-w-md leading-relaxed font-body"
          >
            Based in Auckland, New Zealand — dedicated to counseling, teaching,
            and spiritual direction across cultures and communities.
          </motion.p>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 md:w-80 lg:w-96">
            <div className="absolute inset-0 bg-accent/10 rounded-2xl translate-x-4 translate-y-4" />
            <img
              src={heroPortrait}
              alt="Dr. Felix Tong"
              className="relative rounded-2xl w-full object-cover shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
