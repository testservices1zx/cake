import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Menu", to: "/menu" },
  { label: "Our Story", to: "/our-story" },
  { label: "Buttercreams", to: "/buttercreams" },
  { label: "The Standard", to: "/standard" },
  { label: "Rewards", to: "/rewards" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-display text-3xl text-foreground">Cake Studio</span>
            <span className="font-mono-display text-[10px] text-muted-foreground mt-1">
              NYC · ASTORIA
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="font-mono-display text-[13px] text-foreground/85 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {n.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/contact" className="pill pill-white">Pickup</Link>
            <Link to="/contact" className="pill pill-primary">
              <span aria-hidden>🎂</span> Delivery
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden font-mono-display text-sm text-foreground"
            aria-label="Open menu"
          >
            MENU
          </button>
        </div>
        <div className="hidden md:block bg-white text-black text-center text-[13px] italic font-semibold py-2">
          UNLOCK SWEET PERKS OF THE CAKE STUDIO INNER CIRCLE!{" "}
          <Link to="/rewards" className="not-italic underline decoration-primary decoration-2 underline-offset-2 text-primary">
            SIGN UP
          </Link>{" "}
          FOR EXCLUSIVE REWARDS.
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-background lg:hidden flex flex-col">
          <div className="container-x flex items-center justify-between gap-6 h-20">
            <span className="font-display text-3xl truncate">Cake Studio</span>
            <button onClick={() => setOpen(false)} className="font-mono-display text-sm text-right ml-auto shrink-0" aria-label="Close">
              CLOSE
            </button>
          </div>
          <nav className="flex-1 container-x flex flex-col gap-6 pt-8">
            <Link to="/" onClick={() => setOpen(false)} className="text-3xl font-display">Home</Link>
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-3xl font-display"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-32">
      <div className="container-x py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="font-display text-3xl">Cake Studio</div>
          <p className="text-muted-foreground text-sm mt-3 max-w-xs">
            Seriously beautiful cakes · Astoria, NYC. Women-owned, handcrafted by Duana.
          </p>
          <div className="flex gap-3 mt-5 text-primary">
            <a href="https://instagram.com" aria-label="Instagram" className="hover:opacity-70">Instagram</a>
            <span className="text-border">·</span>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:opacity-70">Facebook</a>
            <span className="text-border">·</span>
            <a href="https://tiktok.com" aria-label="TikTok" className="hover:opacity-70">TikTok</a>
          </div>
        </div>
        <div>
          <div className="font-mono-display text-xs text-muted-foreground mb-4">QUICK LINKS</div>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-primary">{n.label}</Link>
              </li>
            ))}
            <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono-display text-xs text-muted-foreground mb-4">JOIN 1,000+ CELEBRATING WITH US</div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 bg-card border border-border rounded-full px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
            <button className="pill pill-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="hairline">
        <div className="container-x py-5 text-center text-xs text-muted-foreground">
          © 2026 Cake Studio NYC · Women-Owned · Crafted with love in Astoria ·{" "}
          <a className="hover:text-primary">Privacy</a> · <a className="hover:text-primary">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 800);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 64 64" className="w-12 h-12 spin-slow text-foreground" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 6v18" />
        <path d="M22 24h20l-3 28a4 4 0 0 1-4 3.6h-6a4 4 0 0 1-4-3.6L22 24z" />
        <path d="M26 30v18M32 30v18M38 30v18" />
      </svg>
    </div>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Loader />
      <Header />
      <main className="pt-[7.5rem]">{children}</main>
      <Footer />
    </div>
  );
}
