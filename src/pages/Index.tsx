import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import YoutubeSection from "@/components/home/YoutubeSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Video, Calendar, Mail } from "lucide-react";

export default function Index() {
  return (
    <>
      <HeroSection />
      
      {/* Quick Links Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Explore
            </h2>
            <p className="text-xl font-chinese text-muted-foreground">探索</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "About TongSir",
                titleZh: "關於唐博士",
                description: "Learn more about Dr. Tong's background, credentials, and ministry",
                descriptionZh: "了解唐博士的背景、資歷及事工",
                link: "/about",
                color: "from-blue-500/20 to-indigo-500/20",
              },
              {
                icon: Video,
                title: "Media & Videos",
                titleZh: "影音分享",
                description: "Watch teaching videos, sermons, and church live streams",
                descriptionZh: "觀看教學影片、講道及崇拜直播",
                link: "/media",
                color: "from-red-500/20 to-pink-500/20",
              },
              {
                icon: Calendar,
                title: "Book a Session",
                titleZh: "預約輔導",
                description: "Schedule counseling or spiritual direction sessions",
                descriptionZh: "預約輔導或靈修指導時間",
                link: "/booking",
                color: "from-green-500/20 to-teal-500/20",
              },
              {
                icon: Mail,
                title: "Get in Touch",
                titleZh: "聯絡我們",
                description: "Contact Dr. Tong for inquiries and collaborations",
                descriptionZh: "與唐博士聯絡查詢及合作",
                link: "/contact",
                color: "from-purple-500/20 to-violet-500/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={item.link} className="block group h-full">
                  <div className="bg-card p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all hover:shadow-xl h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />
                    <div className="relative">
                      <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                        <item.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="font-chinese text-sm text-muted-foreground mb-3">{item.titleZh}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.description}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed font-chinese">{item.descriptionZh}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />
      <YoutubeSection />
    </>
  );
}
