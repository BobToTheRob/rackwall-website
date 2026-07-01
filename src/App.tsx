import RackWallLoader from "./components/RackWallLoader";

const GITHUB_URL = "https://github.com/BobToTheRob/filament-manager";

/* ── Wordmark ───────────────────────────────────────────────────────────────
   "Rack" in near-white, "Wall" in brand purple. Inter 600, tight tracking.
   Both colors are brand identity constants (same exception as the app). */
function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontWeight: 600 }}
    >
      <span style={{ color: "#F3F4FA" }}>Rack</span>
      <span style={{ color: "#7C5CFF" }}>Wall</span>
    </span>
  );
}

/* ── Feature card icons (inline SVG, no dep) ───────────────────────────────*/
function IconSpool() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2a10 10 0 0 1 7.07 17.07"/>
    </svg>
  );
}
function IconCube() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  );
}
function IconPrinter() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9"/>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
      <rect x="6" y="14" width="12" height="8"/>
    </svg>
  );
}
function IconSparkle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.88 5.63L19 10l-5.12 1.37L12 17l-1.88-5.63L5 10l5.12-1.37z"/>
      <path d="M5 3l.94 2.81L8.5 7 5.94 7.69 5 10.5l-.94-2.81L1.5 7l2.56-.69z" opacity=".5"/>
      <path d="M19 14l.63 1.88L21.5 17l-1.87.63L19 19.5l-.63-1.87L16.5 17l1.87-.63z" opacity=".5"/>
    </svg>
  );
}

const FEATURES = [
  {
    icon: <IconSpool />,
    title: "Filament inventory",
    body: "PLACEHOLDER — track every spool: weight remaining, material, vendor, drying status, and cost.",
  },
  {
    icon: <IconCube />,
    title: "Model library",
    body: "PLACEHOLDER — organize your STL and 3MF files, tag them, and link filament to each model.",
  },
  {
    icon: <IconPrinter />,
    title: "Printer status",
    body: "PLACEHOLDER — live OctoPrint feeds, print history, and maintenance reminders in one place.",
  },
  {
    icon: <IconSparkle />,
    title: "AI assistant",
    body: "PLACEHOLDER — ask questions about your inventory, get filament recommendations, and more.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Clone the repo",
    body: "PLACEHOLDER — git clone and enter the project directory.",
    code: "git clone https://github.com/BobToTheRob/filament-manager",
  },
  {
    n: "2",
    title: "Configure",
    body: "PLACEHOLDER — copy the example env file and set your database credentials.",
    code: "cp .env.example .env",
  },
  {
    n: "3",
    title: "Run",
    body: "PLACEHOLDER — spin up the full stack with Docker Compose.",
    code: "docker compose up --build",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-rw-app text-rw-text">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 border-b border-rw-border bg-rw-app/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <Wordmark className="text-xl tracking-tight" />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-rw-border px-3 py-1.5 text-sm text-rw-text-2 transition-colors hover:border-rw-border-strong hover:text-rw-text"
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      {/* PLACEHOLDER: replace tagline and CTA copy with final marketing text */}
      <section className="flex flex-col items-center px-5 pb-24 pt-24 text-center">
        <RackWallLoader variant="wave" size="md" />

        <div className="mt-10 mb-1">
          <Wordmark
            className="text-[clamp(2.5rem,8vw,5rem)] tracking-[-0.04em] leading-none"
          />
        </div>

        <p className="mt-5 max-w-md text-lg text-rw-text-2 leading-relaxed">
          Your workshop, in view.{" "}
          <span className="text-rw-text-muted text-base">
            {/* PLACEHOLDER tagline — replace with final copy */}
            Self-hosted filament inventory and maker companion.
          </span>
        </p>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-rw-accent px-6 py-3 text-sm font-semibold text-rw-on-accent transition-opacity hover:opacity-90"
        >
          <GithubIcon />
          View on GitHub
        </a>
      </section>

      {/* ── Features ────────────────────────────────────────────────────── */}
      {/* PLACEHOLDER: replace card titles + body copy with final marketing text */}
      <section className="mx-auto max-w-5xl px-5 pb-24">
        <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-rw-text">
          {/* PLACEHOLDER section heading */}
          Everything your workshop needs
        </h2>
        {/* 4 cards: 2×2 on sm+, single column on mobile */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-rw-border bg-rw-card p-6 transition-colors hover:bg-rw-card-hover"
            >
              <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-rw-accent-soft text-rw-accent">
                {f.icon}
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-rw-text">{f.title}</h3>
              <p className="text-sm leading-relaxed text-rw-text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Getting started ─────────────────────────────────────────────── */}
      {/* PLACEHOLDER: replace step descriptions with final docs copy */}
      <section className="border-t border-rw-border bg-rw-surface px-5 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-3 text-center text-2xl font-semibold tracking-tight text-rw-text">
            {/* PLACEHOLDER heading */}
            Run it yourself
          </h2>
          <p className="mb-12 text-center text-sm text-rw-text-muted">
            {/* PLACEHOLDER subhead */}
            Self-hosted, open source, no accounts required.
          </p>

          <div className="flex flex-col gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="flex gap-5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-rw-accent-soft text-sm font-semibold text-rw-accent">
                  {step.n}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-sm font-semibold text-rw-text">{step.title}</h3>
                  <p className="mb-2.5 text-sm text-rw-text-muted">{step.body}</p>
                  <code className="block rounded-lg border border-rw-border bg-rw-surface-elevated px-4 py-2.5 font-mono text-xs text-rw-text-2 overflow-x-auto">
                    {step.code}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-rw-accent hover:underline"
            >
              Full docs →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      {/* PLACEHOLDER: update links + tagline once domain is live */}
      <footer className="border-t border-rw-border px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Wordmark className="text-base tracking-tight" />
          <p className="text-xs text-rw-text-faint">
            Self-hosted · open source {/* PLACEHOLDER — add license link */}
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-rw-text-muted transition-colors hover:text-rw-text"
          >
            <GithubIcon size={15} />
            BobToTheRob/filament-manager
          </a>
        </div>
      </footer>

    </div>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}
