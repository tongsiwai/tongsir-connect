import { motion } from "framer-motion";
import { BookOpen, Users, FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    type: "book",
    title: "Turning the World Upside Down: Innovative Practitioners Using Faith and Creative Thinking to Transform Lives and Society",
    titleZh: "反轉世界 的創意行道者：用信仰與創意思維改變生命與社會",
    author: "Si Wai Tong",
    year: "2023",
    publisher: "Amazon Kindle",
    language: "English & Traditional Chinese",
    url: "https://www.amazon.com/Turning-World-Upside-Innovative-Practitioners-ebook/dp/B0FCC72BV7",
    description: "A comprehensive guide exploring how faith-based creative thinking can transform lives and communities through innovative ministry practices.",
    icon: BookOpen,
  },
  {
    type: "co-author",
    title: "Yo puedo cambiar el mundo (I Can Change the World)",
    titleZh: "我可以改變世界",
    author: "Co-author with Design For Change Global Team",
    year: "2017",
    publisher: "Biblioteca Innovación Educativa",
    language: "Spanish",
    url: "https://www.amazon.com.au/eBook-ePub-Biblioteca-Innovaci%C3%B3n-Educativa-Spanish-ebook/dp/B07959X5GK",
    description: "A collaborative work on Design For Change methodology and creative education movement.",
    icon: Users,
  },
  {
    type: "co-author",
    title: "Please Embrace Me: A Child's Prayer",
    titleZh: "《請擁抱我——孩子的祈願》",
    author: "Co-author",
    year: "2023",
    publisher: "香港學園傳道會出版 (Hong Kong Cru Ministry)",
    language: "Chinese",
    url: "https://www.hkccc.org/embraceme",
    description: "A collaborative book exploring themes of love, acceptance, and understanding children's spiritual and emotional needs.",
    icon: Users,
  },
  {
    type: "research",
    title: "Enhancing Church Growth Using Design Thinking: A Motivational Proposal for Mountainside Lutheran Church",
    titleZh: "使用設計思維促進教會增長：山邊路德教會的動機提案",
    author: "Si Wai Tong",
    year: "2024",
    publisher: "Otago Polytechnic - Rere Āwhio Journal",
    language: "English",
    url: "https://auckland.op.ac.nz/aicresearch/rereawhio/author/1029",
    description: "Research paper exploring the application of design thinking methodology to enhance church growth and community engagement.",
    icon: FileText,
  },
];

export default function PublicationsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Publications & Research
          </h2>
          <p className="text-xl font-chinese text-muted-foreground">出版著作及研究</p>
          <div className="gold-line-center mt-6" />
        </motion.div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card p-8 rounded-lg border border-accent/10 hover:border-accent/30 transition-all hover:shadow-lg"
              >
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <pub.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium uppercase">
                            {pub.type === "book" ? "Book" : pub.type === "co-author" ? "Co-Author" : "Research"}
                          </span>
                          <span className="text-sm text-muted-foreground">{pub.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                          {pub.title}
                        </h3>
                        <p className="font-chinese text-base text-muted-foreground mb-3">{pub.titleZh}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-accent flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">Author:</span> {pub.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Publisher:</span> {pub.publisher}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Language:</span> {pub.language}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed italic">{pub.description}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Click on any publication to view more details or purchase
          </p>
        </motion.div>
      </div>
    </section>
  );
}
