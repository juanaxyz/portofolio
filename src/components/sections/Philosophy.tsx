import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Card } from "../ui/Card";
import { HelpCircle, Zap, Settings } from "lucide-react";

const philosophies = [
  {
    icon: HelpCircle,
    title: "Mulai dari pertanyaan",
    description:
      "Setiap project lahir dari rasa penasaran, bukan dari keinginan nambah portofolio.",
  },
  {
    icon: Zap,
    title: "Coba dulu",
    description: "Dokumentasi bisa belakangan. Yang penting jalan dulu, paham dulu.",
  },
  {
    icon: Settings,
    title: "Otomasi segalanya",
    description:
      "Kalau sesuatu bisa dikerjakan kode, itu bukan males — itu efisien.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[960px] text-center">
        <SectionEyebrow label="PHILOSOPHY" />

        <h2 className="mb-12 text-heading-lg font-medium leading-tight tracking-[-0.84px] text-bone">
          Aku belajar dengan doing,
          <br />
          bukan dengan reading.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {philosophies.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="text-left">
                <Icon className="mb-3 h-6 w-6 text-soft-indigo" strokeWidth={1.5} />
                <h3 className="mb-2 text-heading-sm font-medium text-bone">
                  {item.title}
                </h3>
                <p className="text-body-sm leading-relaxed text-ash">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
