export interface PortfolioItem {
  id: string;
  title: string;
  category: "photography" | "videography" | "creative-direction" | "events";
  coverImage: string;
  media: MediaItem[];
  description: string;
  date?: string;
  location?: string;
  tags?: string[];
}

export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  startingPrice: string;
}
