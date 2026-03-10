'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Votre message a été envoyé. Nous vous recontacterons rapidement.');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Demande de Contact
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Nom et Prénom *
            </Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="mt-1"
              placeholder="Votre nom complet"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="mt-1"
              placeholder="votre@email.com"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phone" className="text-gray-700 font-medium">
            Téléphone
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="mt-1"
            placeholder="votre numéro de téléphone"
          />
        </div>

        <div>
          <Label htmlFor="subject" className="text-gray-700 font-medium">
            Domaine juridique *
          </Label>
          <Select onValueChange={(value) => handleChange('subject', value)} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Sélectionnez un domaine" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="civil">Droit Civil</SelectItem>
              <SelectItem value="commercial">Droit Commercial</SelectItem>
              <SelectItem value="immobilier">Droit Immobilier</SelectItem>
              <SelectItem value="famille">Droit de la Famille</SelectItem>
              <SelectItem value="affaires">Droit des Affaires</SelectItem>
              <SelectItem value="penal">Droit Pénal</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="text-gray-700 font-medium">
            Message *
          </Label>
          <Textarea
            id="message"
            required
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="mt-1 min-h-32"
            placeholder="Décrivez brièvement votre situation juridique..."
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold py-3 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Envoyer le Message
        </Button>

        <p className="text-sm text-gray-500 text-center">
          * Champs obligatoires. Nous nous engageons à respecter la confidentialité de vos informations.
        </p>
      </form>
    </div>
  );
}