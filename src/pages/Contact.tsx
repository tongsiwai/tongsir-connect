import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Instagram, Facebook, Youtube, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      // Get it from https://formspree.io after signing up
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", message: "" });
        toast({
          title: "成功發送 Message Sent!",
          description: "感謝您的留言，我們會盡快回覆。Thank you for your message!",
        });
        
        // Reset submitted state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "發送失敗 Failed to send",
        description: "請稍後再試或直接發送電郵至 tongsir@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  disabled={isSubmitting}
                  className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
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
                disabled={isSubmitting}
                className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitted ? (
                <>
                  <CheckCircle size={16} /> 已發送 Sent!
                </>
              ) : isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  發送中... Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
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
              <a href="mailto:tongsir@gmail.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                tongsir@gmail.com
              </a>
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
