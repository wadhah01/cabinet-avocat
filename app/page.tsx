import { Hero } from '@/components/home/Hero';
import { PracticeAreas } from '@/components/home/PracticeAreas';
import { CTABanner } from '@/components/home/CTABanner';
import { GoogleReviews } from '@/components/home/GoogleReviews';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accueil | Maître Agoubi - Avocat à Gabès',
  description: 'Cabinet d\'avocats de référence à Paris. Expertise en droit civil, commercial et immobilier. Conseil juridique personnalisé et accompagnement professionnel.',
  keywords: 'avocat Paris, cabinet avocat, droit civil, droit commercial, conseil juridique',
  openGraph: {
    title: 'Maître Issam Agoubi - Avocat à Gabes',
    description: 'Cabinet d\'avocats de référence à Gabès',
    url: 'https://cabinet-Agoubi-avocat.tn',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <CTABanner />
      <GoogleReviews />
    </>
  );
}