import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

const videos = [
  { id: "OA7m6X_mPXE", title: "自我介紹 Introduction" },
  { id: "dQw4w9WgXcQ", title: "聚焦取向分享 Focusing Sharing" },
  { id: "dQw4w9WgXcQ", title: "靈性指導 Spiritual Direction" },
];

export default function Media() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-section flex items-center gap-3">
            <Youtube className="text-accent" size={32} />
            <span className="font-chinese">影音分享</span>
          </h1>
          <p className="heading-sub">Media & Video Sharing</p>
          <div className="gold-line mt-4" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground mt-3">{v.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
