import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const contactInfo = [
  { icon: Mail, labelEn: "Email", labelZh: "電子郵件", value: "tongsir@gmail.com", href: "mailto:tongsir@gmail.com" },
  { icon: Phone, labelEn: "Phone (NZ)", labelZh: "電話 (紐西蘭)", value: "+64 21 190 3568", href: "tel:+64211903568" },
  { icon: MapPin, labelEn: "Location", labelZh: "位置", value: "Auckland, New Zealand", href: null },
];

const socialLinks = [
  { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/tongsiwai/" },
  { icon: Facebook, name: "Facebook", href: "https://www.facebook.com/tongsir/" },
  { icon: Youtube, name: "YouTube", href: "https://www.youtube.com/@SlowFlowNewLifeChannel" },
];

export default function Contact() {
  const { t, language } = useLanguage();
  
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
            {t('Get in Touch', '聯絡交流')}
          </h1>
          <div className="gold-line-center mt-6" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            {t(
              "Feel free to reach out for counseling services, speaking engagements, or general inquiries.",
              "歡迎就輔導服務、講座邀約或一般查詢與我聯絡。"
            )}
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <info.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {language === 'en' ? info.labelEn : <span className="font-chinese">{info.labelZh}</span>}
              </h3>
              {info.href ? (
                <a href={info.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {info.value}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            {t('Send a Message', '傳送訊息')}
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t('Name', '姓名')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder={t('Your name', '您的姓名')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t('Email', '電子郵件')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder={t('your@email.com', '您的電子郵件')}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                {t('Subject', '主題')}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                placeholder={t('How can I help you?', '我可以如何幫助您？')}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t('Message', '訊息')}
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                placeholder={t('Your message...', '您的訊息...')}
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mx-auto"
            >
              <Send size={18} />
              {t('Send Message', '傳送訊息')}
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-display font-semibold text-foreground mb-6">
            {t('Connect on Social Media', '社交媒體')}
          </h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent/10 hover:bg-accent hover:text-white flex items-center justify-center text-accent transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
