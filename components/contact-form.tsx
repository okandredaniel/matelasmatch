'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { contactSubjects } from '@/data/contact';
import { MessageCircle, Send } from 'lucide-react';
import * as React from 'react';

export function ContactForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });

  const onChange =
    (key: 'name' | 'email' | 'message') =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((s) => ({ ...s, [key]: e.target.value }));

  const onSubject = (value: string) =>
    setFormData((s) => ({ ...s, subject: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (formData.website) return;
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    )
      return;

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 400));
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      });
      setSubmitted(false);
    } finally {
      setSubmitting(false);
    }
  };

  const nameInvalid = submitted && !formData.name;
  const emailInvalid = submitted && !formData.email;
  const subjectInvalid = submitted && !formData.subject;
  const messageInvalid = submitted && !formData.message;

  return (
    <Card className="glass-card-enhanced rounded-3xl">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <MessageCircle className="w-6 h-6 text-accent" aria-hidden="true" />
          <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6" noValidate>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={(e) =>
              setFormData((s) => ({ ...s, website: e.target.value }))
            }
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Nom complet *</Label>
              <Input
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={onChange('name')}
                autoComplete="name"
                placeholder="Votre nom"
                aria-invalid={nameInvalid || undefined}
              />
              {nameInvalid && (
                <p className="text-sm text-destructive">
                  Veuillez indiquer votre nom.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">Email *</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={onChange('email')}
                autoComplete="email"
                placeholder="vous@exemple.com"
                aria-invalid={emailInvalid || undefined}
              />
              {emailInvalid && (
                <p className="text-sm text-destructive">
                  Veuillez indiquer un email valide.
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Sujet *</Label>
            <Select value={formData.subject} onValueChange={onSubject}>
              <SelectTrigger aria-invalid={subjectInvalid || undefined}>
                <SelectValue placeholder="Choisissez un sujet" />
              </SelectTrigger>
              <SelectContent>
                {contactSubjects.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {subjectInvalid && (
              <p className="text-sm text-destructive">
                Veuillez choisir un sujet.
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">Message *</Label>
            <Textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={onChange('message')}
              rows={6}
              className="resize-none"
              placeholder="Décrivez votre demande en détail…"
              aria-invalid={messageInvalid || undefined}
            />
            {messageInvalid && (
              <p className="text-sm text-destructive">
                Veuillez écrire votre message.
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="xl"
            block
            disabled={submitting}
            aria-busy={submitting}
          >
            <Send className="w-4 h-4" aria-hidden="true" />
            {submitting ? 'Envoi…' : 'Envoyer le message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
