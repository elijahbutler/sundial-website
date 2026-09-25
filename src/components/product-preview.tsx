"use client";
import { useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  FileCheck2,
  FileText,
  House,
  ImagePlus,
  MessageCircle,
  Receipt,
  Settings,
  ArrowUpRight,
} from "lucide-react";

const views = {
  Events: {
    heading: "Upcoming events",
    columns: ["Event", "Date", "Status"],
    rows: [
      ["Emma & Oliver Wedding", "Apr 17, 2027", "Contracted"],
      ["Northstar Team Retreat", "Jun 5, 2027", "Proposal sent"],
      ["Rivera Anniversary", "Aug 21, 2027", "Inquiry"],
    ],
  },
  Inquiries: {
    heading: "New possibilities",
    columns: ["Inquiry", "Event type", "Next step"],
    rows: [
      ["Chen Wedding", "Wedding", "Schedule a tour"],
      ["Northstar Team Retreat", "Corporate", "Send proposal"],
      ["Patel Celebration", "Private event", "Follow up"],
    ],
  },
  Invoices: {
    heading: "Payments at a glance",
    columns: ["Event", "Invoice", "Status"],
    rows: [
      ["Emma & Oliver Wedding", "Booking deposit", "Paid"],
      ["Northstar Team Retreat", "First payment", "Awaiting payment"],
      ["Rivera Anniversary", "Booking deposit", "Draft"],
    ],
  },
};
type View = keyof typeof views;
export function ProductPreview() {
  const [view, setView] = useState<View>("Events");
  const current = views[view];
  return (
    <div className="product-wrap">
      <div className="browser-bar">
        <div className="browser-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span>Sundial workspace</span>
        <span className="browser-label">Interactive preview</span>
      </div>
      <div className="product-window">
        <aside className="product-sidebar">
          <div className="mini-brand">
            <span className="sun-mark">◴</span> Sundial
          </div>
          <div className="workspace">
            Willow Hall <ChevronDown size={12} />
          </div>
          <div className="preview-nav">
            <div>
              <House size={17} />
              Overview
            </div>
            {(["Inquiries", "Events", "Invoices"] as const).map((item) => {
              const Icon =
                item === "Events"
                  ? CalendarDays
                  : item === "Invoices"
                    ? Receipt
                    : MessageCircle;
              return (
                <button
                  key={item}
                  aria-pressed={view === item}
                  onClick={() => setView(item)}
                >
                  <Icon size={17} />
                  {item}
                </button>
              );
            })}
            <div>
              <FileText size={17} />
              Proposals
            </div>
            <div>
              <FileCheck2 size={17} />
              Contracts
            </div>
          </div>
          <div className="preview-settings">
            <Settings size={16} />
            Settings
          </div>
        </aside>
        <div className="product-main">
          <div className="product-topline">
            <span>Your workspace / {view}</span>
            <span className="avatar">WH</span>
          </div>
          <h2>Your venue at a glance.</h2>
          <div className="product-panels">
            <section
              className="event-panel"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="panel-title">
                <h3>{current.heading}</h3>
                <ArrowUpRight size={18} aria-hidden="true" />
              </div>
              <div
                className="table-scroll"
                role="region"
                aria-label={`${view} table`}
                tabIndex={0}
              >
                <table>
                  <thead>
                    <tr>
                      {current.columns.map((c) => (
                        <th key={c}>{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {current.rows.map((row) => (
                      <tr key={row[0]}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>
                          <span className="status">{row[2]}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="preview-hint">
                Try the Inquiries, Events, and Invoices tabs.
              </p>
            </section>
            <section className="activity-panel">
              <h3>Client activity</h3>
              {[
                {
                  Icon: FileCheck2,
                  text: "Proposal accepted",
                  event: "Emma & Oliver",
                  time: "2h",
                },
                {
                  Icon: ImagePlus,
                  text: "Inspiration uploaded",
                  event: "Rivera Anniversary",
                  time: "1d",
                },
                {
                  Icon: FileText,
                  text: "Contract signed",
                  event: "Northstar Team Retreat",
                  time: "2d",
                },
              ].map(({ Icon, text, event, time }) => (
                <div className="activity" key={text}>
                  <span className="activity-icon">
                    <Icon size={18} />
                  </span>
                  <div>
                    <strong>{text}</strong>
                    <span>{event}</span>
                  </div>
                  <small>{time}</small>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
      <p className="preview-caption">
        An interactive product concept. Sample events and activity.
      </p>
    </div>
  );
}
