import type { ContactItem, ContactSubject } from '@/types/contact';

export const contactItems = [
  {
    id: 'email',
    icon: 'mail',
    title: 'Email',
    content: 'contact@matelasmatch.fr',
    description: 'Réponse sous 24 h',
  },
  {
    id: 'phone',
    icon: 'phone',
    title: 'Téléphone',
    content: '+33 1 23 45 67 89',
    description: 'Lun–Ven 9 h–18 h',
  },
  {
    id: 'address',
    icon: 'map',
    title: 'Adresse',
    content: 'Paris, France',
    description: 'Siège social',
  },
  {
    id: 'hours',
    icon: 'clock',
    title: 'Horaires',
    content: 'Lun–Ven 9 h–18 h',
    description: 'Support client',
  },
] as const satisfies readonly ContactItem[];

export const contactSubjects = [
  { value: 'conseil-matelas', label: 'Conseil pour choisir un matelas' },
  { value: 'probleme-technique', label: 'Problème technique' },
  { value: 'partenariat', label: 'Proposition de partenariat' },
  { value: 'feedback', label: 'Feedback sur le site' },
  { value: 'autre', label: 'Autre question' },
] as const satisfies readonly ContactSubject[];
