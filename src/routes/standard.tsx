import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteShell";
import standard from "@/assets/secret-standard.jpg";

export const Route = createFileRoute("/standard")({
  head: () => ({
    meta: [
      { title: "The Cake Studio Standard" },
      { name: "description", content: "Our quality manifesto: sourcing, technique, and women-owned values." },
      { property: "og:title", content: "The Cake Studio Standard" },
      { property: "og:description", content: "Level tiers. Razor-sharp edges. Crumb-perfect interiors." },
    ],
  }),
  component: StandardPage,
});

const PRINCIPLES = [
  { n: "01", t: "Sourced with care", d: "European butter, organic eggs, Madagascan vanilla, Valrhona chocolate. Florals from a Queens grower we trust." },
  { n: "02", t: "Built by hand", d: "Every tier leveled with a turntable and a steady wrist. Every flower piped fresh, never mass-cast." },
  { n: "03", t: "Reviewed by Duana", d: "No cake leaves the studio without the founder's final eye. Crumb-perfect interiors, razor edges, sharp tier alignment." },
  { n: "04", t: "Women-owned, neighborhood-rooted", d: "Independent, women-led, and built in Astoria. We hire local, train our own, and reinvest where we live." },
];

function StandardPage() {
  return (
    <SiteLayout>
      <section className="container-x py-16 md:py-24">
        <p className="font-mono-display text-xs text-primary mb-3">CRAFT</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">The Standard.</h1>
        <p className="text-muted-foreground mt-6 max-w-xl">
          Four principles. They sit behind every cake that leaves the studio.
        </p>
      </section>

      <section className="container-x grid md:grid-cols-2 gap-12 items-center py-16">
        <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
          <img src={standard} alt="Bench scraper smoothing crumb coat" loading="lazy" width={1280} height={1024} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-5">
          {PRINCIPLES.map((p) => (
            <div key={p.n} className="card-elev p-7">
              <span className="font-mono-display text-xs text-primary">{p.n}</span>
              <h2 className="font-display text-2xl mt-1">{p.t}</h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 text-center">
        <Link to="/menu" className="pill pill-primary">See the Menu</Link>
      </section>
    </SiteLayout>
  );
}
