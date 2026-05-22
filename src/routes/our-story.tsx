import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteShell";
import founder from "@/assets/founder.jpg";
import kitchen from "@/assets/kitchen.jpg";
import storefront from "@/assets/storefront.jpg";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Cake Studio NYC" },
      { name: "description", content: "Meet Duana — classically trained pastry chef, founder of Cake Studio NYC, and Astoria's go-to for celebration cakes since 2017." },
      { property: "og:title", content: "Our Story — Cake Studio NYC" },
      { property: "og:description", content: "One woman, one whisk, one Astoria studio." },
      { property: "og:image", content: founder },
    ],
  }),
  component: StoryPage,
});

const MILESTONES = [
  { year: "2017", title: "Cake Studio is born", body: "Duana opens the doors in Astoria after a decade of classical French pastry training." },
  { year: "2020", title: "Wedding cake specialist", body: "Featured by NYC wedding planners; bookings extend a full year out." },
  { year: "2023", title: "Retail launch", body: "Signature buttercream and red velvet mixes hit local shelves." },
  { year: "2025", title: "4.8★ milestone", body: "44 five-star Google reviews and growing — every cake reviewed by Duana herself." },
];

function StoryPage() {
  return (
    <SiteLayout>
      <section className="container-x py-16 md:py-24">
        <p className="font-mono-display text-xs text-primary mb-3">OUR STORY</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">One woman.<br /><span className="text-primary">One whisk.</span></h1>
      </section>

      <section className="container-x grid md:grid-cols-2 gap-12 items-center py-16">
        <div className="aspect-[3/4] overflow-hidden rounded-xl border border-border">
          <img src={founder} alt="Duana piping rosettes" loading="lazy" width={1024} height={1344} className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-4xl md:text-5xl">A studio, not a chain.</h2>
          <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
            <p>Duana grew up watching her grandmother pipe roses freehand at the kitchen counter. By 22, she was training under a Michelin-starred pastry chef in Paris. By 30, she was back in Astoria with a vision: a neighborhood cake studio where every cake is treated like it's for family.</p>
            <p>Today, that vision is Cake Studio NYC — known for hand-piped buttercream, edible gold leaf, and sugar art that looks too beautiful to cut.</p>
          </div>
        </div>
      </section>

      <section className="container-x grid md:grid-cols-2 gap-12 items-center py-16">
        <div className="md:order-2 aspect-[4/3] overflow-hidden rounded-xl border border-border">
          <img src={kitchen} alt="Cake Studio kitchen" loading="lazy" width={1280} height={960} className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-4xl md:text-5xl">Inside the kitchen.</h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Marble counters. Fresh peonies in a jar. Twelve buttercreams whipped at sunrise.
            Every order moves from sketch to finished cake under Duana's eye — no outsourcing,
            no shortcuts.
          </p>
        </div>
      </section>

      <section className="container-x py-24">
        <h2 className="font-display text-5xl md:text-6xl mb-12">Milestones</h2>
        <div className="space-y-4">
          {MILESTONES.map((m) => (
            <div key={m.year} className="card-elev p-8 grid md:grid-cols-[120px_1fr_2fr] gap-6 items-start">
              <span className="font-display text-4xl text-primary">{m.year}</span>
              <h3 className="font-display text-2xl">{m.title}</h3>
              <p className="text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16 text-center">
        <img src={storefront} alt="" loading="lazy" width={1280} height={1280} className="w-full max-w-3xl mx-auto rounded-xl border border-border" />
        <p className="mt-8 font-display text-3xl">Come visit. Bring an appetite.</p>
        <Link to="/contact" className="pill pill-primary mt-6 inline-flex">Find the Studio</Link>
      </section>
    </SiteLayout>
  );
}
