'use client';

import { BlogSection } from '@/components/blog-section';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { FeaturesSection } from '@/components/features-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { MattressComparator } from '@/components/mattress-comparator';
import { TestimonialsSection } from '@/components/testimonials-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <main id="main" role="main">
        <HeroSection />
        <FeaturesSection />
        <MattressComparator />
        <BlogSection />
        <FAQSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
