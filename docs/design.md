# Sundial design system

The homepage opens with centered, light typography and a working product preview. Venue photography appears further down, alongside the client portal.

## Source and implementation

- [`src/styles/design-tokens.css`](../src/styles/design-tokens.css) defines the tokens shared by the homepage and venue pages.
- [`src/app/globals.css`](../src/app/globals.css) applies those tokens to layouts and components.
- [`src/components/site.tsx`](../src/components/site.tsx) provides the brand, navigation, primary action, and footer.

Cards use the explicit component values below. Orange is reserved for primary actions.

## Color and type

The brand mark is a flat day/night clock face with a gold rim, blue sky, dark lower half, and a square sun. It uses solid fills without gradients, shadows, or a perspective tilt. The circular silhouette keeps the mark simple at small sizes.

`src/app/icon.svg` is the single source for the header, footer, and browser icon. The mark uses gold `#d9aa52`, blue `#8daebb`, dark `#252d3a`, and cream `#fff3cf`. These colors belong to the logo only. Keep the existing page and button palette. The wordmark keeps its current DM Sans treatment.

| Use                  | Value                 |
| -------------------- | --------------------- |
| Page                 | `#f7f7f7`             |
| Cards and navigation | `#ffffff`             |
| Headings             | `#000000`             |
| Body text            | `#181825`             |
| Supporting copy      | `#636363`             |
| Neutral labels       | `#484758`             |
| Dividers             | `#e8e8ec`             |
| Primary action       | `#f69251`, black text |

Headings use locally served DM Sans at weight 300. Display text reaches 70px with 1.15 line height. Section headings reach 50px with 1.2 line height. Heading tracking is -0.01em, including the venue pages.

Body and navigation use locally served Inter at weights 400 and 500 with -0.015em tracking. Body copy is 16px, hero supporting text is 18px, and navigation is 14px. Labels use sentence case and neutral pills. Avoid wide uppercase tracking. Compact sample interfaces use 10px to 15px text. Tables wrap on phone screens, with a keyboard-focusable scroll area for any overflow.

## Layout and components

The content width is 1200px. Major sections have 112px of space above them on desktop and 72px on mobile. Use white cards against the near-white page, with 24px corners and 24px padding. Inner interface panels use 12px corners. The shared shadow is `0 2px 3px -2px rgb(24 24 37 / 12%)`.

Navigation is a contained white bar with 32px corners. It stays near the top while scrolling. The header links only to complete pages. Platform opens `/platform`; For venues opens a dropdown with the four audience pages and the venue index. Do not present sections of the platform page as separate navigation destinations. Visitors scroll through the feature content in order. Mobile navigation uses a disclosure menu that closes after choosing a link or pressing Escape. Do not add smooth scrolling or section-jump buttons. Page links use `scroll={false}` to leave scrolling under visitor control. Menu focus restoration uses `preventScroll`. Preserve the keyboard skip-to-content link.

Primary actions are orange pills with black text, 28px corners, and a minimum height of 48px. Secondary actions use white pills. Use neutral colors for status chips, decorative icons, and the preview's browser dots. Hover changes the button fill without moving the control.

The hero stacks a neutral label, two-line heading, supporting copy, actions, and a short workflow row. The browser-framed product preview sits below. Feature sections pair left-aligned copy with an interface illustration or contained photography. On mobile, feature copy comes before its illustration.

Venue sales pages share the centered heading treatment and white feature cards. Each adds an audience-specific event illustration, a four-step workflow, feature benefits, practical FAQs, and related venue links. General hotels remain a secondary audience. The platform page groups the feature set by stage of the venue workflow. Keep the same type, colors, buttons, and spacing throughout the site.

## Content and behavior

Sundial is the product brand. Willow Hall is a fictional workspace inside the sample dashboard. Describe concrete work such as following inquiries, signing contracts, and finding invoices. Do not add unverified customer quotes, ratings, or usage claims.

The dashboard has working Events, Inquiries, and Invoices controls, with sample data clearly identified. Primary actions use the configured HTTPS demo URL when available. Otherwise they use a destination-specific label and link to the platform page or venue index. There is no email capture form without a working submission destination, and no account links.

Keep keyboard focus visible, preserve native FAQ disclosure behavior, and honor reduced-motion preferences. Table overflow belongs inside the preview, never on the whole page.

## Photography and fonts

Photography stays inside 24px card containers. The client illustration uses a muted venue image with a white portal card. Photography comes from Unsplash under the Unsplash License and is served locally through Next Image.

- `public/images/venue.jpg`: garden ceremony, https://images.unsplash.com/photo-1523438885200-e635ba2c371e
- `public/images/flowers.jpg`: reception room, https://images.unsplash.com/photo-1519167758481-83f550bb49b3

DM Sans and Inter come from Fontsource packages with their bundled open font licenses.

The product illustrations are sample interfaces, not screenshots of a released product. See [`sales-content.md`](sales-content.md) for the page map and the limits on product claims.
