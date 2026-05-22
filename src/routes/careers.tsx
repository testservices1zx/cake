import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteShell";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Cake Studio NYC" },
      { name: "description", content: "Apprentice with Duana. Open roles at Cake Studio NYC." },
      { property: "og:title", content: "Careers — Cake Studio NYC" },
      { property: "og:description", content: "Join a women-owned artisan studio in Astoria." },
    ],
  }),
  component: CareersPage,
});

const ROLES = [
  { t: "Cake Decorator (Full-time)", d: "2+ years experience, comfortable with buttercream and fondant, eye for detail." },
  { t: "Pastry Apprentice", d: "Learn directly from Duana. Open to motivated beginners with a culinary foundation." },
  { t: "Weekend Counter & Pickup Lead", d: "Friendly, organized, the face of the studio on busy Saturdays." },
];

function CareersPage() {
  return (
    <SiteLayout>
      <section className="container-x py-16 md:py-24">
        <p className="font-mono-display text-xs text-primary mb-3">CAREERS</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">Build with us.</h1>
        <p className="text-muted-foreground mt-6 max-w-xl">
          We hire for craft and care. Roles open year-round — send your story even when we're not advertising.
        </p>
      </section>

      <section className="container-x grid md:grid-cols-2 gap-12 py-16">
        <div className="space-y-4">
          {ROLES.map((r) => (
            <article key={r.t} className="card-elev p-7">
              <h2 className="font-display text-2xl">{r.t}</h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.d}</p>
            </article>
          ))}
        </div>
        <form className="card-elev p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
          <h2 className="font-display text-3xl">Apprentice with Duana</h2>
          <input required placeholder="Your name" className="w-full bg-background border border-border rounded-full px-5 py-3 focus:outline-none focus:border-primary" />
          <input required type="email" placeholder="Email" className="w-full bg-background border border-border rounded-full px-5 py-3 focus:outline-none focus:border-primary" />
          <input placeholder="Role you're applying for" className="w-full bg-background border border-border rounded-full px-5 py-3 focus:outline-none focus:border-primary" />
          <textarea required placeholder="Tell us your story…" rows={5} className="w-full bg-background border border-border rounded-2xl px-5 py-3 focus:outline-none focus:border-primary" />
          <button className="pill pill-primary w-full justify-center">Send Application</button>
        </form>
      </section>
    </SiteLayout>
  );
}
