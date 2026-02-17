import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, Compass, Brain, Baby, GraduationCap, Video, MapPin } from "lucide-react";

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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-accent/10 to-background">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
              Counseling Services
            </h1>
            <p className="text-2xl font-chinese text-muted-foreground">輔導服務</p>
            <div className="gold-line-center mt-6" />
            <p className="text-lg text-muted-foreground mt-8 max-w-3xl mx-auto">
              Professional counseling, therapy, and spiritual direction services tailored to your unique needs and journey.
            </p>
            <p className="font-chinese text-base text-muted-foreground mt-4 max-w-3xl mx-auto">
              為您的獨特需要和旅程量身定制的專業輔導、治療和靈修指導服務。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card p-8 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all hover:shadow-xl h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
                  
                  <div className="relative">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                        <service.icon className="w-8 h-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-2">{service.title}</h3>
                        <p className="font-chinese text-lg text-muted-foreground">{service.titleZh}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <p className="font-chinese text-sm text-muted-foreground mb-6 leading-relaxed">{service.descriptionZh}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Formats */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Session Formats
            </h2>
            <p className="text-xl font-chinese text-muted-foreground">輔導形式</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sessionFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl border border-accent/20 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-accent/10 rounded-full mb-4">
                    <format.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{format.title}</h3>
                  <p className="font-chinese text-base text-muted-foreground mb-4">{format.titleZh}</p>
                  <p className="text-sm text-muted-foreground">{format.description}</p>
                  <p className="font-chinese text-xs text-muted-foreground mt-2">{format.descriptionZh}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Offered */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-accent/10 to-accent/5 p-8 rounded-2xl border border-accent/20"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
              Languages Offered 服務語言
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-6 py-3 bg-card rounded-lg border border-accent/30 text-foreground font-medium">
                🇭🇰 廣東話 Cantonese
              </span>
              <span className="px-6 py-3 bg-card rounded-lg border border-accent/30 text-foreground font-medium">
                🇨🇳 普通話 Mandarin
              </span>
              <span className="px-6 py-3 bg-card rounded-lg border border-accent/30 text-foreground font-medium">
                🇬🇧 English
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Professional Registrations
            </h2>
            <p className="text-xl font-chinese text-muted-foreground">專業註冊</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                org: "Hong Kong Professional Counselling Association",
                orgZh: "香港專業輔導協會",
                status: "Associate Fellow 副院士",
              },
              {
                org: "Asian Professional Counselling Association (HK)",
                orgZh: "亞洲專業輔導協會(香港)",
                status: "Registered Clinical Supervisor & Counselor",
              },
              {
                org: "Australian Counseling Association",
                orgZh: "澳洲輔導協會",
                status: "Registered Counselor (MACA)",
              },
            ].map((reg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-accent/20 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-foreground mb-2">{reg.org}</h4>
                <p className="font-chinese text-sm text-muted-foreground mb-3">{reg.orgZh}</p>
                <p className="text-sm text-accent font-medium">{reg.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-accent/20 to-accent/10 p-12 rounded-2xl border border-accent/30 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl font-chinese text-muted-foreground mb-8">準備好開始您的旅程了嗎？</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a session today to start your path toward healing, growth, and transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking" className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg">
                Book a Session 預約輔導
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-card border-2 border-accent text-foreground rounded-lg hover:bg-accent/10 transition-colors font-semibold text-lg">
                Contact Me 聯絡我
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
