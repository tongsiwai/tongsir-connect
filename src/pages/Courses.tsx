import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import PublicationsSection from "@/components/home/PublicationsSection";

const courses = [
  {
    title: "聚焦取向心理治療基礎課程",
    desc: "Focusing-Oriented Psychotherapy introductory course",
    icon: BookOpen,
  },
  {
    title: "靈性指導培訓",
    desc: "Spiritual Direction training program",
    icon: BookOpen,
  },
  {
    title: "臨床督導課程",
    desc: "Clinical Supervision certification",
    icon: BookOpen,
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen">

      {/* Page Header */}
      <section className="section-padding bg-hero-pattern">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4 font-chinese">
              課程 / 出版
            </h1>
            <p className="text-xl text-muted-foreground">
              Courses &amp; Publications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-gradient-warm bg-pattern-subtle-grid">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 font-chinese">
              課程
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <course.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-chinese">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{course.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <PublicationsSection />

    </div>
  );
}
