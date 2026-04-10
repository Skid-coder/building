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
                src="/images/about-portrait.jpg"
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
                  I&apos;m truly glad you&apos;re here. I&apos;m a documentary photographer,
                  filmmaker, curator, and designer, driven by a passion for creating and
                  sharing meaningful stories. Whether through images, sound, or both, I
                  work across different media and proudly see myself as a visual or
                  audio-visual artist.
                </p>
                <p>
                  Based in Northern Nigeria, I focus on capturing and curating films and
                  photographs that reflect the rich narratives of Arewa. Alongside my
                  personal projects, which are close to my heart, I also produce
                  commissioned documentaries for NGOs and other organisations. Over the
                  years, I&apos;ve had the opportunity to collaborate with inspiring groups
                  such as YIAGA AFRICA, GOETHE-INSTITUT, KDSG, KSMC, ARC, ILMIHOUSE,
                  KAFARTS, GWG, and FWC.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs tracking-widest uppercase text-neutral-500 mb-2">
                    Based in
                  </p>
                  <p className="text-white text-sm">Northern Nigeria</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-neutral-500 mb-2">
                    Disciplines
                  </p>
                  <p className="text-white text-sm">
                    Documentary Photography, Filmmaking, Curation, Design
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
