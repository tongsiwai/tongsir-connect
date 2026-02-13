import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

export default function YoutubeSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-section flex items-center gap-3">
            <Youtube className="text-accent" size={32} />
            <span className="font-chinese">Youtube 的自我介紹</span>
          </h2>
          <div className="gold-line mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10"
        >
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/OA7m6X_mPXE"
              title="Dr. Felix Tong Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 text-sm text-muted-foreground leading-relaxed font-body space-y-4"
        >
          <p className="font-chinese">
            唐思偉博士（TongSir）現居紐西蘭奧克蘭，是一位結合輔導、牧養與教育的跨文化工作者。他在香港從事中學輔導工作多年，曾獲香港傑出教師及優秀教師獎。移居紐西蘭後，投入全職牧養與輔導事工，並於多間神學院擔任客席講師。
          </p>
          <p className="font-chinese">
            他的專業涵蓋聚焦取向心理治療（Focusing-Oriented Psychotherapy）、靈性指導、臨床督導、婚姻與家庭治療等領域。
          </p>

          <div className="mt-6">
            <a
              href="https://courses.prolearning.asia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Browse Online Courses →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
