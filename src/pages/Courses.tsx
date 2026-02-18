import { motion } from "framer-motion";
import { BookOpen, FileText, ExternalLink, Users, Mic, ArrowRight } from "lucide-react";
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

const articles = [
  {
    title: "耶穌多「說」理? 還是有「情」人? (3)",
    date: "2018-11-17",
    url: "https://www.tongsir.net/blog/3",
    excerpt: "从井就穦人的故事，探討耶穌如何超越單純理性，以愛與情觸去遇見人、治癒人心。",
  },
  {
    title: "耶穌多「說」理? 還是有「情」人? (9)",
    date: "2019-05-25",
    url: "https://www.tongsir.net/blog/9",
    excerpt: "從 Auckland Mountainside Lutheran Church 的事工經歷，帶出聖靈感動、情緒與 Focusing 在屬靈生命中的整合。",
  },
  {
    title: "耶穌多「說」理? 還是有「情」人? (11)",
    date: "2019-07-30",
    url: "https://www.tongsir.net/blog/11",
    excerpt: "繼續探討耶穌在跨文化事工中如何匹配理性與情緒，找到信仰與生命的整全之道。",
  },
  {
    title: "耶穌多「說」理? 還是有「情」人? (12)",
    date: "2019-08-02",
    url: "https://www.tongsir.net/blog/12",
    excerpt: "系列終竹，沉澱地反思信仰與心理的整合，以及耶穌如何引導我們進入更深層的關係與自知。",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen">

      {/* Page Header */}
      <section className="section-padding bg-gradient-to-b from-accent/10 to-background">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4 font-chinese">
              課程 / 出版 / 文章
            </h1>
            <p className="text-xl text-muted-foreground">Courses, Publications & Articles</p>
            <div className="gold-line-center mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Section 1: Courses */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <Mic className="text-accent" size={28} />
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">課程</h2>
            </div>
            <p className="text-lg text-muted-foreground ml-10">Courses</p>
            <div className="gold-line mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-xl border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                  <course.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-base font-display font-semibold text-foreground font-chinese">{course.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{course.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Online Courses CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <a
              href="https://www.prolearning.asia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              Browse Online Courses <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Publications & Research */}
      <PublicationsSection />

      {/* Section 3: Articles */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <FileText className="text-accent" size={28} />
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground font-chinese">其他文章</h2>
            </div>
            <p className="text-lg text-muted-foreground ml-10">Recent writings and reflections</p>
            <div className="gold-line mt-4" />
          </motion.div>

          <p className="font-chinese text-base text-muted-foreground mb-10 ml-1">
            『耶穌多「說」理？還是有「情」人？』系列
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <time className="text-xs text-accent font-semibold uppercase tracking-wider">
                  {article.date}
                </time>
                <h3 className="text-lg font-display font-semibold text-foreground mt-2 mb-3 group-hover:text-accent transition-colors font-chinese">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-chinese mb-4">
                  {article.excerpt}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all"
                >
                  閱讀全文 <ExternalLink size={14} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
