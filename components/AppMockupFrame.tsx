import { cn } from "@/lib/utils";

type AppMockupFrameProps = {
  title: string;
  subtitle: string;
  rows: { label: string; value: string }[];
  className?: string;
};

export function AppMockupFrame({ title, subtitle, rows, className }: AppMockupFrameProps) {
  return (
    <div
      className={cn(
        "rounded-[30px] border border-white/70 bg-white/65 p-5 shadow-float backdrop-blur-premium",
        className
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-navy">{title}</p>
          <p className="text-xs text-text-secondary">{subtitle}</p>
        </div>
        <span className="rounded-full bg-sapphire/15 px-3 py-1 text-xs font-semibold text-sapphire">AI Live</span>
      </div>
      <div className="space-y-3">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-3 py-2"
          >
            <span className="text-xs text-text-secondary">{row.label}</span>
            <span className="text-sm font-semibold text-navy">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
