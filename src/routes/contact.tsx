import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Find Us — Cake Studio NYC" },
      { name: "description", content: "47th St, Astoria NY 11103. Call +1 (718) 440-5058. Pickup, NYC delivery, and custom consultations." },
      { property: "og:title", content: "Contact Cake Studio NYC" },
      { property: "og:description", content: "Visit our Astoria studio or book a custom consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="container-x py-16 md:py-24">
        <p className="font-mono-display text-xs text-primary mb-3">FIND US</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">The Astoria Studio.</h1>
      </section>

      <section className="container-x grid lg:grid-cols-2 gap-8 pb-24">
        <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card">
          <iframe
            title="Map to Cake Studio NYC"
            src="https://www.google.com/maps?q=47th+St,+Astoria,+NY+11103&output=embed"
            className="w-full h-full grayscale-[40%]"
            loading="lazy"
          />
        </div>
        <div className="card-elev p-8 md:p-10">
          <p className="text-2xl font-display">47th St, Astoria, NY 11103</p>
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
              <ul className="space-y-1"><li>✓ Kerbside pickup</li><li>✓ Local NYC delivery</li><li>✓ Custom consultation</li></ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            <a href="https://maps.app.goo.gl/TtJqc4qUevKbhJHTA" target="_blank" rel="noreferrer" className="pill pill-primary">Get Directions</a>
            <a href="tel:+17184405058" className="pill pill-outline">Call Now</a>
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="card-elev p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl">Custom cake inquiry</h2>
          <p className="text-muted-foreground mt-2">Tell us about your celebration and Duana will be in touch within 24 hours.</p>
          <form className="grid sm:grid-cols-2 gap-4 mt-8" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
            <input required placeholder="Your name" className="bg-background border border-border rounded-full px-5 py-3 focus:outline-none focus:border-primary" />
            <input required type="email" placeholder="Email" className="bg-background border border-border rounded-full px-5 py-3 focus:outline-none focus:border-primary" />
            <input placeholder="Phone" className="bg-background border border-border rounded-full px-5 py-3 focus:outline-none focus:border-primary" />
            <input required type="date" className="bg-background border border-border rounded-full px-5 py-3 focus:outline-none focus:border-primary" />
            <textarea required rows={5} placeholder="Tell us about the cake you're dreaming of…"
                      className="sm:col-span-2 bg-background border border-border rounded-2xl px-5 py-3 focus:outline-none focus:border-primary" />
            <button className="sm:col-span-2 pill pill-primary justify-center">Send Inquiry</button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
