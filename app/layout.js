import './globals.css';

export const metadata = {
  title: "Sois la femme qu'un homme ne veut jamais perdre — ELYX",
  description:
    "10 leviers puissants qui éveillent l'attachement, la fidélité et le respect chez un homme. Le guide qui change ta manière d'aimer.",
  openGraph: {
    title: "Sois la femme qu'un homme ne veut jamais perdre",
    description:
      "10 leviers puissants qui éveillent l'attachement, la fidélité et le respect chez un homme.",
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
