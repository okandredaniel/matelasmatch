'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSubjects } from '@/data/contact';
import { MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 400));
    } finally {
      setSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      });
    }
  };

  return (
    <div className="glass-card-enhanced rounded-3xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle className="w-6 h-6 text-accent" aria-hidden="true" />
        <h2 className="font-sans text-2xl font-bold text-foreground">
          Envoyez-nous un message
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Nom complet *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="Votre nom"
              className="glass-input"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="vous@exemple.com"
              className="glass-input"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Sujet *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="glass-select w-full"
          >
            <option value="">Choisissez un sujet</option>
            {contactSubjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="glass-input w-full resize-none"
            placeholder="Décrivez votre demande en détail…"
          />
        </div>

        <Button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full"
          disabled={submitting}
        >
          <Send className="w-4 h-4 mr-2" />
          {submitting ? 'Envoi…' : 'Envoyer le message'}
        </Button>
      </form>
    </div>
  );
}
