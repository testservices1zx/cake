import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteShell";
import rewards from "@/assets/rewards-banner.jpg";

export const Route = createFileRoute("/rewards")({
  head: () => ({
    meta: [
      { title: "Rewards — Cake Studio Inner Circle" },
      { name: "description", content: "Join the Cake Studio Inner Circle for sweet perks, birthday surprises, and first dibs on seasonal collections." },
      { property: "og:title", content: "Cake Studio Inner Circle" },
      { property: "og:description", content: "Earn a slice of the rewards." },
    ],
  }),
  component: RewardsPage,
});

const TIERS = [
  { t: "Sprinkle", perks: ["Birthday cookie box", "Early access to seasonal drops", "5% back as Studio credit"] },
  { t: "Buttercream", perks: ["Everything in Sprinkle", "Free macarons on every order", "10% back as Studio credit", "Tasting box at half price"] },
  { t: "Gold Leaf", perks: ["Everything in Buttercream", "Complimentary delivery in NYC", "15% back as Studio credit", "Private consultation with Duana"] },
];

function RewardsPage() {
  return (
    <SiteLayout>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={rewards} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>
        <div className="container-x relative py-28 md:py-40">
          <p className="font-mono-display text-xs text-primary mb-3">REWARDS</p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">Join the Inner Circle.</h1>
          <form className="mt-10 flex gap-2 max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="you@email.com"
                   className="flex-1 bg-background/70 backdrop-blur border border-border rounded-full px-5 py-3 focus:outline-none focus:border-primary" />
            <button className="pill pill-primary">Sign Up Free</button>
          </form>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((t, i) => (
            <article key={t.t} className={`card-elev p-8 ${i === 1 ? "border-primary" : ""}`}>
              <p className="font-mono-display text-xs text-primary">TIER {i + 1}</p>
              <h2 className="font-display text-4xl mt-1">{t.t}</h2>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-3"><span className="text-primary">✓</span><span>{p}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
