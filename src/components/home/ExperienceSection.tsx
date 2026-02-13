import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  { period: "2020-Present", role: "Pastor / Minister 牧師", org: "Mountainside Lutheran Church", current: true },
  { period: "2021-Present", role: "Chaplain", org: "AUT (Auckland University of Technology)", current: true },
  { period: "2015-Present", role: "Adjunct Faculty", org: "Concordia Theological Seminary", current: true },
  { period: "2016-Present", role: "Visiting Lecturer", org: "Alliance Bible Seminary", current: true },
  { period: "2015-Present", role: "Consultant", org: "Design for change (HK)", current: true },
  { period: "2016-Present", role: "Consultant", org: "Hong Kong Professional Family Cultivation Association", current: true },
  { period: "2016-2023", role: "Manager / Principal Trainer", org: "Design For Change (New Zealand)", current: false },
  { period: "2009-2019", role: "Founder / Clinical Supervisor", org: "Family Counselling Centre - LCHKS", current: false },
  { period: "2012-2019", role: "Clinical Supervisor", org: "Monash University", current: false },
  { period: "2016-2019", role: "Consultant", org: "Design For Change (Australia)", current: false },
  { period: "1996-2009", role: "Guidance Master", org: "Concordia Lutheran School - North Point", current: false },
  { period: "2006-2007", role: "Lecturer", org: "Upper Iowa University", current: false },
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
            The special training I received in HIS garden......
          </p>
          <div className="gold-line mt-4" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-warm"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs uppercase tracking-wider text-accent font-semibold flex-shrink-0">
                  {exp.period}
                </span>
                {exp.current && (
                  <span className="badge-current">Current</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-1 mt-2">
                {exp.role}
              </h3>
              <p className="text-text-secondary">{exp.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
