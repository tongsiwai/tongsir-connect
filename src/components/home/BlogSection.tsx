import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "靈修與心理輔導的整合",
    date: "2024-12-15",
    excerpt: "探索靈性指導與心理輔導如何在當代生活中互相補充...",
  },
  {
    title: "Focusing-Oriented Therapy in Practice",
    date: "2024-11-20",
    excerpt: "How experiential focusing can deepen therapeutic encounters and personal growth...",
  },
  {
    title: "跨文化牧養的挑戰與祝福",
    date: "2024-10-05",
    excerpt: "在紐西蘭多元文化環境中牧養的反思與學習...",
  },
];

export default function BlogSection() {
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
            <FileText className="text-accent" size={32} />
            <span className="font-chinese">其他文章</span>
          </h2>
          <p className="heading-sub">Recent writings and reflections</p>
          <div className="gold-line mt-4" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-warm group cursor-pointer"
            >
              <time className="text-xs text-accent font-semibold uppercase tracking-wider">
                {post.date}
              </time>
              <h3 className="text-base font-display font-semibold text-foreground mt-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-accent mt-4 font-medium group-hover:gap-2 transition-all">
                Read more <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            View all articles <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
