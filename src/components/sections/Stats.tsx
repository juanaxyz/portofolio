import { Hexagon, ArrowUpRight, HelpCircle } from "lucide-react";

const stats = [
  {
    icon: Hexagon,
    value: "4",
    label: "domain dijelajahi",
    caption: "Web, Python, ML, dan IoT — karena kenapa harus pilih satu?",
  },
  {
    icon: ArrowUpRight,
    value: "dari nol",
    label: "semua project",
    caption: "Tidak ada yang dimulai dari template.",
  },
  {
    icon: HelpCircle,
    value: "1",
    label: "rule",
    caption: "Kalau belum pernah coba, itu alasan untuk mulai.",
  },
];

export function Stats() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-8 text-center md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label}>
              <Icon className="mx-auto mb-2 h-6 w-6 text-soft-indigo" strokeWidth={1.5} />
              <p className="text-display-sm font-medium leading-[1.14] tracking-[-1.74px] text-bone">
                {stat.value}
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
