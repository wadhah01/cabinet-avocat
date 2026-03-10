import { CabinetHero } from '@/components/cabinet/CabinetHero';
import { Biography } from '@/components/cabinet/Biography';
import { Values } from '@/components/cabinet/Values';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notre Cabinet | Maître Agobui Issam - Avocat à Gabès,Tunisie',
  description: 'Découvrez l\'histoire et les valeurs du Cabinet AGoubi . Plus de 15 ans d\'expérience au service de nos clients à Gabès.',
  keywords: 'cabinet avocat Gabès Tunisie, Maître Agoubi Issam, expérience juridique, avocat Gabes',
  openGraph: {
    title: 'Notre Cabinet | Maître Agoubi Issam',
    description: 'Plus de 15 ans d\'expérience au service de nos clients',
    url: 'https://cabinet-dubois-avocat.fr/notre-cabinet',
  },
};

export default function NotreCabinet() {
  return (
    <>
      <CabinetHero />
      <Biography />
      <Values />
    </>
  );
}