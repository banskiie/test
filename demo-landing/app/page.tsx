import type { Metadata } from "next"
import { Nav } from "@/app/_components/nav"
import { ContactForm } from "@/app/_components/contact-form"
import { BrandCarousel } from "@/app/_components/brand-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Wind,
  Wrench,
  Droplets,
  CalendarCheck,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Metro Coolaire — Your air is our care.",
  description:
    "Metro Coolaire specialises in selling and maintaining air conditioning products in Cagayan de Oro. Professional installation, repair, and cleaning services.",
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const STATS = [
  { value: "500+",     label: "Happy clients",      color: "text-primary" },
  { value: "5+",       label: "Years in service",   color: "text-brand-green" },
  { value: "1,000+",   label: "Units serviced",     color: "text-primary" },
  { value: "Same day", label: "Service available",  color: "text-brand-green" },
] as const

const SERVICES = [
  {
    icon: Wind,
    title: "AC Sales",
    description:
      "Wide selection of window-type, split-type, and inverter air conditioners from trusted brands — sized right for your space and budget.",
    iconBg:     "bg-primary/15",
    iconColor:  "text-primary",
    topBorder:  "border-t-primary",
  },
  {
    icon: CalendarCheck,
    title: "Professional Installation",
    description:
      "Our trained technicians handle every installation cleanly and efficiently, with correct refrigerant charging and full system testing.",
    iconBg:     "bg-brand-green/15",
    iconColor:  "text-brand-green",
    topBorder:  "border-t-brand-green",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description:
      "Fast diagnostics and dependable repairs to restore your comfort. We service all major AC brands and models.",
    iconBg:     "bg-brand-green/15",
    iconColor:  "text-brand-green",
    topBorder:  "border-t-brand-green",
  },
  {
    icon: Droplets,
    title: "AC Cleaning",
    description:
      "Regular deep cleaning removes dust and mould buildup, improves air quality, lowers electricity bills, and extends unit lifespan.",
    iconBg:     "bg-primary/15",
    iconColor:  "text-primary",
    topBorder:  "border-t-primary",
  },
] as const

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Phone",
    value: "0969 078 1466",
    href: "tel:09690781466",
    leftBorder: "border-l-primary",
    iconBg:     "bg-primary/15",
    iconColor:  "text-primary",
  },
  {
    icon: Mail,
    label: "Email",
    value: "metrocoolaire.marketing2020@gmail.com",
    href: "mailto:metrocoolaire.marketing2020@gmail.com",
    leftBorder: "border-l-brand-green",
    iconBg:     "bg-brand-green/15",
    iconColor:  "text-brand-green",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "facebook.com/metrocoolaire",
    href: "https://www.facebook.com/metrocoolaire",
    leftBorder: "border-l-brand-green",
    iconBg:     "bg-brand-green/15",
    iconColor:  "text-brand-green",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Block 2 Lot 2 Westfield Subd., Iponan, Cagayan de Oro, 9000",
    href: "https://maps.google.com/?q=Iponan,Cagayan+de+Oro,Philippines",
    leftBorder: "border-l-primary",
    iconBg:     "bg-primary/15",
    iconColor:  "text-primary",
  },
] as const

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-6 py-28 text-center"
      >
        {/* Gradient orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full bg-brand-green/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-green">
            Your air is our care.
          </p>

          <h1 className="font-heading max-w-3xl text-5xl tracking-tight sm:text-6xl lg:text-7xl">
            Stay cool,{" "}
            <span className="italic text-brand-green">stay comfortable.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Metro Coolaire delivers professional air conditioning sales,
            installation, repair, and cleaning services across Cagayan de Oro —
            keeping homes and businesses comfortable all year round.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#contact">
                Request a service
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">Our services</a>
            </Button>
          </div>

          {/* Brand carousel */}
          <div className="mt-16 w-full max-w-3xl">
            <BrandCarousel />
          </div>

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-2 gap-x-14 gap-y-6 sm:grid-cols-4">
            {STATS.map(({ value, label, color }) => (
              <div key={label} className="text-center">
                <p className={`font-heading text-2xl ${color}`}>{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section
        id="services"
        className="relative overflow-hidden px-6 py-24"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.52 0.185 244 / 0.06) 0%, oklch(0.97 0 0) 40%, oklch(0.64 0.155 153 / 0.06) 100%)",
        }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              What we offer
            </span>
            <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
              Full air conditioning care,{" "}
              <span className="italic text-brand-green">start to finish.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              From picking the right unit to keeping it running like new — Metro
              Coolaire handles every stage so you never have to worry.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, description, iconBg, iconColor, topBorder }) => (
              <div
                key={title}
                className={`flex flex-col gap-4 rounded-xl border-t-4 bg-card p-6 shadow-sm transition-shadow hover:shadow-md ${topBorder}`}
              >
                <div className={`flex size-11 items-center justify-center rounded-lg ${iconBg}`}>
                  <Icon className={`size-5 ${iconColor}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand-green">
              Reach out
            </span>
            <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-muted-foreground">
              Need a quote, a repair, or just have a question? Send us a message
              and we&apos;ll get back to you promptly.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact details */}
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Contact information
              </p>

              {CONTACT_DETAILS.map(({ icon: Icon, label, value, href, leftBorder, iconBg, iconColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-start gap-4 rounded-xl border-l-4 bg-muted/40 p-4 transition-all hover:bg-muted hover:shadow-sm ${leftBorder}`}
                >
                  <div className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
                    <Icon className={`size-4 ${iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground">{label}</p>
                    <p className="mt-0.5 break-words text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="mt-2 flex items-center gap-2 rounded-xl bg-brand-green/8 px-4 py-3">
                <Clock className="size-4 shrink-0 text-brand-green" />
                <p className="text-xs font-medium text-brand-green-dark">
                  Monday – Saturday &nbsp;·&nbsp; 8:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            {/* Form */}
            <Card className="border-border/60 shadow-sm">
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer
        className="border-t"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.52 0.185 244 / 0.05) 0%, oklch(0.97 0 0) 50%, oklch(0.64 0.155 153 / 0.05) 100%)",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div>
              <p className="font-semibold text-foreground">Metro Coolaire</p>
              <p className="mt-0.5 text-xs italic text-muted-foreground">
                Your air is our care.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a
                href="https://www.facebook.com/metrocoolaire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-brand-green"
              >
                <FacebookIcon className="size-3.5" />
                Facebook
              </a>
              <span aria-hidden>·</span>
              <a
                href="tel:09690781466"
                className="transition-colors hover:text-primary"
              >
                0969 078 1466
              </a>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Metro Coolaire Trading Corporation. All rights reserved.</p>
            <p>Block 2 Lot 2 Westfield Subd., Iponan, Cagayan de Oro, 9000</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
