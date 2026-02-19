import { motion } from "framer-motion";
import { Calendar, Clock, Video } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import portMacquaireBg from "@/assets/FelixPortMacquaire.jpg";

export default function Booking() {
  const { t, language } = useLanguage();
  
  return (
    <section className="min-h-screen">
      {/* Hero with Background */}
      <div className="section-padding">
        <div className="container-narrow mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="heading-section">
              {t('Online Consultation Booking', '網上面談服務預約')}
            </h1>
            <div className="gold-line mt-4" />
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Video, 
                titleEn: "Individual Counseling", 
                titleZh: "個人輔導", 
                descEn: "One-on-one online counseling sessions via Zoom",
                descZh: "透過 Zoom 進行一對一線上輔導"
              },
              { 
                icon: Calendar, 
                titleEn: "Spiritual Direction", 
                titleZh: "靈性指導", 
                descEn: "Guided contemplative sessions for spiritual growth",
                descZh: "引導默觀與靈性成長的會面"
              },
              { 
                icon: Clock, 
                titleEn: "Clinical Supervision", 
                titleZh: "臨床督導", 
                descEn: "Professional supervision for counselors and therapists",
                descZh: "為輔導員和治療師提供專業督導"
              },
            ].map(({ icon: Icon, titleEn, titleZh, descEn, descZh }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-warm text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-accent" size={22} />
                </div>
                <h3 className="text-base font-display font-semibold text-foreground">
                  {language === 'en' ? titleEn : <span className="font-chinese">{titleZh}</span>}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {language === 'en' ? descEn : <span className="font-chinese">{descZh}</span>}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Section with Photo */}
      <section 
        className="section-padding bg-photo-cover bg-photo-overlay-left min-h-[400px] flex items-center"
        style={{ backgroundImage: `url(${portMacquaireBg})` }}
      >
        <div className="container-narrow mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="card-warm text-center max-w-xl mx-auto"
          >
            <p className={`text-muted-foreground font-body mb-6 ${language === 'zh' ? 'font-chinese' : ''}`}>
              {t(
                'Book your appointment directly via Google Calendar:',
                '直接透過 Google 日曆預約您的服務：'
              )}
            </p>
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2SRHjdB_rHgf8f5OEtGKozFUELzBeIJvL3GGEhkSK6ZhQe7obW_gloC0YlKdsWCTJKDBf7CFGk?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Calendar size={16} /> {t('Book an Appointment', '立即預約')}
            </a>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
