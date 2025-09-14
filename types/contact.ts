export type ContactIcon = 'mail' | 'phone' | 'map' | 'clock';

export type ContactItem = {
  id: string;
  icon: ContactIcon;
  title: string;
  content: string;
  description?: string;
};

export type ContactSubject = {
  value: string;
  label: string;
};
