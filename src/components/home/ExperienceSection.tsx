import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  { period: "2020–Present", role: "Evangelist 傳道人", org: "Mountainside Lutheran Church", current: true },
  { period: "2021–Present", role: "Chaplain", org: "AUT (Auckland University of Technology)", current: true },
  { period: "2015–Present", role: "Adjunct Faculty", org: "Concordia Theological Seminary", current: true },
  { period: "2015–Present", role: "Focusing Trainer & Psychotherapist", org: "Private Practice, NZ", current: true },
  { period: "2013–2020", role: "Minister / Pastor 牧師", org: "Chinese Lutheran Church, NZ", current: false },
  { period: "2001–2005", role: "Primary School Teacher 小學教師", org: "Hong Kong", current: false },
];

export default function ExperienceSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-section flex items-center gap-3">
            <Briefcase className="text-accent" size={32} />
            EXPERIENCE
          </h2>
          <p className="heading-sub">
            The special training I received in HIS garden...
          </p>
          <div className="gold-line mt-4" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-warm"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs uppercase tracking-wider text-accent font-semibold font-body">
                  {exp.period}
                </span>
                {exp.current && (
                  <span className="text-[10px] uppercase tracking-wider bg-accent/15 text-accent px-2 py-0.5 rounded-full font-semibold">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-base font-display font-semibold text-foreground mt-2">
                {exp.role}
              </h3>
              <p className="text-sm text-muted-foreground font-body mt-1">
                {exp.org}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
