export type Pitch = {
  name: string;
  shortDescription: string;
  lead: string;
  headline: string;
  description: string;
  context: string;
  problem: string;
  answer: string;
  preview: {
    title: string;
    subtitle: string;
    label: string;
    rows: { title: string; detail: string; status: string }[];
  };
  workflow: { title: string; text: string }[];
  features: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  closing: string;
};

export const pitches = {
  "wedding-venues": {
    name: "Wedding venues",
    shortDescription:
      "Turn a promising tour into a booked date, then guide every couple through the planning.",
    lead: "They fell for your venue.",
    headline: "Make the next yes easy.",
    description:
      "Keep the momentum after the tour. Bring proposals, signed contracts, deposits, and wedding plans into one connected experience for your team and your couples.",
    context: "Built around the wedding booking journey",
    problem: "The tour is over. The work of winning the wedding isn't.",
    answer:
      "A couple asks for a change. A contract needs a signature. A deposit is still due. Give your team a shared record of every next step, so a promising conversation keeps moving toward a confirmed date.",
    preview: {
      title: "Emma & Oliver's wedding",
      subtitle: "Garden ceremony · April 17, 2027",
      label: "From yes to booked",
      rows: [
        {
          title: "Wedding proposal",
          detail: "Venue hire and selected add-ons",
          status: "Accepted",
        },
        {
          title: "Venue contract",
          detail: "Signed documents kept with the booking",
          status: "Signed",
        },
        {
          title: "Booking deposit",
          detail: "Invoice and payment status in one place",
          status: "Paid",
        },
        {
          title: "Planning milestones",
          detail: "Vendor team, guest count, final walkthrough",
          status: "Up next",
        },
      ],
    },
    workflow: [
      {
        title: "Welcome the inquiry",
        text: "Collect the date, guest count, and plans. Keep tour details, notes, and follow-up tasks with the couple.",
      },
      {
        title: "Make the offer personal",
        text: "Start with a proposal template, tailor the line items, and include the extras they asked about.",
      },
      {
        title: "Make the booking official",
        text: "Connect contract intake, signing, the deposit invoice, and the payment schedule.",
      },
      {
        title: "Keep the wedding moving",
        text: "Share milestones, documents, and inspiration in a client portal through the final walkthrough.",
      },
    ],
    features: [
      {
        title: "Tour follow-up with context",
        text: "Find the conversation, tour details, and next task in the inquiry record before you reply.",
      },
      {
        title: "Proposals worth saying yes to",
        text: "Reusable templates, itemized pricing, add-ons, and a secure review link give couples a clear offer to consider.",
      },
      {
        title: "Contract and deposit tracking",
        text: "See where signing and payment stand without piecing together separate email threads.",
      },
      {
        title: "Payments around the wedding date",
        text: "Set installment due dates around the event and send reminders for upcoming or overdue invoices.",
      },
      {
        title: "A portal for the couple",
        text: "Bring the proposal, contract, invoices, planning details, and inspiration boards into their own event space.",
      },
      {
        title: "A clearer view of your season",
        text: "Review booked revenue, outstanding balances, your sales pipeline, and open prime dates.",
      },
    ],
    faq: [
      {
        question: "Can we tailor proposals to each wedding?",
        answer:
          "Yes. Start with a reusable template, edit the proposal, and add line items or optional extras. Couples review the offer through a secure link and can accept or decline it.",
      },
      {
        question: "What happens after a couple books?",
        answer:
          "The work continues in the client and event records. Your team can manage planning milestones, vendors, catering documents, invoices, and shared files while the couple follows along in their portal.",
      },
      {
        question: "Can payments follow the wedding timeline?",
        answer:
          "Payment schedules can use a signing milestone and dates relative to the event. Invoice reminders help your team follow up on approaching due dates and unpaid balances.",
      },
    ],
    closing: "Give the next couple a reason to say yes.",
  },
  "bespoke-hotels": {
    name: "Bespoke hotels",
    shortDescription:
      "Give weddings, private dining, and celebrations the same personal attention as a stay.",
    lead: "A place with personality.",
    headline: "An experience to match.",
    description:
      "Your events deserve the care you put into your property. Keep each celebration's offer, menu, documents, and client plans together, even as the details change.",
    context: "For independent properties with a personal approach",
    problem: "A bespoke event comes with a lot of versions.",
    answer:
      "The private dinner becomes a celebration. The menu changes. Someone else on your team takes the next call. Keep the latest offer, approved documents, and client notes with the event so the personal touches survive the handoff.",
    preview: {
      title: "The Hart celebration",
      subtitle: "Private dining · September 18, 2027",
      label: "Every detail, considered",
      rows: [
        {
          title: "A personal proposal",
          detail: "Private dining and selected extras",
          status: "Accepted",
        },
        {
          title: "Seasonal dinner menu",
          detail: "Version 3 · client approval recorded",
          status: "Approved",
        },
        {
          title: "Client inspiration",
          detail: "Table settings and floral references",
          status: "Shared",
        },
        {
          title: "Final guest count",
          detail: "A planning milestone for the team",
          status: "Up next",
        },
      ],
    },
    workflow: [
      {
        title: "Understand the occasion",
        text: "Keep the initial request, guest details, and staff notes together before you shape the offer.",
      },
      {
        title: "Build around their plans",
        text: "Tailor a proposal with itemized services and add-ons, then share it for review.",
      },
      {
        title: "Agree on the details",
        text: "Keep menu versions, approvals, and signed documents attached to the event.",
      },
      {
        title: "Carry the care through",
        text: "Share the client-facing plans while your team manages its own notes, tasks, and deadlines.",
      },
    ],
    features: [
      {
        title: "Offers with room for detail",
        text: "Use proposal templates as a starting point, then adjust the scope and price for each occasion.",
      },
      {
        title: "Menus with an approval history",
        text: "Upload revised catering documents, retain earlier versions, and record which menu the client approved.",
      },
      {
        title: "Personal service across handoffs",
        text: "Keep client history, event notes, files, and assigned tasks available to the people working on the occasion.",
      },
      {
        title: "Inspiration in the right place",
        text: "Let clients share visual references alongside their event documents, instead of scattering them across messages.",
      },
      {
        title: "Clear payments",
        text: "Bring the deposit, scheduled installments, invoices, and payment links into the booking experience.",
      },
      {
        title: "Control over what clients see",
        text: "Separate internal notes and catering documents from the materials you choose to share with clients.",
      },
    ],
    faq: [
      {
        question: "Is this for boutique hotels as well?",
        answer:
          "Yes. Sundial is for independent and boutique properties that take a personal approach to weddings, dining, and private events. The emphasis is the event relationship and the work behind it.",
      },
      {
        question: "Can the catering team keep its own working notes?",
        answer:
          "Yes. Catering documents and notes have internal and client-visible settings. Your team can work through revisions and share the version that is ready for the client.",
      },
      {
        question: "Does this manage guest rooms?",
        answer:
          "Room reservations, housekeeping, and front desk operations stay in your hotel system. Sundial focuses on selling and coordinating your events.",
      },
    ],
    closing: "Make the planning feel as personal as the place.",
  },
  "event-venues": {
    name: "Event venues",
    shortDescription:
      "Keep private celebrations, corporate gatherings, and their changing details under control.",
    lead: "A different brief every day.",
    headline: "A clear next step for each.",
    description:
      "Keep every inquiry, proposal, deadline, and balance attached to the right event. Give your team a way to handle a busy calendar without losing the details that make each booking different.",
    context: "For private celebrations and corporate gatherings",
    problem: "A busy calendar shouldn't mean a scattered business.",
    answer:
      "When one client is choosing a menu and another is waiting for a quote, the next action matters more than another inbox. Bring your sales pipeline and event work together so your team can see who needs a reply, what needs approval, and what is still owed.",
    preview: {
      title: "Northstar team retreat",
      subtitle: "Corporate gathering · June 5, 2027",
      label: "The event, at a glance",
      rows: [
        {
          title: "Event proposal",
          detail: "Venue hire and catering line items",
          status: "Sent",
        },
        {
          title: "Client follow-up",
          detail: "Confirm the revised guest count",
          status: "Assigned",
        },
        {
          title: "Vendor contacts",
          detail: "Planner, caterer, and production team",
          status: "On file",
        },
        {
          title: "Payment schedule",
          detail: "Deposit and remaining installments",
          status: "Draft",
        },
      ],
    },
    workflow: [
      {
        title: "Capture the brief",
        text: "Keep the request and qualification details in one inquiry record, with notes and follow-up tasks.",
      },
      {
        title: "Put the offer in writing",
        text: "Build an itemized proposal, include add-ons, and track the client's decision.",
      },
      {
        title: "Coordinate the people",
        text: "Bring event dates, assigned tasks, vendors, and shared documents into the planning work.",
      },
      {
        title: "Follow the money",
        text: "Track deposits, invoices, scheduled payments, and unpaid balances across your events.",
      },
    ],
    features: [
      {
        title: "One view of the sales pipeline",
        text: "Keep inquiries, next actions, proposals, and booking progress visible as your team moves between events.",
      },
      {
        title: "Quotes that explain the scope",
        text: "Separate venue hire, services, and extras into clear proposal line items, with templates for repeat work.",
      },
      {
        title: "An event calendar with context",
        text: "Review events, tours, and venue availability in one schedule workspace, with Google Calendar support.",
      },
      {
        title: "Tasks with an owner",
        text: "Assign follow-up work and planning tasks so the next step belongs to someone on your team.",
      },
      {
        title: "Vendors and documents together",
        text: "Find the event's vendor contacts, catering records, shared files, and planning milestones in its record.",
      },
      {
        title: "Revenue you can follow",
        text: "Separate booked, collected, outstanding, and overdue amounts when reviewing how the business is doing.",
      },
    ],
    faq: [
      {
        question: "What kinds of venues is this aimed at?",
        answer:
          "Independent spaces hosting private celebrations, retreats, corporate gatherings, and weddings. Bring the work these bookings share into one place: inquiries, offers, contracts, payments, and event coordination.",
      },
      {
        question: "Can the team work from the same event record?",
        answer:
          "Staff can use shared client and event records, assigned tasks, documents, and vendor details. Roles and permissions control access to the workspace.",
      },
      {
        question:
          "Can we see what is booked and what is still in the pipeline?",
        answer:
          "The sales and owner views distinguish inquiries and proposals from booked events. Financial views separate booked value from payments collected and balances still outstanding.",
      },
    ],
    closing: "Make room for the next great event.",
  },
  hotels: {
    name: "Hotels",
    shortDescription:
      "Give the events team a shared sales and planning workspace alongside your hotel systems.",
    lead: "Your hotel has a room system.",
    headline: "Give events a home, too.",
    description:
      "Bring wedding, meeting, and private-event sales into focus. Keep the client's offer, booking documents, payment status, and planning work together from the first conversation to the event handoff.",
    context: "A dedicated workspace for hotel event teams",
    problem: "An event booking needs more than a reservation record.",
    answer:
      "Sales needs the latest proposal. The coordinator needs the agreed details. The catering team needs the approved menu. Give everyone a shared event record while your existing hotel systems continue to run the stay.",
    preview: {
      title: "The Meridian annual dinner",
      subtitle: "Hotel event team · November 12, 2027",
      label: "Ready for the handoff",
      rows: [
        {
          title: "Agreed event proposal",
          detail: "Scope and selected services",
          status: "Accepted",
        },
        {
          title: "Signed contract",
          detail: "Stored with the client's event",
          status: "On file",
        },
        {
          title: "Catering documents",
          detail: "Latest approved menu",
          status: "Approved",
        },
        {
          title: "Coordinator tasks",
          detail: "Final guest count and walkthrough",
          status: "Assigned",
        },
      ],
    },
    workflow: [
      {
        title: "Track the opportunity",
        text: "Keep the inquiry, conversations, tour, and follow-up work visible to your event sales team.",
      },
      {
        title: "Agree on the booking",
        text: "Connect the event proposal, contract intake, signing status, and deposit invoice.",
      },
      {
        title: "Hand over the details",
        text: "Keep catering documents, vendor information, and planning tasks with the event as more staff get involved.",
      },
      {
        title: "Review event performance",
        text: "Look at your event pipeline, booked revenue, collected payments, and remaining balances.",
      },
    ],
    features: [
      {
        title: "A dedicated event pipeline",
        text: "Give event sales its own inquiry and proposal workflow with a clear record of the next action.",
      },
      {
        title: "Reusable commercial documents",
        text: "Start from proposal and contract templates, then prepare the booking's actual scope and details.",
      },
      {
        title: "A shared handoff",
        text: "Keep the event's documents, contacts, tasks, and catering notes in a record the team can return to.",
      },
      {
        title: "Permissioned team access",
        text: "Use roles and permission presets to give staff access appropriate to their responsibilities.",
      },
      {
        title: "Client self-service",
        text: "Give the event client a place to review proposals, find invoices, upload documents, and follow the planning.",
      },
      {
        title: "Event financial visibility",
        text: "Review invoices, payment schedules, outstanding balances, and owner-level reporting for the events business.",
      },
    ],
    faq: [
      {
        question: "Is Sundial a hotel property management system?",
        answer:
          "No. Sundial focuses on event sales and coordination. Room inventory, reservations, housekeeping, and front desk operations remain in your existing property management system.",
      },
      {
        question: "Will it connect to our PMS or manage room blocks?",
        answer:
          "PMS integrations and room-block management are not available. Sundial gives your event team a separate workspace for sales and planning alongside the systems you already use.",
      },
      {
        question: "What if our property specializes in personal celebrations?",
        answer:
          "The bespoke hotels page takes a closer look at tailored proposals, menu revisions, client inspiration, and the personal service behind weddings and private dining.",
      },
    ],
    closing: "Give your events business the attention it deserves.",
  },
} satisfies Record<string, Pitch>;

export type PitchSlug = keyof typeof pitches;
export const primaryVenues: PitchSlug[] = [
  "wedding-venues",
  "bespoke-hotels",
  "event-venues",
];
export const venueAliases: Record<string, PitchSlug> = {
  "private-events": "event-venues",
  "boutique-hotels": "bespoke-hotels",
};
export function isPitchSlug(slug: string): slug is PitchSlug {
  return Object.hasOwn(pitches, slug);
}

export const featureGroups = [
  {
    id: "inquiries",
    label: "Inquiries & proposals",
    title: "Keep the next booking moving.",
    description:
      "Give your sales team the history behind the inquiry and a clear way to turn interest into an offer.",
    features: [
      {
        title: "Intake, qualification, and tours",
        text: "Capture public and staff-entered inquiries. Keep tour details, qualification notes, attribution, and follow-up tasks with the lead.",
      },
      {
        title: "Proposals and optional extras",
        text: "Create offers with reusable templates, itemized pricing, add-ons, and PDF documents. Send a secure review link with an expiry date or optional access PIN.",
      },
      {
        title: "Client decisions and follow-ups",
        text: "Track proposal acceptance or decline and keep follow-up communication connected to the inquiry.",
      },
    ],
  },
  {
    id: "booking",
    label: "Contracts & booking",
    title: "Know what makes it official.",
    description:
      "Bring the commercial steps together before the booking moves into planning.",
    features: [
      {
        title: "Contract intake and templates",
        text: "Collect the details needed for the agreement, prepare the contract from a template, and keep its documents with the booking.",
      },
      {
        title: "Signing and approval status",
        text: "Follow contract preparation, approval, and signature progress. Connected signing tools support the signing step.",
      },
      {
        title: "Deposits and booking progress",
        text: "See contract and deposit steps together, then carry the client and event context forward into the booked event.",
      },
    ],
  },
  {
    id: "payments",
    label: "Invoices & payments",
    title: "Keep a clear view of what is owed.",
    description:
      "Handle the deposit and the payments that follow without losing sight of the event they belong to.",
    features: [
      {
        title: "Invoices and payment schedules",
        text: "Organize deposits and installments around signing and the event date, with scheduled invoice delivery and payment links.",
      },
      {
        title: "Reminders with a record",
        text: "Send reminders around invoice due dates and keep a delivery history your team can check.",
      },
      {
        title: "Payments and reconciliation",
        text: "Track recorded payments and outstanding balances with supported billing connections. Separate what is booked from what has actually been collected.",
      },
    ],
  },
  {
    id: "planning",
    label: "Planning & operations",
    title: "Carry the details into event day.",
    description:
      "Keep the work that follows the sale attached to the booking, where the team can find it.",
    features: [
      {
        title: "Calendar, milestones, and tasks",
        text: "See events, tours, and availability. Assign work and follow planning milestones such as the final guest count, walkthrough, and timeline approval.",
      },
      {
        title: "Vendor contacts and documents",
        text: "Keep the vendor team and event files together so coordinators can find who is involved and what has been shared.",
      },
      {
        title: "Catering and menu approvals",
        text: "Manage catering records, upload revised documents, retain version history, and record approvals. Choose which notes and documents clients can see.",
      },
    ],
  },
  {
    id: "client-experience",
    label: "The client portal",
    title: "Give clients a place to come back to.",
    description:
      "Keep the client experience as considered as the event, with their own view of the plans and next steps.",
    features: [
      {
        title: "Proposals, contracts, and invoices",
        text: "Bring the commercial documents into the client's portal so they can review the offer, find signed agreements, and check invoices.",
      },
      {
        title: "Shared plans and inspiration",
        text: "Let clients follow event details and milestones, find vendor information, upload documents, and collect inspiration boards.",
      },
      {
        title: "Accounts or secure links",
        text: "Invite clients to an account or provide an expiring portal link. Keep access tied to their own client records.",
      },
    ],
  },
  {
    id: "business",
    label: "Your business",
    title: "See the season. Support the team.",
    description:
      "Bring commercial visibility and day-to-day administration into the same workspace.",
    features: [
      {
        title: "Owner dashboards and reports",
        text: "Review seasonal bookings, open prime dates, the sales forecast, and booked, collected, outstanding, and overdue revenue.",
      },
      {
        title: "Team roles and communication",
        text: "Manage staff permissions, reusable email templates, notifications, scheduled reminders, workflow rules, and audit history.",
      },
      {
        title: "Branding, forms, and connected tools",
        text: "Manage organization branding and configurable forms. Supported connections cover calendars, intake, signing, billing, and email delivery.",
      },
    ],
  },
];
