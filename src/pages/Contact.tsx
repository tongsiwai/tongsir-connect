import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Instagram, Facebook, Youtube } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! 感謝您的留言！");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-section font-chinese">與我聯絡</h1>
          <p className="heading-sub">Get in Touch</p>
          <div className="gold-line mt-4" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {([
              { name: "name" as const, label: "Name 姓名", type: "text", required: true },
              { name: "email" as const, label: "Email 電郵", type: "email", required: true },
              { name: "phone" as const, label: "Phone 電話 (optional)", type: "tel", required: false },
            ]).map((field) => (
              <div key={field.name}>
                <label className="text-sm font-medium text-foreground">{field.label}</label>
                <input
                  type={field.type}
                  required={field.required}
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                />
              </div>
            ))}
            <div>
              <label className="text-sm font-medium text-foreground">Message 留言</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card-warm">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-accent" size={20} />
                <h3 className="font-display font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-sm text-muted-foreground">Auckland, New Zealand</p>
            </div>
            <div className="card-warm">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="text-accent" size={20} />
                <h3 className="font-display font-semibold text-foreground">Email</h3>
              </div>
              <p className="text-sm text-muted-foreground">tongsir@gmail.com</p>
            </div>
            <div className="card-warm">
              <h3 className="font-display font-semibold text-foreground mb-3">Social Media</h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/tongsiwai/", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/tongsir/", label: "Facebook" },
                  { icon: Youtube, href: "https://www.youtube.com/@SlowFlowNewLifeChannel", label: "YouTube" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
