import { SpecialtiesHero } from '@/components/specialties/SpecialtiesHero';
import { SpecialtiesGrid } from '@/components/specialties/SpecialtiesGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Spécialités en Droit | Cabinet Issam Agoubi - Avocat Gabes,Tunisie',
description: "Cabinet d'avocats de référence à Gabès. Expertise en droit civil, commercial et immobilier. Conseil juridique personnalisé et accompagnement professionnel.", 
keywords: 'spécialités juridiques, droit civil, droit commercial, droit immobilier, droit famille, succession, avocat  Gabès',
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