import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Mail } from "lucide-react";
import { owner } from "../../data/owner";

function GitHubIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-soft-indigo" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-soft-indigo" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contacts = [
  {
    icon: GitHubIcon,
    label: "GitHub",
    caption: "Lihat 8+ project & kode lengkap",
    href: owner.github,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    caption: "2 tahun shipping & learning",
    href: owner.linkedin,
  },
  {
    icon: Mail,
    label: "Email",
    caption: owner.email,
    href: `mailto:${owner.email}`,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <SectionEyebrow label="KONTAK" />

          <h2 className="mb-4 text-heading-lg font-medium leading-tight tracking-[-0.84px] text-bone">
            Mau ngobrol, kolaborasi,
            <br />
            atau rekrut?
          </h2>

          <p className="max-w-[400px] text-body leading-relaxed text-ash">
            Aku terbuka untuk project freelance, internship, atau sekedar diskusi
            tech. JARVIS juga bisa jadi perantara kalau mau ngobrol dulu.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-iron bg-graphite px-5 py-4 transition-colors duration-200 hover:border-soft-indigo"
              >
                <Icon className="h-6 w-6 shrink-0 text-soft-indigo" strokeWidth={1.5} />
                <div className="flex-1 text-left">
                  <p className="text-body font-medium text-bone">{contact.label}</p>
                  <p className="text-body-sm font-medium text-ash group-hover:text-soft-indigo/80">{contact.caption}</p>
                </div>
                <span className="text-body-sm text-ash transition-colors group-hover:text-soft-indigo">
                  &rarr;
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
