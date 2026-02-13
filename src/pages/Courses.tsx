import { motion } from "framer-motion";
import { BookOpen, FileText, Mic } from "lucide-react";

const tabs = [
  { icon: BookOpen, label: "課程 Courses", items: [
    { title: "聚焦取向心理治療基礎課程", desc: "Focusing-Oriented Psychotherapy introductory course" },
    { title: "靈性指導培訓", desc: "Spiritual Direction training program" },
    { title: "臨床督導課程", desc: "Clinical Supervision certification" },
  ]},
  { icon: FileText, label: "出版 Publications", items: [
    { title: "聚焦與靈修", desc: "Focusing and Contemplative Prayer - published work" },
    { title: "跨文化牧養手冊", desc: "Cross-cultural pastoral care handbook" },
  ]},
  { icon: Mic, label: "文章 Articles", items: [
    { title: "靈修與心理輔導的整合", desc: "Integration of spirituality and counseling" },
    { title: "Focusing-Oriented Therapy in Practice", desc: "Practical applications of FOT" },
  ]},
];

export default function Courses() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-section font-chinese">課程 / 出版 / 文章</h1>
          <p className="heading-sub">Courses, Publications & Articles</p>
          <div className="gold-line mt-4" />
        </motion.div>

        <div className="mt-12 space-y-12">
          {tabs.map(({ icon: Icon, label, items }, si) => (
            <motion.div
              key={si}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.1, duration: 0.5 }}
            >
              <h2 className="flex items-center gap-2 text-xl font-display font-semibold text-foreground mb-4">
                <Icon className="text-accent" size={22} /> {label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item, i) => (
                  <div key={i} className="card-warm">
                    <h3 className="text-base font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
