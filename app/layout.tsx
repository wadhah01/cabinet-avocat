import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TopNavbar } from '@/components/navigation/TopNavbar';
import { MainNavbar } from '@/components/navigation/MainNavbar';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maître Issam Agoubi - Avocat à Gabès,Tunisie | Cabinet d\'Avocat Spécialisé',
  description: 'Cabinet d\'avocats spécialisé en droit civil, commercial et immobilier à Gabès. Maître Agoubi Issam vous accompagne avec expertise et professionnalisme.',
  keywords: 'avocat Gabès, droit civil, droit commercial, droit immobilier, cabinet avocat, conseil juridique',
  openGraph: {
    title: 'Maître Agoubi Issam - Avocat à Gabès',
    description: 'Cabinet d\'avocats spécialisé en droit pénal,  civil, commercial et immobilier',
    type: 'website',
    url: 'https://cabinet-Issam-agoubi.tn',
    siteName: 'Cabinet Agoubi Issam',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Cabinet Agoubi Issam",
              "description": "Cabinet d'avocats spécialisé en droit pénal, civil, commercial et immobilier",
              "url": "https://cabinet-dubois-avocat.fr",
              "telephone": "+216 98 567 372",
              "email": "maitreagoubiissam@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rue Imroo el kaïs jara Gabes n 1 ",
                "addressLocality": "Gabès",
                "postalCode": "6000",
                "addressCountry": "TN"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "€€€",
              "attorney": {
                "@type": "Person",
                "name": "Maître Agoubi Issam",
                "jobTitle": "Avocat"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-50`}>
        <TopNavbar />
        <MainNavbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />

      </body>
    </html>
  );
}