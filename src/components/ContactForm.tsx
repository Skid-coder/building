"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <p className="text-white text-lg mb-2">Thank you for reaching out.</p>
        <p className="text-neutral-400 text-sm">
          I&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm focus:border-white/40 focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm focus:border-white/40 focus:outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm focus:border-white/40 focus:outline-none transition-colors"
          placeholder="Project inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-neutral-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm focus:border-white/40 focus:outline-none transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        className="w-full border border-white/20 text-white text-sm tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
      >
        Send Message
      </button>
    </form>
  );
}
