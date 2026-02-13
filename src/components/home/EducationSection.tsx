import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const degrees = [
  { year: "2021–2022", school: "Otago Polytechnic", degree: "Master of Applied Management" },
  { year: "2014–2017", school: "Graduate Theological Foundation", degree: "Doctor of Ministry (Spiritual Direction)" },
  { year: "2014–2015", school: "Hong Kong Shue Yan University 香港樹仁大學", degree: "Post-Graduate Certificate in Clinical Supervision" },
  { year: "2008–2013", school: "Alliance Bible Seminary 建道神學院", degree: "Master of Christian Studies (Marriage and Family Therapy)" },
  { year: "2005–2008", school: "Alliance Bible Seminary 建道神學院", degree: "Bachelor of Theology" },
  { year: "1999–2001", school: "City University of Hong Kong 香港城市大學", degree: "PGDE (Primary Education)" },
  { year: "1995–1999", school: "Hong Kong Baptist University 香港浸會大學", degree: "Bachelor of Social Sciences (Hons) – Geography" },
];

export default function EducationSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-section flex items-center gap-3">
            <GraduationCap className="text-accent" size={32} />
            EDUCATION
          </h2>
          <p className="heading-sub">
            I learn because I wanna grow and become more mature as a person and as a Christian
          </p>
          <div className="gold-line mt-4" />
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-timeline-line" />

          <div className="space-y-8">
            {degrees.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background" />

                <span className="text-xs uppercase tracking-wider text-accent font-semibold font-body">
                  {d.year}
                </span>
                <h3 className="text-base font-display font-semibold text-foreground mt-1">
                  {d.school}
                </h3>
                <p className="text-sm text-muted-foreground font-body mt-0.5">
                  {d.degree}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
