import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = [
  {
    title: "不同時期的分享平台",
    titleEn: "Sharing Platforms from Different Periods",
    links: [
      { 
        name: "靈修靜禱", 
        nameEn: "Devotion & Contemplation",
        url: "https://www.facebook.com/devote2HIM/",
        description: "一段聆聽、分享的空間，透過默想、反省與人與神的關係"
      },
      { 
        name: "唐四塗鴉", 
        nameEn: "Tong Si Gallery",
        url: "http://tongsigallary.blogspot.com/",
        description: "一個渴望成長的平凡人，希望用平凡的塗鴉，去觸動每個不平凡的心靈。與你聯繫，彼此交流與分享。"
      },
      { 
        name: "父母童行", 
        nameEn: "Parenting Journey",
        url: "http://fcc-parenting.blogspot.com/",
        description: "記下點點作為父母的學習"
      },
    ],
  },
  {
    title: "教會 Churches",
    titleEn: "",
    links: [
      { 
        name: "Mountainside Lutheran Church", 
        nameEn: "",
        url: "https://mountainside.org.nz",
        description: ""
      },
      { 
        name: "Lutheran Church of New Zealand", 
        nameEn: "",
        url: "https://lutheran.org.nz",
        description: ""
      },
    ],
  },
  {
    title: "專業組織 Professional Organisations",
    titleEn: "",
    links: [
      { 
        name: "NZAC - NZ Association of Counsellors", 
        nameEn: "",
        url: "https://nzac.org.nz",
        description: ""
      },
      { 
        name: "The International Focusing Institute", 
        nameEn: "",
        url: "https://focusing.org",
        description: ""
      },
    ],
  },
  {
    title: "課程平台 Course Platforms",
    titleEn: "",
    links: [
      { 
        name: "ProLearning Asia", 
        nameEn: "",
        url: "https://www.prolearning.asia",
        description: ""
      },
    ],
  },
];

export default function Links() {
  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-narrow mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="font-chinese">其他連結</span>
          </h1>
          <p className="text-xl text-muted-foreground">Other Links & Resources</p>
          <div className="gold-line-center mt-6" />
        </motion.div>

        <div className="mt-16 space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
            >
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6 font-chinese">
                {cat.title}
              </h2>
              <div className="grid gap-6">
                {cat.links.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="block bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/30 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2 font-chinese">
                          {link.name}
                        </h3>
                        {link.nameEn && (
                          <p className="text-sm text-muted-foreground mb-2">{link.nameEn}</p>
                        )}
                        {link.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed font-chinese">
                            {link.description}
                          </p>
                        )}
                      </div>
                      <ExternalLink 
                        size={20} 
                        className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" 
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground font-chinese">
            這些連結記錄了唐博士在不同時期的分享與事工
          </p>
        </motion.div>
      </div>
    </section>
  );
}
