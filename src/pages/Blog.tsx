import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, BookOpen, Feather } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import talkBg from "@/assets/Felix-Talk.jpg";

export default function Blog() {
  // Group articles by series
  const seriesArticles = blogArticles.filter(a => a.series);

  return (
    <div className="min-h-screen">
      {/* Header with Background Photo */}
      <section 
        className="section-padding bg-photo-cover bg-photo-overlay-dark min-h-[500px] flex items-center pt-32 lg:pt-40"
        style={{ 
          backgroundImage: `url(${talkBg})`,
          backgroundPosition: 'center 35%'
        }}
      >
        <div className="container-wide mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm mb-6 border-2 border-accent/30">
              <Feather className="w-10 h-10 text-accent" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 font-chinese">
              文章 Blog
            </h1>
            <div className="gold-line-center mb-6"></div>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-3">
              Reflections on faith, emotions, and spiritual growth
            </p>
            <p className="text-lg md:text-xl font-chinese text-foreground/80">
              關於信仰、情緒與靈性成長的反思
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article List */}
      <section className="section-padding bg-background bg-pattern-dots">
        <div className="container-narrow mx-auto">
          <div className="space-y-1">
            {blogArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="block group py-6 px-4 -mx-4 rounded-lg hover:bg-accent/5 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2 font-chinese">
                        {article.title}
                      </h3>
                      {article.excerpt && (
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2 font-chinese">
                          {article.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString('zh-TW', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                </Link>
                {index < blogArticles.length - 1 && (
                  <div className="border-b border-border/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
