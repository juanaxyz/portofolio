import { Button } from "../ui/Button";

const navLinks = [
  { label: "Hero", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-carbon border-b border-iron">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="text-body font-medium text-bone">
          Budi Santoso
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-[--radius-navpills] px-3 py-1.5 text-body-sm font-medium text-bone transition-colors hover:text-soft-indigo"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="filled" size="sm">
            Contact
          </Button>
        </div>

        <button className="flex items-center gap-2 text-ash md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
