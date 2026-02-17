import { motion } from "framer-motion";
import { Youtube, ExternalLink } from "lucide-react";

const channels = [
  {
    name: "Felix Tong 個人頻道",
    nameEn: "Felix Tong Personal Channel",
    url: "https://www.youtube.com/@FelixTong",
    videos: [
      {
        id: "yyYQE14VIA4",
        title: "如何平衡愛與管教 一個家長圍爐課程! 2025 06 27",
        views: "74次觀看",
        date: "7個月前",
      },
      {
        id: "1dttHeGRloc",
        title: "破解關係的末日四騎士：如何通過積極聆聽重建家庭連繫",
        views: "83次觀看",
        date: "1年前",
      },
      {
        id: "vnX14DyepVg",
        title: "運用《路德小問答》﹐豐富我們的《主禱文》祈禱經驗 (前半部份)",
        views: "89次觀看",
        date: "1年前",
      },
      {
        id: "hoQ8XTYQTZc",
        title: "我有"真．悔改"?... 有就可以開始個人的 Reformation (宗教改革/復原)」??",
        views: "109次觀看",
        date: "1年前",
      },
      {
        id: "hwxfLq6NzuE",
        title: "夫婦/兩性關係系列: 墜入愛河的 36 個問題",
        views: "136次觀看",
        date: "1年前",
      },
    ],
  },
  {
    name: "躺瀡新活頻道",
    nameEn: "Slow Flow New Life Channel",
    url: "https://www.youtube.com/@SlowFlowNewLifeChannel",
    videos: [
      {
        id: "W7MhrPDs8Ng",
        title: "信義會蒙恩堂崇拜直播 20260214",
        views: "14次觀看",
        date: "3天前",
      },
      {
        id: "QiRnXe9_iMM",
        title: "信義會蒙恩堂崇拜 暨 唐思偉傳道按立及就職典禮 直播 20260207",
        views: "147次觀看",
        date: "10天前",
      },
      {
        id: "aphgbdypnBM",
        title: "信義會蒙恩堂崇拜直播 20260131",
        views: "10次觀看",
        date: "2週前",
      },
      {
        id: "RKn_W4f6x3A",
        title: "信義會蒙恩堂崇拜直播 20260124",
        views: "8次觀看",
        date: "3週前",
      },
      {
        id: "5wjw0__qfwg",
        title: "信義會蒙恩堂崇拜直播 20260117",
        views: "20次觀看",
        date: "1個月前",
      },
    ],
  },
];

export default function Media() {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-section flex items-center gap-3">
            <Youtube className="text-accent" size={32} />
            <span className="font-chinese">影音分享</span>
          </h1>
          <p className="heading-sub">Media & Video Sharing</p>
          <div className="gold-line mt-4" />
        </motion.div>

        {/* YouTube Channels */}
        {channels.map((channel, channelIndex) => (
          <div key={channelIndex} className="mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-2">{channel.nameEn}</h2>
                  <p className="text-xl font-chinese text-muted-foreground">{channel.name}</p>
                </div>
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  <Youtube size={20} />
                  <span>訪問頻道</span>
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="gold-line mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {channel.videos.map((video, videoIndex) => (
                <motion.div
                  key={videoIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: videoIndex * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-accent/10">
                    <div className="aspect-video relative overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{video.views}</span>
                        <span>•</span>
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-2xl border border-accent/20">
            <Youtube className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">訂閱我們的頻道</h3>
            <p className="text-muted-foreground mb-6">
              獲取最新的影音分享，包括靈修指導、婚姻輔導、教會崇拜直播等內容
            </p>
            <p className="text-sm text-muted-foreground">
              Subscribe to our channels for the latest videos on spiritual direction, marriage counseling, and church worship live streams
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
