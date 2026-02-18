import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook, Youtube, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "主頁", labelEn: "Home" },
  { path: "/about", label: "關於唐博士", labelEn: "About" },
  { path: "/services", label: "輔導服務", labelEn: "Services" },
  { path: "/courses", label: "課程/出版", labelEn: "Courses" },
  { path: "/blog", label: "文章", labelEn: "Blog" },
  { path: "/media", label: "影音分享", labelEn: "Media" },
  { path: "/booking", label: "預約服務", labelEn: "Booking" },
  { path: "/contact", label: "聯絡交流", labelEn: "Contact" },
  { path: "/links", label: "連結", labelEn: "Links" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/tongsiwai/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/tongsir/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@SlowFlowNewLifeChannel", label: "YouTube" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Check if current path starts with /blog for highlighting
  const isBlogPath = location.pathname.startsWith('/blog');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-wide mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold tracking-tight text-foreground">TongSir</span>
            <span className="font-chinese text-sm text-muted-foreground hidden sm:inline">唐思偉博士</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.path === '/blog' 
                ? isBlogPath 
                : location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive 
                      ? "bg-accent/10 text-accent" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                  }`}
                >
                  <span className="font-chinese">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors">
                <Icon size={18} />
              </a>
            ))}
            <Link to="/booking" className="ml-3 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium">
              預約 Book Now
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
              <nav className="flex flex-col px-6 py-4 gap-2">
                {navItems.map((item) => {
                  const isActive = item.path === '/blog' 
                    ? isBlogPath 
                    : location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive 
                          ? "bg-accent/10 text-accent" 
                          : "text-foreground/80 hover:text-foreground hover:bg-accent/5"
                      }`}
                    >
                      <span className="font-chinese">{item.label}</span>
                    </Link>
                  );
                })}
                <div className="flex items-center gap-4 pt-3 border-t border-border mt-2">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display text-lg font-semibold mb-3">TongSir</h3>
              <p className="text-sm opacity-70 font-chinese">唐思偉博士</p>
              <p className="text-sm opacity-70">Dr. Felix Tong</p>
              <p className="text-sm opacity-70 mt-2">Auckland, New Zealand</p>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">About</h4>
              <div className="flex flex-col gap-2">
                <Link to="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-chinese">
                  關於唐博士
                </Link>
                <Link to="/services" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-chinese">
                  輔導服務
                </Link>
                <Link to="/courses" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-chinese">
                  課程/出版
                </Link>
                <Link to="/blog" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-chinese">
                  文章
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Get Started</h4>
              <div className="flex flex-col gap-2">
                <Link to="/booking" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-chinese">
                  預約服務
                </Link>
                <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-chinese">
                  聯絡交流
                </Link>
                <Link to="/supporters" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-chinese">
                  同行支持者
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Connect</h4>
              <div className="flex gap-4 mb-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <p className="text-xs opacity-60">
                Providing counseling, spiritual direction, and education across cultures.
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
            <p>TongSir © 2019-{new Date().getFullYear()}. All rights reserved.</p>
            <p className="mt-1 text-xs">Counselor • Pastor • Educator | 輔導員 • 傳道 • 教育工作者</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
