import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import PublicationsSection from "@/components/home/PublicationsSection";

const courses = [
  {
    title: "提升孩子EQ的家長必修課",
    subtitle: "「以生命自覺為本的情緒教練」初階課程",
    desc: "Parenting Course: Emotion Coaching Based on Focusing — Introductory Level",
    details: "2 小時點播影片 · 可終身存取 · 可下載資源 · 附完成證書",
    url: "https://eq01.prolearning.asia",
    icon: BookOpen,
  },
  {
    title: "成為孩子目中的英雄",
    subtitle: "一個學習「愛」與「管教」平衡的家長培訓",
    desc: "6A Parenting Training: A balanced approach to love and discipline",
    details: "2 小時點播影片 · 可終身存取 · 可下載資源 · 附完成證書",
    url: "https://6a-parenting.prolearning.asia",
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, i) => (
                <a
                  key={i}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow block group"
                >
                  <course.icon className="w-8 h-8 text-primary mb-4 group-hover:text-accent transition-colors" />
                  <h3 className="text-lg font-semibold text-foreground mb-1 font-chinese group-hover:text-accent transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-base font-chinese text-foreground mb-2">
                    {course.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3">{course.desc}</p>
                  <p className="text-xs text-muted-foreground">{course.details}</p>
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              所有課程由{" "}
              <a
                href="https://www.prolearning.asia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:opacity-80 transition-opacity"
              >
                ProLearning Asia
              </a>{" "}
              主理
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <PublicationsSection />

    </div>
  );
}
