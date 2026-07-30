/* ============================================================   FILE 1 — src/data/products.ts   ============================================================ */export type Category = "perfumes" | "watches";export interface Product {  id: string;  name: string;  tagline: string;  price: number; // PKR  category: Category;  image: string;}const u = (id: string) =>  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=1000&q=80`;export const products: Product[] = [  // ---------- PERFUMES ----------  { id: "p1", name: "Noir Absolu", tagline: "Oud, leather, black amber", price: 42500, category: "perfumes", image: u("photo-1594035910387-fea47794261f") },  { id: "p2", name: "Rose Éternelle", tagline: "Taif rose, saffron, musk", price: 38900, category: "perfumes", image: u("photo-1595425959632-34f2822322ce") },  { id: "p3", name: "Santal Royale", tagline: "Sandalwood, cardamom, vetiver", price: 46700, category: "perfumes", image: u("photo-1587017539504-67cfbddac569") },  { id: "p4", name: "Ambre Nuit", tagline: "Amber resin, vanilla bourbon", price: 512200, category: "perfumes", image: u("photo-1541643600914-78b084683601") },
  { id: "p5", name: "Velvet Oud", tagline: "Cambodian oud, patchouli", price: 68900, category: "perfumes", image: u("photo-1592945403244-b3fbafd7f539") },
  { id: "p6", name: "Fleur de Sel", tagline: "Sea salt, neroli, iris", price: 33400, category: "perfumes", image: u("photo-1615634260167-c8cdede054de") },
  { id: "p7", name: "Cuir Impérial", tagline: "Suede, birch tar, tonka", price: 57300, category: "perfumes", image: u("photo-1585386959984-a4155224a1ad") },
  { id: "p8", name: "Jasmin Sauvage", tagline: "Night jasmine, tuberose", price: 36800,category: "perfumes", image: u("photo-1523293182086-7651a899d37f") },
  { id: "p9", name: "Bois Fumé", tagline: "Smoked cedar, incense, myrrh", price: 49500, category: "perfumes", image: u("photo-1557170334-a9632e77c6e4") },
  { id: "p10", name: "Musk Blanc", tagline: "White musk, cashmere wood", price: 29900, category: "perfumes", image: u("photo-1610461888750-10bfc601b874") },
  { id: "p11", name: "Safran Doré", tagline: "Saffron, honey, labdanum", price: 61500, category: "perfumes", image: u("photo-1563170351-be82bc888aa4") },
  { id: "p12", name: "Vanille Obscure", tagline: "Madagascar vanilla, cacao", price:44200, category: "perfumes", image: u("photo-1571875257727-256c39da42af") },
  { id: "p13", name: "Iris Nocturne", tagline: "Orris root, violet, ambrette", price: 53800, category: "perfumes", image: u("photo-1547887538-e3a2f32cb1cc") },
// ---------- WATCHES ----------
  { id: "w1", name: "Chrono Sovereign", tagline: "Automatic chronograph, steel", price: 289000, category: "watches", image: u("photo-1524592094714-0f0654e20314") },
  { id: "w2", name: "Meridian Gold", tagline: "18k gold case, sapphire glass", price: 685000, category: "watches", image: u("photo-1523170335258-f5ed11844a49") },
  { id: "w3", name: "Obsidian Diver", tagline: "300m water resistance", price: 342000, category: "watches", image: u("photo-1547996160-81dfa63595aa") },
  { id: "w4", name: "Regent Skeleton", tagline: "Open-heart movement", price: 512000, category: "watches", image:u("photo-1587836374828-4dbafa94cf0e") },
  { id: "w5", name: "Aviator Noir", tagline: "Pilot dial, calfskin strap", price: 236000, category: "watches", image: u("photo-1533139502658-0198f920d8e8") },
  { id: "w6", name: "Lumière Classique", tagline: "Ultra-thin dress watch", price: 398000, category: "watches", image: u("photo-1526045431048-f857369baa09") },
  { id: "w7", name: "Titan GMT", tagline: "Dual timezone, titanium", price: 447000, category: "watches", image: u("photo-1508057198894-247b23fe5ade") },
  { id: "w8", name: "Perpetual Onyx", tagline: "Perpetual calendar, black PVD", price: 759000, category: "watches", image: u("photo-1522312346375-d1a52e2b99b3") },{ id: "w10", name: "Steel Monarch", tagline: "Integrated bracelet, 41mm", price: 375000, category: "watches", image: u("photo-1434056886845-dac89ffe9b56") },
  { id: "w11", name: "Rosegold Aria", tagline: "Rose gold, mother of pearl", price: 528000, category: "watches", image: u("photo-1594534475808-b18fc33b045e") },
  { id: "w12", name: "Nocturne Tourbillon", tagline: "Flying tourbillon, hand-wound", price: 1450000, category: "watches", image: u("photo-1509048191080-d2984bad6ae5") },
  { id: "w13", name: "Explorer Bronze", tagline: "Bronze case, patina dial", price: 264000, category: "watches", image:u("photo-1495856458515-0637185db551") },
];

export const formatPKR = (n: number) => `PKR ${n.toLocaleString("en-PK")}`;/* ---------------- CURRENCY ---------------- */

export interface Currency {
  code: string;
  symbol: string;
  /** how many PKR 1 unit of this currency is worth */
  perPkr: number;
  decimals: number;
}

export const currencies: Currency[] = [
  { code: "PKR", symbol: "Rs", perPkr: 1, decimals: 0 },
  { code: "USD", symbol: "$", perPkr: 1 / 280, decimals: 2 },{ code: "AED", symbol: "AED", perPkr: 1 / 76, decimals: 2 },
  { code: "SAR", symbol: "SAR", perPkr: 1 / 74.6, decimals: 2 },
  { code: "GBP", symbol: "£", perPkr: 1 / 355, decimals: 2 },
  { code: "EUR", symbol: "€", perPkr: 1 / 305, decimals: 2 },
];

export const formatMoney = (pkr: number, c: Currency) => {
  const value = pkr * c.perPkr;
  return `${c.symbol} ${value.toLocaleString("en-US", {
    minimumFractionDigits: c.decimals,maximumFractionDigits: c.decimals,
  })}`;
};
/* ---------------- REVIEWS ---------------- */

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  { id: "r1", name: "Ayesha Khan", city: "Karachi", rating: 5, text: "Noir Absolu ki longevity kamaal hai — 10+ hours. Packaging bhi bohat premium thi." },
  { id: "r2", name: "Bilal Ahmed", city: "Lahore", rating: 5, text: "Ordered the Chrono Sovereign. Authentic piece, delivered in 2 days, WhatsApp support was instant." },{ id: "r3", name: "Hina Sheikh", city: "Islamabad", rating: 4, text: "Rose Éternelle is beautiful and soft. Wish the bottle was slightly bigger, otherwise perfect." },
  { id: "r4", name: "Usman Tariq", city: "Rawalpindi", rating: 5, text: "Cash on delivery ka option best tha. Watch exactly as shown in pictures." },
  { id: "r5", name: "Sana Malik", city: "Faisalabad", rating: 5, text: "Velvet Oud har mehfil mein compliments dilwata hai. Definitely reordering." },{ id: "r6", name: "Daniyal Raza", city: "Multan", rating: 5, text: "Prices in my own currency made it so easy to compare. Very smooth experience overall." },
];


/* ============================================================
   FILE 2 — src/routes/index.tsx
   ============================================================ */
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  products,
  reviews,
  currencies,
  formatMoney,
  type Category,
  type Product,
  type Currency,
} from "@/data/products";

const WHATSAPP_NUMBER = "923169972901";
const PHONE_DISPLAY = "+92 316 9972901";
const EMAIL = "kabeerakbar1000@gmail.com";
const BRAND = "K .";
const BRAND_SUB = "Fragrances & Watches";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "K . Fragrances & Watches — Luxury Perfumes & Timepieces" },
      {
        name: "description",
        content:
          "K . Fragrances & Watches — 26 luxury perfumes and timepieces. Choose your currency, add to cart and order instantly on WhatsApp.",
      },
      { property: "og:title", content: "K . Fragrances & Watches — Luxury Perfumes & Timepieces" },
      {
        property: "og:description",
        content:
          "26 luxury perfumes and timepieces. Choose your currency, add to cart and order instantly on WhatsApp.",
      },
    ],
  }),
  component: Index,
});
interface CartLine {
  product: Product;
  qty: number;
}

function Stars({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating} out of 5 stars`} className="text-gold">
      {"★★★★★".slice(0, rating)}
      <span className="text-muted-foreground">{"★★★★★".slice(rating)}</span>
    </span>
  );
}

function Index() {
  const [category, setCategory] = useState<Category>("perfumes");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>(currencies[0]);

  const price = (pkr: number) => formatMoney(pkr, currency);

  const inCategory = useMemo(
    () => products.filter((p) => p.category === category),
    [category],
  );

  // Empty / whitespace-onlyquery always shows the full category.
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return inCategory;
    return inCategory.filter(
      (p) =>
        p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q),
    );
  }, [inCategory, query]);

  const count = cart.reduce((s, l) => s + l.qty, 0);
  const total = cart.reduce((s, l) => s + l.qty * l.product.price, 0);

  const add = (product: Product) => {
    setCart((prev) => {
      const found = prev.find((l) => l.product.id === product.id);
      if (found) {
        return prev.map((l) =>
          l.product.id === product.id ? { ...l, qty: l.qty + 1 } : l,
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const changeQty = (id: string, delta: number) =>
    setCart((prev) =>
      prev
        .map((l) => (l.product.id === id ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0),
    );

  const whatsappHref = useMemo(() => {
    const lines = cart.length
      ? cart
          .map((l) => `• ${l.product.name} × ${l.qty} — ${price(l.product.price * l.qty)}`)
          .join("\n")
      : "I'd like to know more about your collection.";
    const msg =
      `Hello ${BRAND} ${BRAND_SUB},\n\nI would like to place an order:\n\n${lines}` +
      (cart.length ? `\n\nTotal: ${price(total)} (${currency.code})` : "");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, total, currency]);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4">
          <div className="leading-none">
            <span className="font-display text-2xl tracking-[0.2em] text-foreground">
              {BRAND}
            </span>
            <span className="mt-1 block text-[9px] tracking-luxe text-gold-soft">
              {BRAND_SUB}
            </span>
          </div>

          <nav className="flex items-center gap-1 rounded-sm border border-border p-1">
            {(["perfumes", "watches"] as Category[]).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-2 text-[10px] tracking-luxe transition-colors sm:px-6 ${
                  category === c
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <select
              aria-label="Select currency"
              value={currency.code}
              onChange={(e) =>
                setCurrency(
                  currencies.find((c) => c.code === e.target.value) ?? currencies[0],
                )
              }
              className="border border-border bg-secondary/40 px-2 py-2 text-[10px] tracking-luxe text-foreground focus:border-gold focus:outline-none"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code} className="bg-card text-foreground">
                  {c.code}
                </option>
              ))}
            </select>

            <button
              onClick={() => setCartOpen(true)}
              className="relative px-2 py-2 text-[10px] tracking-luxe text-foreground hover:text-gold"
            >
              Cart
              {count > 0 && (
                <span className="absolute -right-1 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-medium text-primary-foreground">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-4">
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${category} by name…`}
              aria-label={`Search ${category} by name`}
              className="w-full border border-border bg-secondary/40 py-3 pl-4 pr-24 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
            {query.trim() !== "" && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-[10px] tracking-luxe text-gold hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate flex min-h-[62vh] items-center overflow-hidden">
        <img
          src={
            category === "perfumes"
              ? "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1920&q=80"
              : "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1920&q=80"
          }
          alt={
            category === "perfumes"
              ? "Luxury perfume bottle on dark satin"
              : "Luxury mechanical wristwatch close up"
          }
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="mx-auto w-full max-w-7xl px-5 py-24">
          <p className="text-[10px] tracking-luxe text-gold">
            {category === "perfumes" ? "The Fragrance Atelier" : "The Horology Vault"}
          </p>
          <h1 className="mt-6 max-w-2xl font-display text-5xl leading-[1.05] sm:text-7xl">
            {category === "perfumes" ? (
              <>
                Scents That Linger <em className="text-gold">Long After</em> You Leave
              </>
            ) : (
              <>
                Time, Kept in <em className="text-gold">Precious</em> Company
              </>
            )}
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            {category === "perfumes"
              ? "Hand-blended in small batches and aged before bottling. Built to last — in the room, and in memory."
              : "Hand-finished movements and cases sourced for collectors. Delivered across Pakistan with full authentication."}
          </p>
          <a
            href="#collection"
            className="mt-10 inline-block border border-gold bg-gold px-8 py-3.5 text-[10px] tracking-luxe text-primary-foreground transition-colors hover:bg-transparent hover:text-gold"
          >
            Explore the {category}
          </a>
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center">
          <p className="text-[10px] tracking-luxe text-gold-soft">
            {query.trim()
              ? `${visible.length} of ${inCategory.length} matching “${query.trim()}”`
              : `${visible.length} pieces available`}
          </p>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            The {category === "perfumes" ? "Fragrance" : "Timepiece"} Collection
          </h2>
          <div className="gold-rule mx-auto mt-6 h-px w-40" />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
          {visible.map((p) => (
            <article key={p.id} className="group">
              <div className="relative overflow-hidden bg-card">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.tagline}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  onClick={() => add(p)}
                  className="absolute inset-x-0 bottom-0 translate-y-full bg-gold py-3 text-[10px] tracking-luxe text-primary-foreground transition-transform duration-300 group-hover:translate-y-0"
                >
                  Add to cart
                </button>
              </div>
              <h3 className="mt-4 font-display text-xl">{p.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>
              <p className="mt-2 text-sm text-gold">{price(p.price)}</p>
              <button
                onClick={() => add(p)}
                className="mt-3 w-full border border-border py-2.5 text-[10px] tracking-luxe text-foreground transition-colors hover:border-gold hover:text-gold lg:hidden"
              >
                Add to cart
              </button>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="mt-14 border border-border/60 px-6 py-16 text-center">
            <p className="font-display text-2xl">
              Nothing in {category} matches “{query.trim()}”
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Try a shorter word, or browse the full collection.
            </p>
            <button
              onClick={() => setQuery("")}
              className="mt-8 border border-gold bg-gold px-8 py-3 text-[10px] tracking-luxe text-primary-foreground transition-colors hover:bg-transparent hover:text-gold"
            >
              Show all {category}
            </button>
          </div>
        )}
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="border-t border-border/60 bg-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-[10px] tracking-luxe text-gold-soft">Customer Reviews</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Words From Our Clients</h2>
            <div className="gold-rule mx-auto mt-6 h-px w-40" />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure
                key={r.id}
                className="flex h-full flex-col border border-border/60 bg-card p-6"
              >
                <Stars rating={r.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-4">
                  <span className="font-display text-lg text-foreground">{r.name}</span>
                  <span className="mt-1 block text-[10px] tracking-luxe text-gold-soft">
                    {r.city}
               </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 px-5 py-14 text-center">
        <p className="font-display text-2xl tracking-[0.2em]">{BRAND}</p>
        <p className="mt-1 text-[10px] tracking-luxe text-gold-soft">{BRAND_SUB}</p>

        <div className="mt-6 space-y-2 text-sm">
          <p>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-gold hover:text-foreground">{PHONE_DISPLAY}
            </a>
          </p>
          <p>
            <a href={`mailto:${EMAIL}`} className="text-gold hover:text-foreground">
              {EMAIL}
            </a>
          </p>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Karachi · Lahore · Islamabad — nationwide delivery, cash on delivery available.
        </p>
        <p className="mt-4 text-[10px] tracking-luxe text-muted-foreground">
          © {new Date().getFullYear()} {BRAND} {BRAND_SUB}
        </p>
      </footer>
      {/* WHATSAPP FLOAT */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-[10px] tracking-luxe text-primary-foreground shadow-lg"
      >
        Order Now
      </a>
{/* CART DRAWER */}

      {cartOpen && (

        <div className="fixed inset-0 z-50 flex justify-end">

          <div

            className="absolute inset-0 bg-background/70 backdrop-blur-sm"

            onClick={() => setCartOpen(false)}

          />

          <aside className="relative flex h-full w-full max-w-sm flex-col border-l border-border bg-card">

            <div className="flex items-center justify-between border-b border-border px-5 py-4">

              <h2 className="text-[10px] tracking-luxe text-gold">Your Selection</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="text-xs text-muted-foreground hover:text-gold"
              >
                Close
              </button>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
              {cart.length === 0 && (
                <p className="text-sm text-muted-foreground">Your cart is empty.</p>
              )}
              {cart.map((l) => (
                <div key={l.product.id} className="flex gap-4">
                  <img
                    src={l.product.image}
                    alt={l.product.name}
                    className="h-24 w-20 shrink-0 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-lg leading-tight">{l.product.name}</h3>
                    <p className="mt-1 text-xs text-gold">{price(l.product.price)}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() => changeQty(l.product.id, -1)}
                        className="h-7 w-
7 border border-border text-sm hover:border-gold hover:text-gold"
                      >
                        −
                      </button>
                      <span className="text-sm">{l.qty}</span>
                      <button
                        onClick={() => changeQty(l.product.id, 1)}
                        className="h-7 w-7 border border-border text-sm hover:border-gold hover:text-gold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border px-5 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="tracking-luxe text--[10px] text-muted-foreground">
                  Total ({currency.code})
                </span>
                <span className="font-display text-2xl text-gold">{price(total)}</span>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block bg-whatsapp py-3.5 text-center text-[10px] tracking-luxe text-primary-foreground"
              >
                Order Now on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}