import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <FadeIn className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-neutral-400 text-sm tracking-widest uppercase">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-px bg-white/20 mx-auto mt-6" />
    </FadeIn>
  );
}
