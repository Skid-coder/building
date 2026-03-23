import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, getPortfolioItem } from "@/data/portfolio";
import type { Metadata } from "next";
import ProjectClient from "./ProjectClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = getPortfolioItem(id);
  if (!item) return { title: "Project Not Found" };
  return {
    title: `${item.title} — The Chungaimna`,
    description: item.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const item = getPortfolioItem(id);
  if (!item) notFound();

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-neutral-500 text-xs tracking-widest uppercase hover:text-white transition-colors mb-12"
        >
          <span>&larr;</span> Back to Portfolio
        </Link>

        <ProjectClient item={item} />

        {/* Media gallery */}
        <div className="space-y-8">
          {item.media.map((media, i) => (
            <div key={i} className="relative">
              {media.type === "image" ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <Image
                    src={media.src}
                    alt={media.alt || item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    priority={i === 0}
                  />
                </div>
              ) : (
                <video
                  src={media.src}
                  controls
                  className="w-full aspect-video bg-neutral-900"
                  poster={item.coverImage}
                />
              )}
              {media.caption && (
                <p className="text-neutral-500 text-sm mt-3 text-center italic">
                  {media.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="mt-16 max-w-2xl mx-auto">
          <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
            {item.description}
          </p>

          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-wider uppercase text-neutral-500 border border-white/10 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
