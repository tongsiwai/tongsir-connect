import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function Supporters() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
            <Lock className="text-accent" size={28} />
          </div>
          <h1 className="heading-section font-chinese">同行支持者專區</h1>
          <p className="heading-sub">Supporters Area — Login Required</p>
          <div className="gold-line mt-4 mx-auto" />
          <p className="text-muted-foreground mt-8 max-w-md mx-auto">
            This area is reserved for registered supporters. Please log in to access exclusive content, resources, and community updates.
          </p>
          <a
            href="/login"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Lock size={16} /> Login to Access
          </a>
        </motion.div>
      </div>
    </section>
  );
}
