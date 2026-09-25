import Link from "next/link";
import { ArrowRight, Check, Circle, CalendarDays } from "lucide-react";
import {
  pitches,
  primaryVenues,
  type Pitch,
  type PitchSlug,
} from "@/content/sales";

export function VenueCards({ exclude }: { exclude?: PitchSlug }) {
  return (
    <div className="venue-grid">
      {primaryVenues
        .filter((slug) => slug !== exclude)
        .map((slug, index) => (
          <Link scroll={false} className="venue-card" href={`/venues/${slug}`} key={slug}>
            <span className="venue-number">0{index + 1}</span>
            <h3>{pitches[slug].name}</h3>
            <p>{pitches[slug].shortDescription}</p>
            <span className="text-link">
              Explore {pitches[slug].name.toLowerCase()}{" "}
              <ArrowRight size={17} />
            </span>
          </Link>
        ))}
    </div>
  );
}

export function PitchPreview({ preview }: { preview: Pitch["preview"] }) {
  return (
    <figure className="pitch-preview">
      <div className="pitch-preview-top">
        <span>Sundial</span>
        <span className="status">Sample event</span>
      </div>
      <div className="pitch-preview-title">
        <span className="pitch-event-icon">
          <CalendarDays size={24} strokeWidth={1.4} />
        </span>
        <div>
          <h3>{preview.title}</h3>
          <p>{preview.subtitle}</p>
        </div>
      </div>
      <p className="pitch-preview-label">{preview.label}</p>
      <ul className="pitch-records">
        {preview.rows.map((row) => {
          const complete = [
            "Accepted",
            "Approved",
            "Signed",
            "Paid",
            "On file",
            "Shared",
          ].includes(row.status);
          const Icon = complete ? Check : Circle;
          return (
            <li key={row.title}>
              <span className="pitch-record-icon">
                <Icon size={16} />
              </span>
              <div>
                <strong>{row.title}</strong>
                <p>{row.detail}</p>
              </div>
              <span className="status">{row.status}</span>
            </li>
          );
        })}
      </ul>
      <figcaption>Illustrative workflow with sample details.</figcaption>
    </figure>
  );
}

export function SalesFaq({ items }: { items: Pitch["faq"] }) {
  return (
    <section className="faq sales-faq">
      <div>
        <p className="eyebrow">A few practical questions</p>
        <h2>Before we talk.</h2>
      </div>
      <div>
        {items.map(({ question, answer }) => (
          <details key={question}>
            <summary>
              {question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
