import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Heart, BookOpen, Award } from "lucide-react";
import ordinationBg from "@/assets/Ordaination.jpg";
import felixPortrait from "@/assets/Felix2.jpg";

export default function About() {
  const { t, language } = useLanguage();

  const highlights = [
    {
      icon: GraduationCap,
      titleEn: "Education",
      titleZh: "學歷",
      descEn: "D.Min in Spiritual Direction, M.A. in Counselling, M.Div in Marriage & Family Therapy",
      descZh: "教牧學博士（靈修指導）、輔導學碩士、道學碩士（婚姻及家庭治療）"
    },
    {
      icon: Heart,
      titleEn: "Ministry",
      titleZh: "事工",
      descEn: "Pastor at Mountainside Lutheran Church, Auckland University of Technology Chaplain",
      descZh: "紐西蘭信義會蒙恩堂牧師、奧克蘭理工大學校牧"
    },
    {
      icon: BookOpen,
      titleEn: "Experience",
      titleZh: "經驗",
      descEn: "10+ years in counseling, supervision, teaching, and spiritual direction",
      descZh: "超過10年輔導、督導、教學及靈修指導經驗"
    },
    {
      icon: Award,
      titleEn: "Recognition",
      titleZh: "殊榮",
      descEn: "Hong Kong Outstanding Teacher Award (2008 & 2009)",
      descZh: "香港傑出教師獎（2008 & 2009）"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Ordination Photo */}
      <section 
        className="section-padding bg-photo-cover bg-photo-overlay-dark min-h-[500px] flex items-center"
        style={{ backgroundImage: `url(${ordinationBg})` }}
      >
        <div className="container-wide mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className={`text-4xl md:text-6xl font-display font-bold text-foreground mb-6 ${language === 'zh' ? 'font-chinese' : ''}`}>
              {t('About Dr. Felix Tong', '關於唐思偉博士')}
            </h1>
            <div className="gold-line mb-6"></div>
            <p className={`text-xl text-foreground/90 leading-relaxed ${language === 'zh' ? 'font-chinese' : ''}`}>
              {t(
                'A servant of God dedicated to walking alongside individuals, couples, and families in their journey of healing, growth, and spiritual formation.',
                '一位事奉神的僕人，致力於陪伴個人、伴侣和家庭走過療癒、成長和靈命塑造的旅程。'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-warm text-center p-8"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-accent" size={26} />
                </div>
                <h3 className={`text-lg font-bold text-foreground mb-3 ${language === 'zh' ? 'font-chinese' : ''}`}>
                  {language === 'en' ? item.titleEn : item.titleZh}
                </h3>
                <p className={`text-sm text-muted-foreground leading-relaxed ${language === 'zh' ? 'font-chinese' : ''}`}>
                  {language === 'en' ? item.descEn : item.descZh}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={felixPortrait} 
                alt="Dr. Felix Tong" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className={`text-3xl font-display font-bold text-foreground ${language === 'zh' ? 'font-chinese' : ''}`}>
                {t('Journey & Calling', '旅程與呼召')}
              </h2>
              <div className="gold-line"></div>
              
              {language === 'zh' ? (
                <div className="space-y-4 text-muted-foreground leading-relaxed font-chinese">
                  <p>
                    唐思偉博士現為<strong className="text-foreground">紐西蘭信義會蒙恩堂傳道</strong>，負責華人事工及開展，並為<strong className="text-foreground">奧克蘭理工大學校牧</strong>。亦是全球性創意教育運動 Design For Change (New Zealand) 紐西蘭地區代表，及香港專業家庭教育協會顧問。
                  </p>
                  <p>
                    曾擔任路德會家庭輔導中心創辦主任兼臨床督導，中學輔導主任及多間大專院校及神學院客席講師。早年畢業於香港科技大學，其後獲取南澳洲大學輔導學碩士，建道神學院基督教研究碩士（主修婚姻家庭治療）及婚姻及家庭治療文憑，並修畢美國神學研究協會教牧學博士課程，主修靈修指導。
                  </p>
                  <p>
                    唐博士乃美國 Focusing Institute Certified Focusing Trainer/Focusing Oriented Therapist，「6A品格教育」認可導師，擁有 NLP 執行師證書，Prepare/Enrich 婚前輔導/婚後成長心理測試證書，T-JTA 心理測試認可使用者及授權講師。並修畢「沙維雅家庭治療專業輔導證書」、「以主為中心之家庭重塑高級文憑」及香港樹仁大學－輔導暨研究中心之「輔導臨床督導專業證書」。
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dr. Felix Tong currently serves as <strong className="text-foreground">Pastor at Mountainside Lutheran Church</strong>, New Zealand, overseeing Chinese ministry and development, and as <strong className="text-foreground">Auckland University of Technology Chaplain</strong>. He is also the New Zealand representative for the global creative education movement Design For Change and a consultant for the Hong Kong Professional Family Education Association.
                  </p>
                  <p>
                    Previously, Dr. Tong served as the founding director and clinical supervisor of the Lutheran Family Counselling Centre, secondary school counseling director, and guest lecturer at multiple tertiary institutions and seminaries. He graduated from the Hong Kong University of Science and Technology, later obtaining an M.A. in Counselling from the University of South Australia, an M.Div. in Marriage and Family Therapy from Alliance Bible Seminary, and completed a D.Min. program in Spiritual Direction from the Association of Theological Schools.
                  </p>
                  <p>
                    Dr. Tong is a Certified Focusing Trainer/Focusing-Oriented Therapist (Focusing Institute, USA), certified "6A Character Education" instructor, holds NLP Practitioner certification, PREPARE/ENRICH certification, and is a certified T-JTA administrator. He has also completed professional training in Satir Family Therapy, Christ-Centered Family Reconstruction, ICEEFT Emotionally Focused Therapy, and Gottman Method Couples Therapy Level 1.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-display font-bold text-foreground mb-4 ${language === 'zh' ? 'font-chinese' : ''}`}>
              {t('Professional Credentials', '專業資格')}
            </h2>
            <div className="gold-line-center mb-4"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              { en: "Associate Fellow, Hong Kong Professional Counselling Association", zh: "香港專業輔導協會副院士" },
              { en: "Registered Clinical Supervisor & Counselor, Asian Professional Counselling Association (HK)", zh: "亞洲專業輔導協會(香港)註冊臨床督導及輔導員" },
              { en: "Registered Counselor (MACA), Australian Counseling Association", zh: "澳洲輔導協會合格註冊輔導員" },
              { en: "Certified Focusing Trainer, The Focusing Institute (USA)", zh: "美國 Focusing Institute 認證聚焦導師" },
              { en: "Certified Bringing Baby Home Educator, The Gottman Institute", zh: "The Gottman Institute 認證 Bringing Baby Home 導師" },
              { en: "Certified Tuning In To Kids/Teens Facilitator", zh: "Tuning In To Kids/Teens 認證引導員" },
              { en: "Hong Kong Outstanding Teacher (2008)", zh: "第八屆香港傑出教師 (2008)" },
              { en: "Hong Kong Excellent Teacher Award - Caring Category (2009)", zh: "第六屆香港優秀教師獲獎 - 關愛組 (2009)" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`p-4 bg-card rounded-lg border-l-4 border-accent ${language === 'zh' ? 'font-chinese' : ''}`}
              >
                <p className="text-sm text-foreground">
                  {language === 'en' ? item.en : item.zh}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
