import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { GoogleMap } from '@/components/contact/GoogleMap';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactez-Nous | Maître Agoubi - Avocat à Gabes,Tunisie',
  description: 'Contactez le Cabinet Agoubi Issam pour vos besoins juridiques. Consultation, devis gratuit. Situé Rue Imroo el kaïs jara Gabes n 1 Gabes, 6000.',
  keywords: 'contact avocat Gabes, consultation juridique, cabinet Gabes, rendez-vous avocat',
  openGraph: {
    title: 'Contactez-Nous | Cabinet Agoubi Issam',
    description: 'Contactez-nous pour vos besoins juridiques',
    url: 'https://cabinet-Issam-agoubi.tn/contact',
  },
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <GoogleMap />
    </>
  );
}