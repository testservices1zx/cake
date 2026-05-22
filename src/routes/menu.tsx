import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteShell";
import menuTiered from "@/assets/menu-tiered.jpg";
import menuUnicorn from "@/assets/menu-unicorn.jpg";
import menuValentine from "@/assets/menu-valentine.jpg";
import menuMousse from "@/assets/menu-mousse.jpg";
import menuBaby from "@/assets/menu-babyshower.jpg";
import menuPops from "@/assets/menu-cakepops.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cake Studio NYC" },
      { name: "description", content: "Custom celebration cakes, wedding cakes, hand-decorated cookies, cupcakes, and cake pops. Starting at $36." },
      { property: "og:title", content: "Menu — Cake Studio NYC" },
      { property: "og:description", content: "Browse our custom cake, cookie, and dessert menu." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string; img: string; cat: string };
const CATS = ["All", "Custom Cakes", "Wedding", "Cookies", "Cupcakes", "Cake Pops"] as const;

const ITEMS: Item[] = [
  { name: "Custom Tiered Celebration Cake", desc: "2–4 tiers, buttercream or fondant finish, fresh florals or hand-piped detail.", price: "from $180", img: menuTiered, cat: "Custom Cakes" },
  { name: "Chocolate Mousse-Filled Cake", desc: "Three layers of dark chocolate sponge, silky mousse, mirror ganache.", price: "from $95", img: menuMousse, cat: "Custom Cakes" },
  { name: "Unicorn Sculpted Cake", desc: "Hand-sculpted with pastel buttercream mane and edible 24k gold horn.", price: "from $145", img: menuUnicorn, cat: "Custom Cakes" },
  { name: "Multi-Tier Wedding Cake", desc: "Consultation, tasting box, and bespoke design for your day.", price: "from $480", img: menuTiered, cat: "Wedding" },
  { name: "Valentine's Day Cookies", desc: "Hand-iced hearts in pastel pink and white royal icing.", price: "$48 / dozen", img: menuValentine, cat: "Cookies" },
  { name: "Baby Shower Cookies", desc: "Onesies, booties, stars — soft pastels, your custom palette.", price: "$48 / dozen", img: menuBaby, cat: "Cookies" },
  { name: "Custom Cake Pops", desc: "White chocolate dipped, pink and gold sprinkle finish.", price: "$36 / dozen", img: menuPops, cat: "Cake Pops" },
  { name: "Themed Birthday Cake", desc: "Marvel, Disney, Bluey — your child's vision in sugar and fondant.", price: "from $120", img: menuUnicorn, cat: "Custom Cakes" },
];

function MenuPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const items = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <SiteLayout>
      <section className="container-x py-16 md:py-24">
        <p className="font-mono-display text-xs text-primary mb-3">THE MENU</p>
        <h1 className="font-display text-6xl md:text-7xl">Everything sweet.</h1>
        <p className="text-muted-foreground mt-6 max-w-xl">
          Every item is made to order by Duana in our Astoria studio. Pricing is a starting point —
          custom designs are quoted after consultation.
        </p>

        <div className="flex flex-wrap gap-2 mt-12 border-b border-border pb-4 sticky top-20 bg-background/90 backdrop-blur z-30">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`pill ${cat === c ? "pill-primary" : "pill-outline"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {items.map((m) => (
            <article key={m.name} className="card-elev overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" width={1024} height={1024}
                     className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="font-mono-display text-[10px] text-primary">{m.cat.toUpperCase()}</p>
                <h2 className="font-display text-2xl mt-1">{m.name}</h2>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
                <div className="flex items-center justify-between mt-5">
                  <span className="text-primary font-mono-display text-sm text-right">{m.price}</span>
                  <Link to="/contact" className="pill pill-outline !py-2 !px-4 !text-[11px]">Inquire</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
