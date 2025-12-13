type StatProps = {
  label: string
  value?: number | string
  hint?: string
}

export function Stat({ label, value, hint }: StatProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6">
      <div className="text-2xl font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
        {value ?? <StatSkeleton />}
      </div>

      <div className="mt-1 text-xs uppercase tracking-wide text-zinc-500">
        {label}
      </div>

      {hint && (
        <div className="mt-1 text-[11px] text-zinc-400">
          {hint}
        </div>
      )}
    </div>
  );
}

function StatSkeleton() {
  return (
    <div className="h-6 w-10 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
  );
}
