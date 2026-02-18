import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

export default function Blog() {
  // Group articles by series
  const seriesArticles = blogArticles.filter(a => a.series);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-accent/10 to-background">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4 font-chinese">
              文章 Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Reflections on faith, emotions, and spiritual growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article List */}
      <section className="section-padding">
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
