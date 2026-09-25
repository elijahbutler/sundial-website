import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer, PrimaryAction } from "@/components/site";
import { ProductPreview } from "@/components/product-preview";
import { VenueCards } from "@/components/sales";
import { featureGroups } from "@/content/sales";

export const metadata: Metadata = {
  title: "Venue sales, booking & planning software",
  description:
    "Explore Sundial's inquiry pipeline, proposals, contracts, payment schedules, client portal, catering approvals, event planning, and owner reporting.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "The work behind every booking, together | Sundial",
    description:
      "Explore the tools for venue sales, booking, payments, client experience, and event operations.",
    url: "/platform",
  },
};

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main id="main" className="container sales-page">
        <section className="audience-hero pitch-hero">
          <p className="eyebrow">The Sundial platform</p>
          <h1>
            <span>The work behind every booking.</span>Finally, together.
          </h1>
          <p className="intro">
            Follow the inquiry, shape the offer, collect the deposit, and keep
            the event moving. Give your team and your clients a shared place for
            what happens next.
          </p>
          <div className="hero-actions">
            <PrimaryAction
              fallbackHref="/venues"
              fallbackLabel="Find your venue"
            />
          </div>
          <p className="pitch-context">
            Built around the venue workflow, from first inquiry to event day.
          </p>
        </section>
        <ProductPreview />
        <section className="sales-section" id="explore">
          <div className="section-heading">
            <p className="eyebrow">A closer look</p>
            <h2>One event. A lot of moving parts.</h2>
            <p>Keep each part connected to the client and the booking.</p>
          </div>
        </section>
        <div className="platform-groups">
          {featureGroups.map((group, index) => (
            <section className="platform-group" id={group.id} key={group.id}>
              <div className="platform-group-intro">
                <span className="workflow-number">0{index + 1}</span>
                <p className="eyebrow">{group.label}</p>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <div className="platform-feature-list">
                {group.features.map((feature) => (
                  <article key={feature.title}>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        <section className="integration-note">
          <div>
            <p className="eyebrow">Connected where it counts</p>
            <h2>Keep familiar tools in the workflow.</h2>
          </div>
          <div>
            <p>
              Sundial includes connections for Google Calendar,
              Calendly, DocuSign, BILL, Invoice Ninja, and Resend. Availability
              depends on the tools configured for your workspace.
            </p>
            <p>
              Permissioned API and assistant access can also bring approved
              venue records into connected tools.
            </p>
          </div>
        </section>
        <section className="sales-section">
          <div className="section-heading left">
            <p className="eyebrow">Put it to work</p>
            <h2>
              See what this means
              <br />
              for your venue.
            </h2>
          </div>
          <VenueCards />
          <p className="hotel-aside">
            Looking after events at a hotel?{" "}
            <Link scroll={false} href="/venues/hotels">
              Explore hotel event sales <ArrowRight size={15} />
            </Link>
          </p>
        </section>
        <section className="closing sales-closing">
          <h2>Start with your next booking.</h2>
          <p>
            See how Sundial fits the sales and planning work at your venue.
          </p>
          <PrimaryAction
            fallbackHref="/venues"
            fallbackLabel="Find your venue"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
