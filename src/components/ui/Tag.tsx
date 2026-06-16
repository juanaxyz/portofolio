interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function Tag({ label, active = false, onClick }: TagProps) {
  return (
    <span
      onClick={onClick}
      className={`inline-block px-2 py-1 text-caption font-jetbrains-mono uppercase rounded-[--radius-md] cursor-pointer select-none transition-colors duration-200 ${
        active
          ? "border border-soft-indigo text-soft-indigo"
          : "border border-slate-edge text-ash hover:border-smoke"
      }`}
    >
      {label}
    </span>
  );
}
