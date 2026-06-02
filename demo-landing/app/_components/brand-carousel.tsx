const BRANDS = [
  { name: "Daikin", href: "/logos/daikin.jpg", tagline: "Inverter Specialist" },
  {
    name: "Koppel",
    href: "/logos/koppel.png",
    tagline: "Heavy Industries",
  },
  { name: "Carrier", href: "/logos/carrier.jpg", tagline: "Since 1902" },
  { name: "Midea", href: "/logos/midea.png", tagline: "Dual Inverter" },
  { name: "Gree", href: "/logos/gree.png", tagline: "Wind-Free™" },
  { name: "Toshiba", href: "/logos/toshiba.jpg", tagline: "nanoe-X™" },
  {
    name: "General",
    href: "/logos/general-royal.jpg",
    tagline: "General Royal Air Conditioners",
  },
]

export function BrandCarousel() {
  const track = [...BRANDS, ...BRANDS]

  return (
    <div className="w-full">
      <p className="mb-5 text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Brands we carry
      </p>

      {/* Edge-fade mask + overflow clip */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee gap-4">
          {track.map((brand, i) => (
            <div
              key={i}
              className="flex w-40 shrink-0 flex-col items-center justify-center gap-1 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
            >
              <img
                src={brand.href}
                alt={brand.name}
                width={120}
                height={60}
                className="flex-1 object-contain"
              />
              <span className="text-[10px] text-muted-foreground">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
