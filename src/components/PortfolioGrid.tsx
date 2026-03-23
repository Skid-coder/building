"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PortfolioItem } from "@/lib/types";
import { getAllCategories } from "@/data/portfolio";
import FadeIn from "./FadeIn";

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const categoryLabels: Record<string, string> = {
  all: "All",
  photography: "Photography",
  videography: "Videography",
  "creative-direction": "Creative Direction",
  events: "Events",
};

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = getAllCategories();

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
              activeCategory === cat
                ? "border-white text-white bg-white/5"
                : "border-white/10 text-neutral-500 hover:text-white hover:border-white/30"
            }`}
          >
            {categoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <FadeIn delay={i * 0.05}>
                <Link href={`/projects/${item.id}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end">
                      <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-xs tracking-[0.2em] uppercase text-neutral-300 mb-1">
                          {categoryLabels[item.category] || item.category}
                        </p>
                        <h3 className="text-lg font-light text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
