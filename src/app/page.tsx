import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users,
  MessageCircle,
  CalendarDays,
  Receipt,
} from "lucide-react";
import { Header, Footer, PrimaryAction } from "@/components/site";
import { ProductPreview } from "@/components/product-preview";
import { VenueCards } from "@/components/sales";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">A little more time for your venue</p>
            <h1>
              <span>Every event.</span>
              <br />
              All together.
            </h1>
            <p className="intro">
              Turn interest into bookings. Keep proposals, signed contracts,
              payments, and the details of every event in one place.
            </p>
            <div className="hero-actions">
              <PrimaryAction />
              <Link scroll={false} className="button button-secondary" href="/venues">
                Find your venue <ArrowRight size={16} />
              </Link>
            </div>
            <div
              className="hero-note"
              aria-label="One connected event workflow"
            >
              <span>
                <MessageCircle size={15} /> First inquiry
              </span>
              <span>
                <CalendarDays size={15} /> Confirmed booking
              </span>
              <span>
                <Receipt size={15} /> Final payment
              </span>
            </div>
          </div>
        </section>
        <section
          className="platform container"
          id="platform"
          aria-label="Explore the Sundial platform"
        >
          <ProductPreview />
        </section>
        <section className="experience container" id="client-experience">
          <div className="section-heading">
            <p className="eyebrow">A shared view of every event</p>
            <h2>
              Your team and your clients,
              <br />
              on the same page.
            </h2>
          </div>
          <article className="feature-row">
            <div className="feature-copy">
              <p className="eyebrow">For your team</p>
              <h2>
                Know what needs <br />
                your attention.
              </h2>
              <p>
                Pick up the conversation where you left off. Follow each
                inquiry, find the latest proposal, and see which bookings are
                ready for the next step.
              </p>
              <Link scroll={false} className="text-link" href="/platform">
                Explore the workspace <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-card team-preview">
              <div className="mini-heading">
                <Users size={20} strokeWidth={1.5} />
                <span>Your next conversations</span>
                <span className="status">3 inquiries</span>
              </div>
              <div className="inquiry-list">
                {[
                  {
                    name: "Chen Wedding",
                    type: "Wedding · 120 guests",
                    step: "Schedule a tour",
                    initials: "CW",
                  },
                  {
                    name: "Northstar Retreat",
                    type: "Corporate · 40 guests",
                    step: "Send proposal",
                    initials: "NR",
                  },
                  {
                    name: "Rivera Anniversary",
                    type: "Celebration · 60 guests",
                    step: "Follow up",
                    initials: "RA",
                  },
                ].map((inquiry) => (
                  <div key={inquiry.name}>
                    <span className="inquiry-avatar">{inquiry.initials}</span>
                    <div>
                      <strong>{inquiry.name}</strong>
                      <span>{inquiry.type}</span>
                    </div>
                    <small>{inquiry.step}</small>
                  </div>
                ))}
              </div>
              <p className="preview-hint">Sample inquiries and next steps.</p>
            </div>
          </article>
          <article className="feature-row feature-row-reverse">
            <div className="client-visual">
              <Image
                src="/images/venue.jpg"
                alt="An outdoor wedding ceremony with a flower-covered gazebo and rows of white chairs"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                className="venue-photo"
              />
              <div className="portal-card">
                <p className="eyebrow">Client portal</p>
                <h3>Emma & Oliver</h3>
                <p>Your wedding, in one place.</p>
                <div className="portal-check">
                  <Check size={13} />
                  Contract signed
                </div>
                <div className="portal-check">
                  <Check size={13} />
                  Deposit received
                </div>
                <div className="inspiration-label">
                  <span>Inspiration</span>
                  <span>02 items</span>
                </div>
                <div className="inspiration-images">
                  <Image
                    src="/images/flowers.jpg"
                    width={180}
                    height={140}
                    alt="A reception room with round tables and chandeliers"
                  />
                  <Image
                    src="/images/venue.jpg"
                    width={180}
                    height={140}
                    alt="Garden ceremony inspiration"
                  />
                </div>
              </div>
            </div>
            <div className="feature-copy">
              <p className="eyebrow">For your clients</p>
              <h2>
                A place for <br />
                their plans.
              </h2>
              <p>
                Give every client a portal for their event. They can find their
                proposal, sign the contract, check payments, and share the ideas
                they have in mind.
              </p>
              <ul className="feature-list">
                <li>
                  <Check size={17} /> Documents and payments, together
                </li>
                <li>
                  <Check size={17} /> Inspiration to share with your team
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section className="venues container" id="venues">
          <div className="section-heading left">
            <p className="eyebrow">A place for every occasion</p>
            <h2>Built around your venue.</h2>
            <p>
              Wedding venues, bespoke hotels, and event spaces. A closer look at
              the work you do.
            </p>
          </div>
          <VenueCards />
          <Link scroll={false} className="text-link section-more" href="/venues">
            Find your venue workflow <ArrowRight size={16} />
          </Link>
        </section>
        <section className="faq container">
          <div>
            <p className="eyebrow">A few things to know</p>
            <h2>
              A little more <br />
              about Sundial.
            </h2>
          </div>
          <div>
            {[
              {
                q: "Is Sundial only for wedding venues?",
                a: "Weddings are our starting point. The same inquiry, proposal, contract, and payment workflow can support private celebrations and corporate events, too.",
              },
              {
                q: "What does the client portal bring together?",
                a: "The portal is designed to give each client one place for proposals, signed documents, invoices, and inspiration. The previews here illustrate that experience.",
              },
              {
                q: "What happens after the booking?",
                a: "Keep planning milestones, vendor contacts, catering documents, invoices, and shared files with the event. Your team can coordinate the work while clients follow their plans in the portal.",
              },
            ].map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="closing container">
          <p className="eyebrow">Sundial · The venue OS</p>
          <h2>
            More time for
            <br />
            the occasion.
          </h2>
          <p>See how the next event could come together.</p>
          <PrimaryAction />
        </section>
      </main>
      <Footer />
    </>
  );
}
