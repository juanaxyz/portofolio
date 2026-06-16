import { Hexagon, ArrowUpRight, HelpCircle } from "lucide-react";
import { useCountUp } from "../../hooks/useCountUp";

const statItems = [
  {
    icon: Hexagon,
    value: 4,
    suffix: "",
    label: "domains explored",
    caption: "Web, Python, ML, IoT — no single-stack limitation",
  },
  {
    icon: ArrowUpRight,
    value: null,
    text: "zero-template",
    label: "built from scratch",
    caption: "Every project starts from curiosity, not boilerplate.",
  },
  {
    icon: HelpCircle,
    value: 1,
    suffix: "",
    label: "core rule",
    caption: "Build first, document later — working code beats perfect plans.",
  },
];

function StatNumber({ target }: { target: number }) {
  const { count, ref } = useCountUp(target);
  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-8 text-center md:grid-cols-3">
        {statItems.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label}>
              <Icon className="mx-auto mb-2 h-6 w-6 text-soft-indigo" strokeWidth={1.5} />
              <p className="text-display-sm font-medium leading-[1.14] tracking-[-1.74px] text-bone">
                {stat.text ??
                  (stat.value != null ? <StatNumber target={stat.value} /> : null)}
              </p>
              <p className="mb-1 text-body font-medium text-bone">
                {stat.label}
              </p>
              <p className="mx-auto max-w-[220px] text-body-sm leading-relaxed text-ash">
                {stat.caption}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
