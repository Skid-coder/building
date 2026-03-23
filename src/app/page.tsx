"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  const featuredItems = portfolioItems.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=1600&q=80"
            alt="Hero background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-6">
              Visual Artist &bull; Cultural Practitioner
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6">
              The Chungaiman
            </h1>
            <p className="text-neutral-400 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-10">
              Capturing stories through light, movement, and culture.
              <br />
              Based in North Nigeria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="/portfolio"
              className="border border-white/20 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="border border-white/10 text-neutral-400 text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-white/30 hover:text-white transition-all duration-500"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0"
          />
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
              Selected Work
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Featured Projects
            </h2>
            <div className="w-12 h-px bg-white/20 mx-auto mt-6" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.15}>
                <Link href={`/projects/${item.id}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-lg font-light">{item.title}</h3>
                      <p className="text-xs tracking-widest uppercase text-neutral-300 mt-1">
                        {item.category.replace("-", " ")}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block border border-white/10 text-neutral-400 text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-white/30 hover:text-white transition-all duration-500"
            >
              View All Work
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Brief About */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">
              About
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-300">
              I am a visual storyteller and cultural practitioner based in North Nigeria,
              creating work that bridges tradition and contemporary expression through
              photography, film, and creative direction.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-white transition-colors border-b border-white/10 hover:border-white/30 pb-1"
            >
              Learn More
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
