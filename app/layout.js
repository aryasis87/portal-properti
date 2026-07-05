import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', weight: ['400', '600', '800'] });

export const metadata = {
  title: 'PortalProperti — Empat Wajah Marketplace Properti',
  description: 'PortalProperti: 4 template marketplace properti dengan kepribadian berbeda — editorial, proptech, luxury, dan hangat.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${manrope.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
