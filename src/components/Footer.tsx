import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm tracking-[0.3em] uppercase text-white mb-4">
              The Chungaimna
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Visual artist &amp; cultural practitioner
              <br />
              Based in North Nigeria
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {["Portfolio", "Services", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-neutral-500 text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">
              Connect
            </h4>
            <a
              href="mailto:hello@thechungaimna.com"
              className="text-neutral-500 text-sm hover:text-white transition-colors"
            >
              hello@thechungaimna.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-neutral-600 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} The Chungaimna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
