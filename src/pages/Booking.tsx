import { motion } from "framer-motion";
import { Calendar, Clock, Video } from "lucide-react";

export default function Booking() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-section font-chinese">網上面談服務預約</h1>
          <p className="heading-sub">Online Consultation Booking</p>
          <div className="gold-line mt-4" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Video, title: "個人輔導 Individual Counseling", desc: "One-on-one online counseling sessions via Zoom" },
            { icon: Calendar, title: "靈性指導 Spiritual Direction", desc: "Guided contemplative sessions for spiritual growth" },
            { icon: Clock, title: "臨床督導 Clinical Supervision", desc: "Professional supervision for counselors and therapists" },
          ].map(({ icon: Icon, title, desc }, i) => (
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
              <h3 className="text-base font-display font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 card-warm text-center"
        >
          <p className="text-muted-foreground font-body mb-6">
            Book your appointment directly via Google Calendar:
          </p>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2SRHjdB_rHgf8f5OEtGKozFUELzBeIJvL3GGEhkSK6ZhQe7obW_gloC0YlKdsWCTJKDBf7CFGk?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Calendar size={16} /> Book an Appointment 立即預約
          </a>
        </motion.div>
      </div>
    </section>
  );
}
