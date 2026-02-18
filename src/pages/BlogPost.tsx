import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Find related articles (same series)
  const relatedArticles = article.series
    ? blogArticles.filter(a => a.series === article.series && a.id !== article.id).slice(0, 3)
    : [];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-accent/10 to-background">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              回到文章列表
            </Link>

            {article.series && (
              <div className="flex items-center gap-2 text-sm text-accent mb-3">
                <Tag className="w-4 h-4" />
                <span className="font-chinese">{article.series}</span>
              </div>
            )}

            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 font-chinese">
              {article.title}
            </h1>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('zh-TW', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-slate dark:prose-invert max-w-none"
          >
            <div className="font-chinese leading-relaxed text-foreground whitespace-pre-wrap">
              {article.content}
            </div>
          </motion.article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 pt-8 border-t border-border"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 font-chinese">
                同系列文章
              </h2>
              <div className="grid gap-4">
                {relatedArticles.map(related => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="block p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all group"
                  >
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1 font-chinese">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(related.date).toLocaleDateString('zh-TW', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              海觀更多文章
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
