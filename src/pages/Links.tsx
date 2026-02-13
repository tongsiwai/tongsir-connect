import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = [
  {
    title: "教會 Churches",
    links: [
      { name: "Mountainside Lutheran Church", url: "https://mountainside.org.nz" },
      { name: "Lutheran Church of New Zealand", url: "https://lutheran.org.nz" },
    ],
  },
  {
    title: "專業組織 Professional Organisations",
    links: [
      { name: "NZAC - NZ Association of Counsellors", url: "https://nzac.org.nz" },
      { name: "The International Focusing Institute", url: "https://focusing.org" },
    ],
  },
  {
    title: "課程平台 Course Platforms",
    links: [
      { name: "ProLearning Asia", url: "https://courses.prolearning.asia" },
    ],
  },
];

export default function Links() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-section font-chinese">其他連結</h1>
          <p className="heading-sub">Other Links & Resources</p>
          <div className="gold-line mt-4" />
        </motion.div>

        <div className="mt-12 space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
            >
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">{cat.title}</h2>
              <div className="space-y-3">
                {cat.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-warm flex items-center justify-between group"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      {link.name}
                    </span>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
