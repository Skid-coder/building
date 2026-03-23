"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Services"
          subtitle="What I Offer"
        />

        <div className="space-y-16">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="border border-white/5 p-8 md:p-12 hover:border-white/15 transition-colors duration-500"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-neutral-300"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-white/5 pt-6">
                      <p className="text-xs tracking-widest uppercase text-neutral-500 mb-1">
                        Starting from
                      </p>
                      <p className="text-2xl font-light text-white">
                        {service.startingPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn className="text-center mt-20">
          <p className="text-neutral-400 text-sm mb-6">
            Every project is unique. Let&apos;s discuss yours.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-white/20 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
          >
            Request a Quote
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
