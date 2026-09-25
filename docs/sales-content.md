# Sales content

The primary audiences are wedding venues, bespoke hotels, and event venues. A separate hotel page focuses on event sales and coordination.

## Page map

| Page                     | Purpose                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| `/platform`              | Explain the full inquiry, booking, payment, planning, client, and business workflow          |
| `/venues`                | Help buyers choose the right pitch                                                           |
| `/venues/wedding-venues` | Keep momentum after a tour, complete the booking, and guide the couple through planning      |
| `/venues/bespoke-hotels` | Carry personal service through tailored offers, menu revisions, approvals, and team handoffs |
| `/venues/event-venues`   | Manage varied briefs, sales follow-up, vendors, calendars, and payments                      |
| `/venues/hotels`         | Give hotel event teams a shared workspace alongside their property management systems        |

The old `/venues/private-events` and `/venues/boutique-hotels` URLs permanently redirect to `/venues/event-venues` and `/venues/bespoke-hotels`. Navigation and canonical metadata use the new URLs. The header has a Platform page link and a For venues dropdown listing the audience pages. The client experience is part of the platform page, not a separate header destination. Header calls to action link to a real demo destination or the venue index.

Shared audience copy lives in `src/content/sales.ts`. The dynamic venue page renders the same section structure with a distinct pitch, example event, workflow, feature benefits, and FAQs for each audience. Platform feature groups live in the same content module. `src/components/sales.tsx` supplies shared venue cards, illustrative event records, and FAQ markup.

## Copy boundaries

Describe only features that exist in the product today. Do not present planned work as available.

The copy does not promise public signup, free trials, subscriptions, Stripe Connect, room blocks, PMS integrations, housekeeping, room inventory, channel management, a self-serve event-type wizard, or multi-property administration. General event pitches describe the shared sales and planning work. They do not claim that every event type already has its own automated contract and signer policy.

No pricing tiers, customer counts, measured booking increases, time savings, reviews, or customer testimonials are invented. Example event names, dates, and statuses are illustrative and labeled as sample content. They do not describe real clients.

Provider connections require workspace configuration. The platform page names supported tools without implying that they are all active or included in a pricing plan.

## Calls to action

When `NEXT_PUBLIC_DEMO_URL` contains an HTTPS URL, primary actions link to it and say "Book a demo". Otherwise primary actions lead to the platform page or venue index. Calls to action open complete pages and do not jump to sections. No contact submission, free trial, account creation, or booking confirmation is simulated.
