import { PortfolioItem } from "@/lib/types";

/**
 * ============================================================
 * PORTFOLIO DATA FILE
 * ============================================================
 *
 * HOW TO ADD A NEW PROJECT:
 *
 * 1. Add your image(s) to the /public/images/ folder
 * 2. Copy the template below and add it to the `portfolioItems` array
 * 3. Fill in the details — the site will automatically update
 *
 * TEMPLATE:
 * {
 *   id: "unique-slug",            // URL-safe slug (used in /projects/[id])
 *   title: "Project Title",
 *   category: "photography",      // "photography" | "videography" | "creative-direction" | "events"
 *   coverImage: "/images/your-cover.jpg",
 *   media: [
 *     { type: "image", src: "/images/your-image.jpg", alt: "Description", caption: "Optional caption" },
 *     { type: "video", src: "/videos/your-video.mp4" },
 *   ],
 *   description: "The story behind this project...",
 *   date: "2024",
 *   location: "Kaduna, Nigeria",
 *   tags: ["portrait", "culture"],
 * },
 *
 * ============================================================
 */

export const portfolioItems: PortfolioItem[] = [
  {
    id: "northern-lights-portraits",
    title: "Northern Lights — Portraits",
    category: "photography",
    coverImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80",
        alt: "Portrait in golden light",
        caption: "Golden hour portrait session in Kaduna",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
        alt: "Studio portrait",
        caption: "Studio session — natural beauty",
      },
    ],
    description:
      "A series exploring identity and beauty in Northern Nigeria. Each portrait captures the quiet dignity and vibrant spirit of the subjects, using natural light and minimal direction to reveal authentic moments.",
    date: "2024",
    location: "Kaduna, Nigeria",
    tags: ["portrait", "culture", "identity"],
  },
  {
    id: "the-durbar-festival",
    title: "The Durbar Festival",
    category: "events",
    coverImage: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&q=80",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=1200&q=80",
        alt: "Durbar celebration",
        caption: "The grand procession",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1590845947376-2638caa89309?w=1200&q=80",
        alt: "Cultural celebration",
        caption: "Traditional horsemen in formation",
      },
    ],
    description:
      "Documenting the spectacular Durbar festival — a centuries-old celebration of horsemanship, music, and culture. This project captures the grandeur and spiritual energy of one of Northern Nigeria's most important cultural events.",
    date: "2024",
    location: "Kano, Nigeria",
    tags: ["events", "culture", "tradition"],
  },
  {
    id: "streets-of-zaria",
    title: "Streets of Zaria",
    category: "photography",
    coverImage: "https://images.unsplash.com/photo-1590070838694-52c1e9ab4a68?w=800&q=80",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1590070838694-52c1e9ab4a68?w=1200&q=80",
        alt: "Street scene",
        caption: "Morning light on the old city walls",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
        alt: "Market scene",
        caption: "The central market at dawn",
      },
    ],
    description:
      "A street photography series capturing everyday life in Zaria's ancient quarters. The winding alleys, vibrant markets, and quiet moments between strangers tell the story of a city that moves at its own pace.",
    date: "2023",
    location: "Zaria, Nigeria",
    tags: ["street", "documentary", "urban"],
  },
  {
    id: "movement-film",
    title: "Movement — Short Film",
    category: "videography",
    coverImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
        alt: "Film still",
        caption: "Behind the scenes",
      },
    ],
    description:
      "A short film exploring the rhythm of daily life through dance and movement. Shot over three weeks across multiple locations, the film blends documentary realism with choreographed sequences to celebrate the human body in motion.",
    date: "2023",
    location: "Abuja, Nigeria",
    tags: ["film", "dance", "movement"],
  },
  {
    id: "woven-threads",
    title: "Woven Threads",
    category: "creative-direction",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
        alt: "Fashion editorial",
        caption: "Textile meets modern design",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
        alt: "Creative direction",
        caption: "Bridging tradition and contemporary fashion",
      },
    ],
    description:
      "Creative direction for a fashion editorial celebrating Nigerian textile traditions. Working with local weavers and contemporary designers, this project bridges heritage craftsmanship with modern aesthetics.",
    date: "2024",
    location: "Lagos, Nigeria",
    tags: ["fashion", "editorial", "textiles"],
  },
  {
    id: "quiet-moments",
    title: "Quiet Moments",
    category: "photography",
    coverImage: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&q=80",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200&q=80",
        alt: "Quiet contemplation",
        caption: "Finding stillness in the everyday",
      },
    ],
    description:
      "An intimate series capturing moments of solitude and contemplation. These images find beauty in stillness — the pause between actions, the breath before words, the quiet that holds everything together.",
    date: "2023",
    location: "Kaduna, Nigeria",
    tags: ["portrait", "intimate", "contemplation"],
  },
];

// Helper functions for filtering and finding items
export function getPortfolioItem(id: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.id === id);
}

export function getPortfolioByCategory(category: string): PortfolioItem[] {
  if (category === "all") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
}

export function getAllCategories(): string[] {
  const categories = new Set(portfolioItems.map((item) => item.category));
  return ["all", ...Array.from(categories)];
}
