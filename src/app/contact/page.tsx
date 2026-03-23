"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Get in Touch"
          subtitle="Let's create something together"
        />

        {/* Email CTA */}
        <FadeIn className="text-center mb-16">
          <p className="text-neutral-400 text-sm mb-6">
            For inquiries, collaborations, or bookings:
          </p>
          <a
            href="mailto:hello@thechungaiman.com"
            className="inline-block border border-white/20 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
          >
            hello@thechungaiman.com
          </a>
        </FadeIn>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-xs tracking-widest uppercase text-neutral-600">
            or send a message
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Contact Form */}
        <FadeIn delay={0.2}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
