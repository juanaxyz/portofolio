import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { owner } from "../../data/owner";
import { useTypewriter } from "../../hooks/useTypewriter";

const headlineWords = [
  { text: "Curious", highlight: false },
  { text: "by", highlight: false },
  { text: "nature.", highlight: false },
  { text: "Builder", highlight: false },
  { text: "by", highlight: false },
  { text: "habit.", highlight: true },
];

const terminalLines = [
  { prefix: "> whoami", text: "", delay: 200, charSpeed: 1 },
  { prefix: `  ${owner.name.toLowerCase()} — tech explorer`, text: "", delay: 300, charSpeed: 35 },
  { prefix: "> skills --list", text: "", delay: 500, charSpeed: 1 },
  { prefix: "  web · automation · ml · iot", text: "", delay: 300, charSpeed: 30 },
  { prefix: "> current_status", text: "", delay: 400, charSpeed: 1 },
  { prefix: "  available for collab & internship", text: "", delay: 300, charSpeed: 30 },
  { prefix: "> last_build", text: "", delay: 400, charSpeed: 1 },
  { prefix: "  SmartDesk v0.2 — 2 days ago", text: "", delay: 300, charSpeed: 30 },
];

const staggerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" },
  }),
};

export function Hero() {
  const { displayed, done } = useTypewriter(terminalLines);
  const sectionRef = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    sectionRef.current?.style.setProperty("--mx", `${x}%`);
    sectionRef.current?.style.setProperty("--my", `${y}%`);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="relative grid min-h-screen grid-cols-1 items-center gap-12 overflow-hidden px-6 pt-20 md:grid-cols-[3fr_2fr] md:px-12"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          background: `radial-gradient(circle 180px at var(--mx, 50%) var(--my, 50%), #6798ff, transparent)`,
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow label={`TEKNIK INFORMATIKA \u00B7 UDAYANA \u00B7 2024`} />
        </motion.div>

        <h1 className="mb-4 max-w-[680px] text-display font-medium leading-[1.13] tracking-[-2.3px] text-bone">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word.text}
              custom={i}
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              className={`inline-block ${word.highlight ? "text-soft-indigo" : ""}`}
              style={{ marginRight: "0.22em" }}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-8 max-w-[480px] text-body leading-relaxed text-ash"
        >
          {owner.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex gap-3"
        >
          <Button variant="filled" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            Lihat Project
          </Button>
          <Button variant="ghost" onClick={() => document.getElementById("jarvis")?.scrollIntoView({ behavior: "smooth" })}>
            Ngobrol sama JARVIS
          </Button>
        </motion.div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="rounded-lg border border-iron bg-graphite p-6 font-jetbrains-mono text-body-sm"
        >
          {displayed.map((line, i) => {
            const isCommand = line.startsWith(">");
            return (
              <p key={i} className={i > 0 ? "mt-2" : ""}>
                {isCommand ? (
                  <span className="text-soft-indigo">{line}</span>
                ) : (
                  <>
                    <span className="text-soft-indigo">&gt;</span>
                    <span className="text-ash">{line.slice(1)}</span>
                  </>
                )}
              </p>
            );
          })}
          {done && (
            <p className="mt-2">
              <span className="text-soft-indigo">&gt; </span>
              <span className="inline-block h-4 w-2 animate-pulse bg-soft-indigo align-middle" />
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
