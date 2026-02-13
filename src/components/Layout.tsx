import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook, Youtube, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "自我介紹", labelEn: "About" },
  { path: "/courses", label: "課程/出版/文章", labelEn: "Courses" },
  { path: "/media", label: "影音分享", labelEn: "Media" },
  { path: "/booking", label: "網上面談服務預約", labelEn: "Booking" },
  { path: "/supporters", label: "同行支持者專區", labelEn: "Supporters" },
  { path: "/contact", label: "聯絡交流", labelEn: "Contact" },
  { path: "/links", label: "其他連結", labelEn: "Links" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container-wide mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight text-foreground">
            TongSir
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "text-foreground after:scale-x-100 after:origin-bottom-left" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors">
                <Icon size={18} />
              </a>
            ))}
            <Link to="/login" className="ml-3 flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors">
              <LogIn size={16} /> Login
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-border bg-background"
            >
              <nav className="flex flex-col px-6 py-4 gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium py-2 transition-colors ${location.pathname === item.path ? "text-accent" : "text-foreground/80 hover:text-foreground"}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-4 pt-3 border-t border-border mt-2">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
                  <Link to="/login" className="ml-auto flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors">
                    <LogIn size={16} /> Login
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground">
        <div className="container-wide mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-lg font-semibold mb-3">TongSir</h3>
              <p className="text-sm opacity-70">Dr. Felix Tong 唐思偉博士</p>
              <p className="text-sm opacity-70 mt-1">Auckland, New Zealand</p>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {navItems.slice(0, 4).map((item) => (
                  <Link key={item.path} to={item.path} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
            TongSir © 2019. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
