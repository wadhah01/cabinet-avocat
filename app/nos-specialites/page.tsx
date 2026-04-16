import { SpecialtiesHero } from '@/components/specialties/SpecialtiesHero';
import { SpecialtiesGrid } from '@/components/specialties/SpecialtiesGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Spécialités en Droit | Cabinet Issam Agoubi - Avocat Gabes,Tunisie',
  description: 'Découvrez nos domaines d\'expertise : droit pénal, civil, commercial, immobilier, famille et succession. Accompagnement juridique professionnel à Gabès.',
  keywords: 'spécialités juridiques, droit civil, droit commercial, droit immobilier, droit famille, succession, avocat spécialisé Gabès',
  openGraph: {
    title: 'Nos Spécialités en Droit | Cabinet Agoubi Issam',
    description: 'Domaines d\'expertise juridique : droit pénal, civil, commercial et immobilier',
    url: 'https://cabinet-Issam-agoubi.tn/nos-specialites',
  },
};

export default function NosSpecialites() {
  return (
    <>
      <SpecialtiesHero />
      <SpecialtiesGrid />
    </>
  );
}