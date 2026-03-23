"use client";

import { motion } from "framer-motion";
import { PortfolioItem } from "@/lib/types";

interface Props {
  item: PortfolioItem;
}

const categoryLabels: Record<string, string> = {
  photography: "Photography",
  videography: "Videography",
  "creative-direction": "Creative Direction",
  events: "Events",
};

export default function ProjectClient({ item }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex flex-wrap items-center gap-4 text-xs tracking-widest uppercase text-neutral-500 mb-4">
        <span>{categoryLabels[item.category] || item.category}</span>
        {item.date && (
          <>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
            <span>{item.date}</span>
          </>
        )}
        {item.location && (
          <>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
            <span>{item.location}</span>
          </>
        )}
      </div>
      <h1 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-6">
        {item.title}
      </h1>
      <div className="w-12 h-px bg-white/20 mb-12" />
    </motion.div>
  );
}
