import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteShell";
import heroCake from "@/assets/hero-cake.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import storefront from "@/assets/storefront.jpg";
import kitchen from "@/assets/kitchen.jpg";
import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";
import founder from "@/assets/founder.jpg";
import secretButtercream from "@/assets/secret-buttercream.jpg";
import secretStandard from "@/assets/secret-standard.jpg";
import menuTiered from "@/assets/menu-tiered.jpg";
import menuUnicorn from "@/assets/menu-unicorn.jpg";
import menuValentine from "@/assets/menu-valentine.jpg";
import menuMousse from "@/assets/menu-mousse.jpg";
import menuBaby from "@/assets/menu-babyshower.jpg";
import menuPops from "@/assets/menu-cakepops.jpg";
import rewards from "@/assets/rewards-banner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cake Studio NYC — Seriously Beautiful Cakes · Astoria" },
      { name: "description", content: "Women-owned artisan cake studio in Astoria, NYC. Custom celebration cakes, wedding cakes, hand-piped cookies, cupcakes & cake pops by Duana. 4.8★ on Google." },
      { property: "og:title", content: "Cake Studio NYC — Seriously Beautiful Cakes" },
      { property: "og:description", content: "Hand-crafted custom cakes in Astoria, NYC. Wedding cakes, themed birthdays, cookies & more." },
      { property: "og:image", content: heroCake },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Locations />
      <Journal />
      <BrandStory />
      <OurSecret />
      <MenuStrip />
      <Reviews />
      <RewardsBanner />
      <FindUs />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center opacity-40 lg:opacity-20"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-x pt-16 md:pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[72vh]">
          {/* LEFT — copy */}
          <div className="lg:col-span-7 stagger">
            <p className="font-mono-display text-[11px] text-muted-foreground">
              EST. 2017 · WOMEN-OWNED · ASTORIA NYC
            </p>
            <h1
              className="font-display text-foreground leading-[0.92] tracking-tight mt-6"
              style={{ fontSize: "clamp(56px, 9vw, 168px)" }}
            >
              <span className="block">Seriously</span>
              <span className="block text-primary">Beautiful</span>
              <span className="block">Cakes.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Custom celebration cakes, hand-piped cookies & sweet artistry —
              handcrafted in Astoria by Duana.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="pill pill-primary">Order a Cake</Link>
              <Link to="/menu" className="pill pill-outline">View the Menu</Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <span className="text-primary text-lg">★★★★★</span>
              <span className="text-muted-foreground">4.8 · 44 Google reviews</span>
            </div>
          </div>

          {/* MOBILE — featured cake card */}
          <div className="lg:hidden relative mt-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <img
                src={heroCake}
                alt="Signature tiered cake by Cake Studio NYC"
                className="w-full h-full object-cover"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3">
                <div>
                  <p className="font-mono-display text-[10px] text-primary">SIGNATURE</p>
                  <p className="font-display text-2xl mt-1 leading-tight">The Rose-Petal Tier</p>
                </div>
                <Link to="/menu" className="pill pill-white !py-2 !px-4 !text-[11px] whitespace-nowrap">
                  View →
                </Link>
              </div>
              <div className="absolute top-3 left-3 bg-background/90 backdrop-blur border border-border rounded-xl px-3 py-2">
                <p className="font-mono-display text-[9px] text-primary">WOMEN-OWNED</p>
                <p className="font-display text-base leading-none mt-0.5">Made by Duana</p>
              </div>
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-xl px-3 py-2">
                <p className="font-mono-display text-[9px]">FROM</p>
                <p className="font-display text-xl leading-none mt-0.5">$95</p>
              </div>
            </div>
          </div>

          {/* RIGHT — featured cake card (desktop) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <img
                src={heroCake}
                alt="Signature tiered cake by Cake Studio NYC"
                className="w-full h-full object-cover"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono-display text-[10px] text-primary">SIGNATURE</p>
                  <p className="font-display text-2xl mt-1 leading-tight">The Rose-Petal Tier</p>
                </div>
                <Link to="/menu" className="pill pill-white !py-2 !px-4 !text-[11px] whitespace-nowrap">
                  View →
                </Link>
              </div>
            </div>

            {/* Floating accent badge */}
            <div className="absolute -top-4 -left-4 bg-background/90 backdrop-blur border border-border rounded-2xl px-4 py-3 shadow-xl">
              <p className="font-mono-display text-[10px] text-primary">WOMEN-OWNED</p>
              <p className="font-display text-lg leading-none mt-1">Made by Duana</p>
            </div>
            <div className="absolute -bottom-5 -right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-xl">
              <p className="font-mono-display text-[10px]">FROM</p>
              <p className="font-display text-2xl leading-none mt-1">$95</p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden backdrop-blur-sm">
          {[
            { k: "8+", l: "Years in Astoria" },
            { k: "2,400+", l: "Cakes delivered" },
            { k: "12", l: "Buttercream flavors" },
            { k: "4.8★", l: "44 Google reviews" },
          ].map((s) => (
            <div key={s.l} className="bg-background/70 px-5 py-5 md:py-6">
              <div className="font-display text-3xl md:text-4xl text-primary leading-none">{s.k}</div>
              <div className="font-mono-display text-[10px] text-muted-foreground mt-2">{s.l.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-display text-muted-foreground">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>✓ WOMEN-OWNED</span>
            <span>✓ NYC DELIVERY</span>
            <span>✓ KERBSIDE PICKUP</span>
            <span>✓ CUSTOM CONSULTATIONS</span>
          </div>
          <a href="#story" className="hidden md:inline-flex items-center gap-2 hover:text-primary">SCROLL ↓</a>
        </div>
      </div>
    </section>
  );
}



function Locations() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="font-mono-display text-xs text-primary mb-3">VISIT</p>
            <h2 className="font-display text-5xl md:text-6xl">Come to the Studio</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            One studio. One whisk. Every cake handmade in Astoria.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        <Reveal>
          <article className="card-elev overflow-hidden group">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={storefront} alt="Cake Studio NYC storefront in Astoria at dusk" loading="lazy" width={1280} height={1280}
                   className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="font-mono-display text-xs text-primary">ASTORIA</p>
                <h3 className="font-display text-2xl mt-1">Visit the Studio</h3>
              </div>
              <Link to="/contact" className="font-mono-display text-xs text-foreground/80 hover:text-primary">VIEW →</Link>
            </div>
          </article>
        </Reveal>
        <Reveal>
          <article className="card-elev overflow-hidden group">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={kitchen} alt="Bright marble cake decorating kitchen with cakes in progress" loading="lazy" width={1280} height={1280}
                   className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="font-mono-display text-xs text-primary">OUR KITCHEN</p>
                <h3 className="font-display text-2xl mt-1">Inside the Kitchen</h3>
              </div>
              <Link to="/our-story" className="font-mono-display text-xs text-foreground/80 hover:text-primary">PEEK →</Link>
            </div>
          </article>
        </Reveal>
        <Reveal>
          <article className="card-elev p-8 flex flex-col justify-between aspect-[4/5]">
            <div>
              <p className="font-mono-display text-xs text-primary">COMING SOON</p>
              <h3 className="font-display text-4xl mt-3 leading-none">We're Expanding</h3>
              <p className="text-muted-foreground text-sm mt-5">
                Where should the next Cake Studio rise? Tell us your neighborhood.
              </p>
            </div>
            <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Suggest our next neighborhood…"
                className="w-full bg-transparent border border-border rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary"
              />
              <button className="pill pill-outline mt-4 w-full justify-center">Send</button>
            </form>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

const JOURNAL = [
  { img: journal1, title: "The Signature Celebration Box", body: "Meet our newest box: a hand-sculpted Unicorn Cake, twelve buttercream macarons, and edible gold leaf in one show-stopping package." },
  { img: journal2, title: "Themed Builds, Dialed In", body: "From superhero sagas to fairy-tale princesses — we bring your child's vision to life in sugar, fondant, and edible figurines." },
  { img: journal3, title: "Now Retail", body: "Take home our signature vanilla bean buttercream and red velvet cookie mixes. Studio quality, your kitchen." },
];

function Journal() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % JOURNAL.length), 6000);
    return () => clearInterval(t);
  }, []);
  const go = (d: number) => setI((v) => (v + d + JOURNAL.length) % JOURNAL.length);

  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono-display text-xs text-primary mb-3">JOURNAL</p>
            <h2 className="font-display text-5xl md:text-6xl">The Cake Studio Journal</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => go(-1)} aria-label="Previous" className="w-12 h-12 rounded-full border border-border hover:border-primary hover:text-primary transition">‹</button>
            <button onClick={() => go(1)} aria-label="Next" className="w-12 h-12 rounded-full border border-border hover:border-primary hover:text-primary transition">›</button>
          </div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {JOURNAL.map((j, idx) => (
          <article key={j.title} className="card-elev overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={j.img} alt={j.title} loading="lazy" width={1024} height={1344}
                   className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex gap-4">
              <span className="pink-tick self-stretch min-h-12" />
              <div>
                <h3 className="font-display text-2xl">{j.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{j.body}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="aspect-[3/4] overflow-hidden rounded-xl border border-border">
            <img src={founder} alt="Duana, founder of Cake Studio NYC, piping buttercream rosettes" loading="lazy" width={1024} height={1344}
                 className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal>
          <p className="font-mono-display text-xs text-primary mb-3">OUR STORY</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
            For the Love<br />of Cake.
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              We aren't a faceless bakery chain — we're one woman, one whisk, and a lifelong
              passion turned into Astoria's most-loved cake studio. By combining classical
              French pastry training with a relentless focus on custom design and personal
              service, we've built a place that treats every cake like it's for our own family —
              from a last-minute first-birthday smash cake to a 200-guest wedding centerpiece.
            </p>
            <p>
              Every cake reflects quality and flavor, making every celebration a little more
              unforgettable. Moist, mousse-filled chocolate cakes. Pillowy red velvet.
              Hand-piped buttercream textures. Edible gold leaf. Sugar art too beautiful to
              cut — until you taste it.
            </p>
            <p className="text-foreground font-display text-2xl pt-2">— Duana, Founder & Head Cake Artist</p>
          </div>
          <Link to="/our-story" className="pill pill-outline mt-8">Read the full story</Link>
        </Reveal>
      </div>
    </section>
  );
}

function OurSecret() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <p className="font-mono-display text-xs text-primary mb-3">OUR SECRET</p>
        <h2 className="font-display text-5xl md:text-6xl mb-12">No shortcuts. Ever.</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { img: secretButtercream, tag: "FLAVOR", title: "House-Made Buttercreams",
            body: "Twelve signature flavors. Zero shortcuts. Real Madagascan vanilla, Valrhona chocolate, fresh-squeezed citrus, brown-butter caramel — whipped in-house every morning.", to: "/buttercreams" },
          { img: secretStandard, tag: "CRAFT", title: "The Cake Studio Standard",
            body: "Level tiers. Razor-sharp edges. Crumb-perfect interiors. We obsess over the millimeter so your celebration is flawless.", to: "/standard" },
        ].map((c) => (
          <Reveal key={c.title}>
            <Link to={c.to} className="card-elev overflow-hidden group block">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" width={1280} height={1024}
                     className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              </div>
              <div className="p-8">
                <p className="font-mono-display text-xs text-primary">{c.tag}</p>
                <h3 className="font-display text-3xl mt-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{c.body}</p>
                <span className="font-mono-display text-xs mt-6 inline-block text-foreground/80 group-hover:text-primary">LEARN MORE →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const MENU = [
  { img: menuTiered, name: "Custom Tiered Cakes", price: "from $180" },
  { img: menuUnicorn, name: "Unicorn Sculpted Cake", price: "Popular ★" },
  { img: menuValentine, name: "Valentine's Day Cookies", price: "Popular ★" },
  { img: menuMousse, name: "Chocolate Mousse Cake", price: "from $95" },
  { img: menuBaby, name: "Baby Shower Cookies", price: "from $48 / dozen" },
  { img: menuPops, name: "Custom Cake Pops", price: "from $36 / dozen" },
];

function MenuStrip() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <p className="font-mono-display text-xs text-primary mb-3">THE MENU</p>
          <h2 className="font-display text-5xl md:text-6xl">A Taste of What We Make</h2>
        </div>
      </div>
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {MENU.map((m) => (
            <Reveal key={m.name}>
              <article className="card-elev overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" width={1024} height={1024}
                       className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium leading-snug">{m.name}</h3>
                  <p className="text-primary text-sm mt-1 font-mono-display text-right">{m.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/menu" className="pill pill-primary">See Full Menu →</Link>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { quote: "Had our wedding cake done by Cake Studio NYC and cannot overstate how great the entire experience was. Easy to work with, incredibly responsive, and the cake was beautiful — and tasted even better.", name: "Marc S.", tag: "Wedding Cake" },
  { quote: "Huge thank you for the amazing cookies you made for the baby shower. Everyone was raving about them — absolutely adorable with all the baby-themed shapes and perfect blue details.", name: "Alisha S.", tag: "Baby Shower Cookies" },
  { quote: "Truly exceptional. The pastry chef does not compromise on anything. Style, flavor, and a great price. If you want quality and amazing flavor, Cake Studio NYC is the place to go!", name: "Danisabel D.", tag: "Birthday Cake" },
];

function Reviews() {
  return (
    <section className="container-x py-24 md:py-32 text-center">
      <Reveal>
        <p className="font-mono-display text-xs text-primary mb-3">SWEET WORDS</p>
        <div className="text-primary text-2xl tracking-widest">★★★★★ <span className="text-foreground text-lg align-middle">4.8</span></div>
        <p className="text-muted-foreground mt-3">Rated 4.8 out of 5 by 44 happy customers on Google</p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">
        {REVIEWS.map((r) => (
          <Reveal key={r.name}>
            <article className="card-elev p-7 relative h-full">
              <span className="absolute top-4 right-5 font-display text-6xl text-primary leading-none">"</span>
              <p className="text-sm text-foreground/90 leading-relaxed pt-2">{r.quote}</p>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                <div>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.tag}</p>
                </div>
                <span className="w-7 h-7 rounded-full bg-card-hover border border-border grid place-items-center text-xs font-bold">G</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <a href="https://maps.app.goo.gl/TtJqc4qUevKbhJHTA" target="_blank" rel="noreferrer" className="pill pill-outline mt-12 inline-flex">
        Read all 44 reviews on Google →
      </a>
    </section>
  );
}

function RewardsBanner() {
  return (
    <section className="relative overflow-hidden my-16">
      <div className="absolute inset-0">
        <img src={rewards} alt="" loading="lazy" width={1920} height={800} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      </div>
      <div className="container-x relative py-24 md:py-32">
        <div className="max-w-xl">
          <p className="font-mono-display text-xs text-primary mb-3">REWARDS</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">Join the Inner Circle</h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Earn a slice of the rewards — sweet perks, birthday surprises, and first dibs on
            seasonal collections.
          </p>
          <Link to="/rewards" className="pill pill-primary mt-8">Sign Up Free</Link>
        </div>
      </div>
    </section>
  );
}

function FindUs() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <p className="font-mono-display text-xs text-primary mb-3">FIND US</p>
        <h2 className="font-display text-5xl md:text-6xl mb-12">The Astoria Studio</h2>
      </Reveal>
      <div className="grid lg:grid-cols-2 gap-8">
        <Reveal>
          <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card">
            <iframe
              title="Map to Cake Studio NYC"
              src="https://www.google.com/maps?q=47th+St,+Astoria,+NY+11103&output=embed"
              className="w-full h-full grayscale-[40%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="card-elev p-8 md:p-10 h-full">
            <p className="font-mono-display text-xs text-primary">THE ASTORIA STUDIO</p>
            <p className="text-2xl font-display mt-2">47th St, Astoria, NY 11103</p>

            <div className="grid sm:grid-cols-2 gap-8 mt-8 text-sm">
              <div>
                <p className="font-mono-display text-xs text-muted-foreground mb-2">HOURS</p>
                <p>Mon–Sat: 9:00 AM – 7:30 PM</p>
                <p>Sun: By appointment</p>
              </div>
              <div>
                <p className="font-mono-display text-xs text-muted-foreground mb-2">CALL THE STUDIO</p>
                <a href="tel:+17184405058" className="hover:text-primary">+1 (718) 440-5058</a>
              </div>
              <div>
                <p className="font-mono-display text-xs text-muted-foreground mb-2">FOLLOW</p>
                <a href="https://instagram.com" className="hover:text-primary">@cakestudionyc</a>
              </div>
              <div>
                <p className="font-mono-display text-xs text-muted-foreground mb-2">SERVICES</p>
                <ul className="space-y-1">
                  <li>✓ Kerbside pickup</li>
                  <li>✓ Local NYC delivery</li>
                  <li>✓ Custom consultation</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <a href="https://maps.app.goo.gl/TtJqc4qUevKbhJHTA" target="_blank" rel="noreferrer" className="pill pill-primary">Get Directions</a>
              <a href="tel:+17184405058" className="pill pill-outline">Call Now</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
