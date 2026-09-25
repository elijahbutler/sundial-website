import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { VenueDropdown } from "@/components/venue-dropdown";
import { pitches, primaryVenues } from "@/content/sales";

export function Brand() {
  return (
    <Link scroll={false} href="/" className="brand" aria-label="Sundial home">
      {/* The same SVG supplies the site mark and browser icon. */}
      <Image src="/icon.svg" width={34} height={34} alt="" />
      <span>Sundial</span>
    </Link>
  );
}
export function PrimaryAction({
  className = "",
  fallbackHref = "/platform",
  fallbackLabel = "Explore Sundial",
}: {
  className?: string;
  fallbackHref?: string;
  fallbackLabel?: string;
}) {
  const configured = process.env.NEXT_PUBLIC_DEMO_URL;
  const demoUrl = configured?.startsWith("https://") ? configured : undefined;
  return (
    <Link scroll={false} className={`button ${className}`} href={demoUrl ?? fallbackHref}>
      {demoUrl ? "Book a demo" : fallbackLabel}
      <ArrowRight size={16} />
    </Link>
  );
}
function VenueNavigation() {
  return (
    <VenueDropdown>
      {primaryVenues.map((slug) => (
        <Link scroll={false} href={`/venues/${slug}`} key={slug}>
          <span>{pitches[slug].name}</span>
          <small>{pitches[slug].shortDescription}</small>
        </Link>
      ))}
      <Link scroll={false} href="/venues/hotels" className="venue-dropdown-secondary">
        <span>Hotels</span>
        <small>A dedicated workspace for hotel event teams.</small>
      </Link>
      <Link scroll={false} href="/venues" className="venue-dropdown-all">
        View all venue types <ArrowRight size={15} />
      </Link>
    </VenueDropdown>
  );
}
export function Header() {
  return (
    <header className="header container">
      <Brand />
      <nav className="desktop-nav" aria-label="Main">
        <Link scroll={false} href="/platform">Platform</Link>
        <VenueNavigation />
      </nav>
      <div className="header-action">
        <PrimaryAction fallbackHref="/venues" fallbackLabel="Find your venue" />
      </div>
      <MobileNav>
        <Link scroll={false} href="/platform">Platform</Link>
        <VenueNavigation />
        <PrimaryAction fallbackHref="/venues" fallbackLabel="Find your venue" />
      </MobileNav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer container">
      <div>
        <Brand />
        <span className="domain">sundialos.com</span>
      </div>
      <nav aria-label="Venue types">
        <Link scroll={false} href="/venues/wedding-venues">Wedding venues</Link>
        <Link scroll={false} href="/venues/bespoke-hotels">Bespoke hotels</Link>
        <Link scroll={false} href="/venues/event-venues">Event venues</Link>
        <Link scroll={false} href="/venues/hotels">Hotels</Link>
      </nav>
      <p>© {new Date().getFullYear()} Sundial</p>
    </footer>
  );
}
