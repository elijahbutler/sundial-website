import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer, PrimaryAction } from "@/components/site";
import { VenueCards } from "@/components/sales";

export const metadata: Metadata = {
  title: "Find your venue",
  description:
    "Explore Sundial for wedding venues, bespoke hotels, and event venues. Sales, bookings, client relationships, and event planning in one place.",
  alternates: { canonical: "/venues" },
  openGraph: {
    title: "A closer look at your kind of venue | Sundial",
    description: "A sales and planning workflow for the occasions you host.",
    url: "/venues",
  },
};

export default function VenuesPage() {
  return (
    <>
      <Header />
      <main className="container sales-page" id="main">
        <section className="audience-hero pitch-hero">
          <p className="eyebrow">For the people behind the occasion</p>
          <h1>
            <span>Your venue is one of a kind.</span>Start with what you do
            best.
          </h1>
          <p className="intro">
            A wedding booking. A private dinner. A calendar full of different
            briefs. Find the Sundial workflow that fits the business you are
            building.
          </p>
        </section>
        <VenueCards />
        <aside className="hotel-callout">
          <div>
            <p className="eyebrow">Also for hotel event teams</p>
            <h2>A dedicated home for hotel event sales.</h2>
            <p>
              Keep proposals, booking documents, catering details, and payments
              together alongside the systems that run your rooms.
            </p>
          </div>
          <Link scroll={false} href="/venues/hotels" className="button button-secondary">
            Explore hotels <ArrowRight size={16} />
          </Link>
        </aside>
        <section className="closing sales-closing">
          <h2>
            One platform behind
            <br />
            every occasion.
          </h2>
          <p>
            Explore the tools for inquiries, booking, payments, and planning.
          </p>
          <PrimaryAction
            fallbackHref="/platform"
            fallbackLabel="Explore the platform"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
