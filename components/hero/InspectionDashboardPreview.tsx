export function InspectionDashboardPreview() {
  return (
    <div
      className="relative mx-auto w-full max-w-4xl"
      aria-hidden="true"
      role="presentation"
    >
      <div className="pointer-events-none absolute inset-x-8 -top-8 h-24 rounded-full bg-rl-accent-secondary/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-rl-border bg-rl-surface/90 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.65)] backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-rl-border px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="mx-auto hidden h-7 w-48 rounded-md bg-white/[0.04] sm:block" />
        </div>

        <div className="grid min-h-[320px] grid-cols-12 lg:min-h-[360px]">
          <aside className="col-span-3 hidden border-r border-rl-border bg-black/10 p-4 sm:block">
            <div className="mb-6 h-4 w-24 rounded bg-white/10" />
            <div className="space-y-2">
              {["Dashboard", "Inspections", "Properties", "Reports"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`rounded-md px-3 py-2 text-xs ${
                      index === 1
                        ? "bg-rl-accent-secondary/15 text-rl-text"
                        : "text-rl-text-muted"
                    }`}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </aside>

          <div className="col-span-12 p-4 sm:col-span-9 sm:p-5">
            <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                { label: "Completed", value: "128" },
                { label: "In Progress", value: "14" },
                { label: "Scheduled", value: "9" },
                { label: "Issues Found", value: "23" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-rl-border bg-white/[0.02] p-3"
                >
                  <p className="text-[11px] uppercase tracking-[0.06em] text-rl-text-muted">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-rl-text">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 lg:grid-cols-5">
              <div className="rounded-xl border border-rl-border bg-white/[0.02] p-3 lg:col-span-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-medium text-rl-text">
                    Recent Inspections
                  </p>
                  <p className="text-[11px] text-rl-text-muted">This week</p>
                </div>
                <div className="space-y-2">
                  {[
                    ["Oak Ridge Apartments", "Completed", "98%"],
                    ["Harbor View Tower", "In Review", "76%"],
                    ["Summit Office Park", "Scheduled", "—"],
                  ].map(([property, status, score]) => (
                    <div
                      key={property}
                      className="flex items-center justify-between rounded-lg border border-rl-border/70 px-3 py-2"
                    >
                      <div>
                        <p className="text-xs text-rl-text">{property}</p>
                        <p className="text-[11px] text-rl-text-muted">
                          {status}
                        </p>
                      </div>
                      <span className="text-xs text-rl-accent-secondary">
                        {score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-rl-border bg-white/[0.02] p-3 lg:col-span-2">
                <p className="mb-3 text-xs font-medium text-rl-text">
                  Documentation
                </p>
                <div className="space-y-2">
                  {[
                    "Move-in checklist.pdf",
                    "Unit 204 photos",
                    "Maintenance log",
                  ].map((doc) => (
                    <div
                      key={doc}
                      className="flex items-center gap-2 rounded-lg border border-rl-border/70 px-3 py-2"
                    >
                      <span className="h-2 w-2 rounded-sm bg-rl-accent-secondary/70" />
                      <span className="truncate text-[11px] text-rl-text-muted">
                        {doc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
