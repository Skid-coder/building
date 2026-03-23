"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Portrait */}
          <FadeIn direction="left">
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="The Chungaiman"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
                About
              </p>
              <h1 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-8">
                The Chungaiman
              </h1>
              <div className="w-12 h-px bg-white/20 mb-8" />

              <div className="space-y-6 text-neutral-300 leading-relaxed">
                <p>
                  I am a visual artist and cultural practitioner based in North Nigeria.
                  My work spans photography, videography, and creative direction — always
                  rooted in the stories and traditions of the communities I come from.
                </p>
                <p>
                  Growing up in the North, I was surrounded by a rich visual culture: the
                  textures of hand-woven fabrics, the geometry of Hausa architecture, the
                  rhythm of festivals and everyday life. These influences shape everything
                  I create.
                </p>
                <p>
                  I believe in the power of images to preserve culture, challenge
                  narratives, and connect people across boundaries. Every project I take
                  on is an opportunity to tell a story that matters — with honesty,
                  intention, and beauty.
                </p>
                <p>
                  When I&apos;m not behind the camera, you&apos;ll find me exploring local
                  markets, mentoring young creatives, or working on community-driven art
                  projects.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs tracking-widest uppercase text-neutral-500 mb-2">
                    Based in
                  </p>
                  <p className="text-white text-sm">North Nigeria</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-neutral-500 mb-2">
                    Disciplines
                  </p>
                  <p className="text-white text-sm">
                    Photography, Videography, Creative Direction
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block border border-white/20 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
                >
                  Work With Me
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
