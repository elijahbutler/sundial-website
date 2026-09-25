import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  metadataBase: new URL("https://sundialos.com"),
  title: { default: "Sundial | The venue OS", template: "%s | Sundial" },
  description:
    "Run your venue from first inquiry to final payment. Proposals, contracts, invoices, and a client portal that keeps everyone in the loop.",
  openGraph: {
    title: "Sundial | The venue OS",
    description: "Every event. All together.",
    type: "website",
    siteName: "Sundial",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
