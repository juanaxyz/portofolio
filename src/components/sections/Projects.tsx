import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Tag } from "../ui/Tag";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { projects } from "../../data/projects";

const allDomains = ["Semua", "Web", "Automation", "ML", "IoT"];

export function Projects() {
  const [activeDomain, setActiveDomain] = useState("Semua");

  const filtered =
    activeDomain === "Semua"
      ? projects
      : projects.filter((p) => p.domains.includes(activeDomain));

  return (
    <section id="projects" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionEyebrow label="PROJECTS" />

        <h2 className="mb-8 text-heading-lg font-medium leading-tight tracking-[-0.84px] text-bone">
          Hal-hal yang pernah dibuat
        </h2>

        <div className="mb-8 flex flex-wrap gap-2">
          {allDomains.map((domain) => (
            <Tag
              key={domain}
              label={domain}
              active={activeDomain === domain}
              onClick={() => setActiveDomain(domain)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="flex h-full flex-col">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 w-full rounded-lg"
                    loading="lazy"
                  />

                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.domains.map((d) => (
                      <Tag key={d} label={d} active />
                    ))}
                  </div>

                  <h3 className="mb-2 text-heading-sm font-medium text-bone">
                    {project.title}
                  </h3>

                  <p className="mb-3 flex-1 text-body-sm leading-relaxed text-ash">
                    {project.tagline}
                  </p>

                  <p className="mb-4 font-jetbrains-mono text-caption text-ash">
                    {project.stack.join(" · ")}
                  </p>

                  <div className="mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.github ?? undefined, "_blank")}
                    >
                      Lihat Detail &rarr;
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
