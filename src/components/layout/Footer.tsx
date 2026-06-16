const footerNav = [
  { label: "Hero", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-iron">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="mb-2 font-jetbrains-mono text-caption uppercase text-ash">
              Budi Santoso
            </p>
            <p className="text-body-sm text-ash">Tech Explorer</p>
            <p className="text-body-sm text-ash">Curious by nature. Builder by habit.</p>
          </div>

          <div>
            <p className="mb-3 font-jetbrains-mono text-caption uppercase text-ash">
              Navigasi
            </p>
            <div className="flex flex-col gap-2">
              {footerNav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body-sm text-bone transition-colors hover:text-soft-indigo"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 font-jetbrains-mono text-caption uppercase text-ash">
              Ask JARVIS
            </p>
            <p className="mb-3 text-body-sm text-ash">
              Punya pertanyaan sebelum kontak?
            </p>
            <a
              href="#jarvis"
              className="inline-flex items-center gap-1 text-body-sm font-medium text-bone transition-colors hover:text-soft-indigo"
            >
              Mulai Chat &rarr;
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-iron pt-6 text-center text-body-sm text-smoke">
          &copy; 2025 Budi Santoso &middot; TI Udayana &middot; Made with curiosity
        </div>
      </div>
    </footer>
  );
}
