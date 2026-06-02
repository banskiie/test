import type { Metadata } from "next"
import { Nav } from "@/app/_components/nav"
import { ContactForm } from "@/app/_components/contact-form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
} from "lucide-react"

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

export const metadata: Metadata = {
  title: "Metro Coolaire — Your air is our care.",
  description:
    "Metro Coolaire specialises in selling and maintaining air conditioning products in Cagayan de Oro. Professional installation, repair, and cleaning services.",
}

const SERVICES = [
  {
    icon: Wind,
    title: "AC Sales",
    description:
      "Wide selection of window-type, split-type, and inverter air conditioners from trusted brands — sized right for your space and budget.",
  },
  {
    icon: CalendarCheck,
    title: "Professional Installation",
    description:
      "Our trained technicians handle every installation cleanly and efficiently, with correct refrigerant charging and full system testing.",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description:
      "Fast diagnostics and dependable repairs to restore your comfort. We service all major AC brands and models.",
  },
  {
    icon: Droplets,
    title: "AC Cleaning",
    description:
      "Regular deep cleaning removes dust and mould buildup, improves air quality, lowers electricity bills, and extends unit lifespan.",
  },
] as const

const STATS = [
  { value: "500+", label: "Happy clients" },
  { value: "5+", label: "Years in service" },
  { value: "1,000+", label: "Units serviced" },
  { value: "Same day", label: "Service available" },
] as const

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Phone",
    value: "0969 078 1466",
    href: "tel:09690781466",
  },
  {
    icon: Mail,
    label: "Email",
    value: "metrocoolaire.marketing2020@gmail.com",
    href: "mailto:metrocoolaire.marketing2020@gmail.com",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "facebook.com/metrocoolaire",
    href: "https://www.facebook.com/metrocoolaire",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Block 2 Lot 2 Westfield Subd., Iponan, Cagayan de Oro, 9000",
    href: "https://maps.google.com/?q=Iponan,Cagayan+de+Oro,Philippines",
  },
] as const

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-28 text-center"
      >
        <p className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Your air is our care.
        </p>

        <h1 className="font-heading max-w-3xl text-5xl tracking-tight sm:text-6xl lg:text-7xl">
          Stay cool,{" "}
          <span className="italic">stay comfortable.</span>
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

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 gap-x-12 gap-y-6 sm:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-heading text-2xl">{value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── Services ───────────────────────────────────────────────── */}
      <section id="services" className="bg-muted/40 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
              What we offer
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              From unit purchase to long-term upkeep — Metro Coolaire covers
              every stage of your air conditioning journey.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-border/50 bg-background">
                <CardHeader className="pb-3">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Contact ────────────────────────────────────────────────── */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
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
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground">
                Contact information
              </h3>

              {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-lg border border-border/50 bg-muted/40 p-4 transition-colors hover:border-border hover:bg-muted"
                >
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground">{label}</p>
                    <p className="mt-0.5 text-sm font-medium break-words text-foreground group-hover:text-primary transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Business hours: Monday – Saturday, 8:00 AM – 6:00 PM
              </p>
            </div>

            {/* Form */}
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t bg-muted/40">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div>
              <p className="font-semibold">Metro Coolaire</p>
              <p className="mt-0.5 text-xs text-muted-foreground italic">
                Your air is our care.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a
                href="https://www.facebook.com/metrocoolaire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <FacebookIcon className="size-3.5" />
                Facebook
              </a>
              <span>·</span>
              <a href="tel:09690781466" className="hover:text-foreground transition-colors">
                0969 078 1466
              </a>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Metro Coolaire. All rights reserved.</p>
            <p>Block 2 Lot 2 Westfield Subd., Iponan, Cagayan de Oro, 9000</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
