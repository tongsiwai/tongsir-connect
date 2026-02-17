import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Certified Focusing Trainer & Focusing-Oriented Therapist",
    titleZh: "認證聚焦導師 & 聚焦取向治療師",
    org: "The Focusing Institute, USA",
    icon: Award,
  },
  {
    title: "Registered Clinical Supervisor",
    titleZh: "註冊臨床督導",
    org: "Asian Professional Counselling Association (HK)",
    icon: Award,
  },
  {
    title: "Associate Fellow",
    titleZh: "副院士",
    org: "Hong Kong Professional Counselling Association",
    icon: Award,
  },
  {
    title: "Certified BBH Educator",
    titleZh: "認證BBH教育導師",
    org: "The Gottman Institute, USA",
    icon: Award,
  },
  {
    title: "Tuning In To Kids/Teens Facilitator",
    titleZh: "兒童/青少年情緒教練認證導師",
    org: "Mindful Centre, University of Melbourne",
    icon: Award,
  },
  {
    title: "6A Character Education Instructor",
    titleZh: "6A品格教育認可導師",
    org: "6A Character Education",
    icon: Award,
  },
  {
    title: "NLP Practitioner",
    titleZh: "NLP執行師",
    org: "American Board of NLP",
    icon: Award,
  },
];

const honors = [
  {
    title: "Hong Kong Outstanding Teacher 2008",
    titleZh: "第八屆 香港傑出教師",
    year: "2008",
  },
  {
    title: "Hong Kong Outstanding Teacher Award (Caring)",
    titleZh: "第六屆 香港優秀教師獎(關愛組)",
    year: "2009",
  },
];

export default function EducationSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Credentials & Recognition
          </h2>
          <p className="text-xl font-chinese text-muted-foreground">資歷及認可</p>
          <div className="gold-line-center mt-6" />
        </motion.div>

        {/* Professional Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">
            Professional Certifications <span className="font-chinese text-muted-foreground">專業資格</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-accent/5 to-accent/10 p-5 rounded-lg border border-accent/20 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <cert.icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground leading-tight">{cert.title}</h4>
                    <p className="font-chinese text-xs text-muted-foreground mt-1">{cert.titleZh}</p>
                    <p className="text-xs text-muted-foreground mt-2">{cert.org}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Honors & Awards */}
        <div>
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">
            Honors & Awards <span className="font-chinese text-muted-foreground">榮譽及獎項</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {honors.map((honor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-accent/10 to-accent/5 p-6 rounded-lg border-l-4 border-accent"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-accent" />
                  <span className="text-sm font-semibold text-accent">{honor.year}</span>
                </div>
                <h4 className="font-semibold text-foreground">{honor.title}</h4>
                <p className="font-chinese text-sm text-muted-foreground mt-1">{honor.titleZh}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
