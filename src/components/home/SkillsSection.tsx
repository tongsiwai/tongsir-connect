import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { title: "香港傑出教師", year: "2008", link: null },
  { title: "香港優秀教師奬", year: "2009", link: null },
  { title: "NZAC Member", year: "", link: "https://nzac.org.nz" },
  { title: "NZCCA Member", year: "", link: "https://nzcca.org.nz" },
  { title: "Certified Focusing Trainer (TIFI)", year: "", link: "https://focusing.org" },
  { title: "Registered Clinical Supervisor", year: "", link: null },
  { title: "Certified Enneagram Teacher", year: "", link: null },
  { title: "MBTI Certified Practitioner", year: "", link: null },
];

export default function SkillsSection() {
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
            <Award className="text-accent" size={32} />
            SKILLS
          </h2>
          <p className="heading-sub font-chinese">也算是一些生活的技能吧！</p>
          <div className="gold-line mt-4" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="card-warm text-center"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-3">
                <Award className="text-accent" size={18} />
              </div>
              <h3 className="text-sm font-display font-semibold text-foreground">
                {cert.title}
              </h3>
              {cert.year && (
                <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
              )}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-accent hover:underline mt-2"
                >
                  Visit <ExternalLink size={10} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
