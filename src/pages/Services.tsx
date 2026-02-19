import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, Compass, Brain, Baby, GraduationCap, Video, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import felixPhoto from "@/assets/Felix2.jpg";
import felixTalkBg from "@/assets/Felix-Talk.jpg";

const services = [
  {
    icon: Heart,
    title: "Marriage & Couples Counseling",
    titleZh: "婚姻輔導及伴侣治療",
    description: "Professional support for couples facing relationship challenges, communication issues, or seeking to strengthen their bond.",
    descriptionZh: "為面對關係挑戰、溝通問題的伴侣提供專業支持，或幫助希望強化關係的伴侣。",
    features: [
      "Gottman Method trained",
      "Emotionally Focused Therapy (EFT)",
      "Pre-marital counseling (PREPARE/ENRICH certified)",
      "Conflict resolution & communication skills",
    ],
    color: "from-red-500/10 to-pink-500/10",
  },
  {
    icon: Users,
    title: "Family Therapy",
    titleZh: "家庭治療",
    description: "Helping families navigate challenges, improve communication, and strengthen relationships across generations.",
    descriptionZh: "幫助家庭處理挑戰、改善溝通、並加強跨代關係。",
    features: [
      "Satir Family Therapy approach",
      "Parent-child relationship support",
      "Blended family counseling",
      "Multi-generational healing",
    ],
    color: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: Compass,
    title: "Spiritual Direction",
    titleZh: "靈修指導",
    description: "Guiding individuals in their spiritual journey, contemplative practices, and deepening relationship with the Divine.",
    descriptionZh: "引導個人的屬靈旅程、默觀實踐，並加深與神的關係。",
    features: [
      "D.Min in Spiritual Direction",
      "Contemplative prayer guidance",
      "Discernment support",
      "Integration of faith and life",
    ],
    color: "from-purple-500/10 to-violet-500/10",
  },
  {
    icon: Brain,
    title: "Focusing-Oriented Therapy",
    titleZh: "聚焦取向心理治療",
    description: "A body-centered approach helping clients connect with their inner wisdom and process emotions effectively.",
    descriptionZh: "以身體為中心的方法，幫助案主連結內在智慧，有效處理情緒。",
    features: [
      "Certified Focusing Trainer (The Focusing Institute, USA)",
      "Body-mind integration",
      "Emotional processing & healing",
      "Self-awareness development",
    ],
    color: "from-yellow-500/10 to-orange-500/10",
  },
  {
    icon: Baby,
    title: "Parenting Support",
    titleZh: "親子教養支持",
    description: "Evidence-based parenting guidance to help families build strong, healthy relationships with children.",
    descriptionZh: "基於實證的親子教養指導，幫助家庭建立穩固、健康的親子關係。",
    features: [
      "Bringing Baby Home certified educator (Gottman Institute)",
      "Tuning In To Kids/Teens facilitator",
      "6A Character Education instructor",
      "Emotion coaching for parents",
    ],
    color: "from-green-500/10 to-teal-500/10",
  },
  {
    icon: GraduationCap,
    title: "Clinical Supervision",
    titleZh: "臨床督導",
    description: "Professional supervision for counselors and therapists seeking to enhance their clinical skills and self-awareness.",
    descriptionZh: "為希望提升臨床技能和自我覺察的輔導員和治療師提供專業督導。",
    features: [
      "Registered Clinical Supervisor (APCA)",
      "Individual & group supervision",
      "Case consultation",
      "Professional development support",
    ],
    color: "from-cyan-500/10 to-blue-500/10",
  },
];

const sessionFormats = [
  {
    icon: Video,
    title: "Online Sessions",
    titleZh: "線上輔導",
    description: "Secure video counseling via Zoom or other platforms",
    descriptionZh: "透過 Zoom 或其他平台進行安全的視訊輔導",
  },
  {
    icon: MapPin,
    title: "In-Person Sessions",
    titleZh: "面對面輔導",
    description: "Face-to-face counseling in Auckland, New Zealand",
    descriptionZh: "在紐西蘭奧克蘭進行面對面輔導",
  },
];

export default function Services() {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with portrait */}
      <section className="section-padding bg-hero-pattern overflow-hidden pt-32 lg:pt-40">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
                {t('Counseling Services', '輔導服務')}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                {t(
                  'Professional counseling, therapy, and spiritual direction services tailored to your unique needs and journey.',
                  '為您的獨特需要和旅程量身定制的專業輔導、治療和靈修指導服務。'
                )}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                  廣東話 · 普通話 · English
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  Online & In-Person
                </span>
                <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                  Auckland, NZ
                </span>
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto">
                <img 
                  src={felixPhoto} 
                  alt="Dr. Felix Tong - Counseling Services" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background relative">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t('Services Offered', '提供的服務')}
            </h2>
            <div className="gold-line-center mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-2xl border border-border bg-gradient-to-br ${service.color} hover:shadow-xl transition-all duration-300 group`}
              >
                <service.icon className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {language === 'en' ? service.title : <span className="font-chinese">{service.titleZh}</span>}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {language === 'en' ? service.description : <span className="font-chinese">{service.descriptionZh}</span>}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-muted-foreground">
                      <span className="text-accent mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talks & Workshops */}
      <section 
        className="section-padding bg-photo-cover bg-photo-overlay-left" 
        style={{ 
          backgroundImage: `url(${felixTalkBg})`,
          backgroundPosition: 'top'
        }}
      >
        <div className="container-wide mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
                {t('Talks & Workshops', '講座、培訓及工作坊')}
              </h2>
              <div className="gold-line mb-6"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
                {t(
                  'Dr. Felix Tong is available for speaking engagements, workshops, and seminars for churches, schools, organizations, and parent groups. Topics include marriage & family, parenting, emotion coaching, spiritual direction, and life formation.',
                  '提供專題講座、工作坊及培訓課程，範疇涵蓋婚姻家庭、親子教養、情緒教練、青少年成長、靈修指導及生命塑造等。'
                )}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {sessionFormats.map((format, index) => (
                  <div key={index} className="p-6 rounded-xl bg-background/60 backdrop-blur-md border border-white/20 shadow-lg">
                    <format.icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {language === 'en' ? format.title : <span className="font-chinese">{format.titleZh}</span>}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? format.description : <span className="font-chinese">{format.descriptionZh}</span>}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              {t('Professional Registrations', '專業註冊')}
            </h2>
            <div className="gold-line-center mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                org: "Hong Kong Professional Counselling Association", 
                orgZh: "香港專業輔導協會",
                status: "Associate Fellow",
                statusZh: "副院士"
              },
              { 
                org: "Asian Professional Counselling Association (HK)", 
                orgZh: "亞洲專業輔導協會(香港)",
                status: "Registered Clinical Supervisor & Counselor",
                statusZh: "註冊臨床督導及輔導員"
              },
              { 
                org: "Australian Counseling Association", 
                orgZh: "澳洲輔導協會",
                status: "Registered Counselor (MACA)",
                statusZh: "註冊輔導員"
              },
            ].map((reg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-card border border-border shadow-sm text-center"
              >
                <h4 className="text-lg font-bold text-foreground mb-2">{reg.org}</h4>
                <p className="text-base font-chinese text-accent mb-4">{reg.orgZh}</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? reg.status : <span className="font-chinese">{reg.statusZh}</span>}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots opacity-10"></div>
        <div className="container-narrow mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              {t('Ready to Begin Your Journey?', '準備好開始您的旅程了嗎？')}
            </h2>
            <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
              {t(
                'Book a session today to start your path toward healing, growth, and transformation.',
                '今天就預約，踏上您的癒合、成長與轉化之路。'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/booking" 
                className="px-8 py-4 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-all shadow-xl hover:shadow-2xl"
              >
                {t('Book a Session', '預約輔導')}
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                {t('Contact Me', '聯絡我')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
