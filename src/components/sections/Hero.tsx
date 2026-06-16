import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { owner } from "../../data/owner";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative grid min-h-screen grid-cols-1 items-center gap-12 overflow-hidden px-6 pt-20 md:grid-cols-[3fr_2fr] md:px-12"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      <div className="relative z-10">
        <SectionEyebrow label={`TEKNIK INFORMATIKA \u00B7 UDAYANA \u00B7 2024`} />

        <h1 className="mb-4 max-w-[680px] text-display font-medium leading-[1.13] tracking-[-2.3px] text-bone">
          Curious by nature.
          <br />
          Builder by habit.
        </h1>

        <p className="mb-8 max-w-[480px] text-body leading-relaxed text-ash">
          {owner.description}
        </p>

        <div className="flex gap-3">
          <Button variant="filled" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            Lihat Project
          </Button>
          <Button variant="ghost" onClick={() => document.getElementById("jarvis")?.scrollIntoView({ behavior: "smooth" })}>
            Ngobrol sama JARVIS
          </Button>
        </div>
      </div>

      <div className="relative z-10">
        <div className="rounded-lg border border-iron bg-graphite p-6 font-jetbrains-mono text-body-sm text-ash">
          <p>
            <span className="text-soft-indigo">&gt; whoami</span>
            <br />
            &nbsp;&nbsp;{owner.name.toLowerCase()} &mdash; tech explorer
          </p>
          <p className="mt-2">
            <span className="text-soft-indigo">&gt; skills --list</span>
            <br />
            &nbsp;&nbsp;web &middot; automation &middot; ml &middot; iot
          </p>
          <p className="mt-2">
            <span className="text-soft-indigo">&gt; current_status</span>
            <br />
            &nbsp;&nbsp;available for collab &amp; internship
          </p>
          <p className="mt-2">
            <span className="text-soft-indigo">&gt; last_build</span>
            <br />
            &nbsp;&nbsp;SmartDesk v0.2 &mdash; 2 days ago
            <br />
            &nbsp;&nbsp;<span className="inline-block h-4 w-2 animate-pulse bg-soft-indigo align-middle" />
          </p>
        </div>
      </div>
    </section>
  );
}
