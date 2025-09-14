import { FAQSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
