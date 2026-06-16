interface SectionEyebrowProps {
  label: string;
}

export function SectionEyebrow({ label }: SectionEyebrowProps) {
  return (
    <p className="font-jetbrains-mono text-caption uppercase tracking-[0.85px] text-ash mb-6">
      {label}
    </p>
  );
}
