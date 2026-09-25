import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Header, Footer, PrimaryAction } from "@/components/site";
import { PitchPreview, SalesFaq, VenueCards } from "@/components/sales";
import { pitches, venueAliases, isPitchSlug } from "@/content/sales";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...Object.keys(pitches), ...Object.keys(venueAliases)].map(
    (slug) => ({ slug }),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonical = Object.hasOwn(venueAliases, slug)
    ? venueAliases[slug]
    : slug;
  if (!isPitchSlug(canonical)) return {};
  const pitch = pitches[canonical];
  const title = `${pitch.name} sales & event management`;
  return {
    title,
    description: pitch.description,
    alternates: { canonical: `/venues/${canonical}` },
    openGraph: {
      title: `${title} | Sundial`,
      description: pitch.description,
      url: `/venues/${canonical}`,
    },
  };
}

export default async function AudiencePage({ params }: PageProps) {
  const { slug } = await params;
  if (Object.hasOwn(venueAliases, slug))
    permanentRedirect(`/venues/${venueAliases[slug]}`);
  if (!isPitchSlug(slug)) notFound();
  const pitch = pitches[slug];
  return (
    <>
      <Header />
      <main id="main" className="container sales-page">
        <section className="audience-hero pitch-hero">
          <Link scroll={false} href="/venues" className="back-link">
            ← Find your venue
          </Link>
          <p className="eyebrow">Sundial for {pitch.name.toLowerCase()}</p>
          <h1>
            <span>{pitch.lead}</span>
            {pitch.headline}
          </h1>
          <p className="intro">{pitch.description}</p>
          <div className="hero-actions">
            <PrimaryAction
              fallbackHref="/platform"
              fallbackLabel="Explore the platform"
            />
          </div>
          <p className="pitch-context">{pitch.context}</p>
        </section>
        <section className="pitch-story" aria-labelledby="pitch-problem">
          <div className="pitch-story-copy">
            <p className="eyebrow">The work behind the occasion</p>
            <h2 id="pitch-problem">{pitch.problem}</h2>
            <p>{pitch.answer}</p>
            <Link scroll={false} href="/platform" className="text-link">
              Meet the platform <ArrowRight size={16} />
            </Link>
          </div>
          <PitchPreview preview={pitch.preview} />
        </section>
        <section className="sales-section" id="workflow">
          <div className="section-heading left">
            <p className="eyebrow">How the work comes together</p>
            <h2>
              From the first conversation
              <br />
              to the final details.
            </h2>
          </div>
          <ol className="workflow-steps">
            {pitch.workflow.map((step, index) => (
              <li key={step.title}>
                <span className="workflow-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="sales-section" id="included">
          <div className="section-heading left">
            <p className="eyebrow">Made for the way you work</p>
            <h2>
              The details that make
              <br />
              the difference.
            </h2>
          </div>
          <div className="sales-feature-grid">
            {pitch.features.map((feature) => (
              <article key={feature.title}>
                <Check size={20} strokeWidth={1.5} />
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
          <Link scroll={false} className="text-link section-more" href="/platform">
            Explore the full platform <ArrowRight size={16} />
          </Link>
        </section>
        <SalesFaq items={pitch.faq} />
        <section className="closing sales-closing">
          <p className="eyebrow">Sundial for {pitch.name.toLowerCase()}</p>
          <h2>{pitch.closing}</h2>
          <p>Take a closer look at the tools behind your next booking.</p>
          <PrimaryAction
            fallbackHref="/platform"
            fallbackLabel="Explore the platform"
          />
        </section>
        <section className="related-venues" aria-label="More venue types">
          <div className="related-heading">
            <h2>Another side to your venue?</h2>
            <Link scroll={false} href="/venues" className="text-link">
              All venue types <ArrowRight size={16} />
            </Link>
          </div>
          <VenueCards exclude={slug} />
          {slug !== "hotels" && (
            <p className="hotel-aside">
              Part of a larger hotel operation?{" "}
              <Link scroll={false} href="/venues/hotels">
                Explore hotel event sales <ArrowRight size={15} />
              </Link>
            </p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
