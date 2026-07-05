import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', weight: ['400', '600', '800'] });

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalProperti","description":"Koleksi 4 template marketplace properti","url":"https://properti.pintuweb.com","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://pintuweb.com"}};

export const metadata = {
  metadataBase: new URL("https://properti.pintuweb.com"),
  title: "PortalProperti — Empat Wajah Marketplace Properti",
  description: "PortalProperti: 4 template marketplace properti dengan kepribadian berbeda — editorial, proptech, luxury, dan hangat.",
  applicationName: "PortalProperti",
  keywords: ["template marketplace properti", "website properti", "koleksi template properti"],
  authors: [{ name: "PortalProperti" }],
  creator: "PortalProperti",
  publisher: "PortalProperti",
  alternates: { canonical: "https://properti.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://properti.pintuweb.com",
    siteName: "PortalProperti",
    title: "PortalProperti — Empat Wajah Marketplace Properti",
    description: "PortalProperti: 4 template marketplace properti dengan kepribadian berbeda — editorial, proptech, luxury, dan hangat.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalProperti — Empat Wajah Marketplace Properti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalProperti — Empat Wajah Marketplace Properti",
    description: "PortalProperti: 4 template marketplace properti dengan kepribadian berbeda — editorial, proptech, luxury, dan hangat.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${manrope.variable} antialiased`}>
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
