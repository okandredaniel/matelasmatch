'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (formData.website) {
      setSubmitted(true);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      });
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-sans text-2xl font-bold text-foreground mb-2">
          Message envoyé
        </h2>
        <p className="text-slate-600">
          Merci de nous avoir contactés. Nous reviendrons vers vous sous peu.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="font-sans text-2xl font-bold text-foreground mb-6">
        Envoyer un message
      </h2>
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="name">Nom</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={onChange('name')}
              placeholder="Votre nom"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange('email')}
              placeholder="vous@exemple.com"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="subject">Sujet</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={onChange('subject')}
            placeholder="Sujet de votre message"
            required
          />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange('message')}
            placeholder="Expliquez-nous comment nous pouvons vous aider"
            rows={6}
            required
          />
        </div>

        <Input
          id="website"
          name="website"
          value={formData.website}
          onChange={onChange('website')}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <div className="flex justify-end">
          <Button type="submit" size="lg" disabled={loading}>
            {loading ? 'Envoi…' : 'Envoyer'}
          </Button>
        </div>
      </form>
    </div>
  );
}
