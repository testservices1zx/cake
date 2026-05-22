import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteShell";
import buttercream from "@/assets/secret-buttercream.jpg";

export const Route = createFileRoute("/buttercreams")({
  head: () => ({
    meta: [
      { title: "House-Made Buttercreams — Cake Studio NYC" },
      { name: "description", content: "Twelve signature buttercream flavors whipped fresh every morning in our Astoria studio." },
      { property: "og:title", content: "House-Made Buttercreams" },
      { property: "og:description", content: "Twelve signature buttercreams. Zero shortcuts." },
    ],
  }),
  component: ButtercreamsPage,
});

const FLAVORS = [
  { n: "Madagascan Vanilla Bean", d: "Pure bourbon vanilla, real beans, silky Swiss meringue." },
  { n: "Valrhona Dark Chocolate", d: "70% single-origin, whipped into glossy ganache buttercream." },
  { n: "Brown-Butter Caramel", d: "Slow-browned butter, dark caramel, sea salt finish." },
  { n: "Fresh Lemon Curd", d: "Hand-zested Meyer lemons folded through silky cream." },
  { n: "Strawberry Rose", d: "Reduced strawberry purée with a whisper of rose water." },
  { n: "Espresso Mascarpone", d: "Double-shot espresso, mascarpone, cocoa nibs." },
  { n: "Salted Pistachio", d: "Stone-ground Sicilian pistachios, Maldon salt." },
  { n: "Cream Cheese Classic", d: "For carrot, red velvet, and everything in between." },
  { n: "Earl Grey", d: "Steeped bergamot tea, honey, vanilla." },
  { n: "Raspberry Champagne", d: "Reduced champagne, fresh raspberry coulis." },
  { n: "Burnt Honey", d: "Local wildflower honey, slow-caramelized." },
  { n: "Coconut Lime", d: "Toasted coconut cream, fresh lime zest." },
];

function ButtercreamsPage() {
  return (
    <SiteLayout>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={buttercream} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        </div>
        <div className="container-x relative py-32 md:py-48">
          <p className="font-mono-display text-xs text-primary mb-3">FLAVOR</p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] max-w-2xl">
            Twelve flavors.<br />Zero shortcuts.
          </h1>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FLAVORS.map((f, i) => (
            <article key={f.n} className="card-elev p-7">
              <span className="font-mono-display text-xs text-primary">No. {String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-display text-2xl mt-2">{f.n}</h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.d}</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/contact" className="pill pill-primary">Book a Tasting</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
