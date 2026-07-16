import navLogo from "./assets/rackwall-logo-horizontal-dark.svg";
import footerMark from "./assets/rackwall-logo-mark-dark.svg";

const GITHUB_URL = "https://github.com/BobToTheRob/rackwall";
const DEMO_URL = "https://demo.rackwall.org";
const README_URL = `${GITHUB_URL}#readme`;
const LICENSE_URL = `${GITHUB_URL}/blob/main/LICENSE`;
const ROADMAP_URL = `${GITHUB_URL}/blob/main/ROADMAP.md`;
const DOCKER_INSTALL_URL = "https://docs.docker.com/get-started/get-docker/";

/* ── Hero wordmark — LIVE TEXT, not baked into the hero render.
   "Rack" near-white, "Wall" brand purple. Inter 600, tight tracking.
   Both colors are brand identity constants (same exception as the app). */
function HeroWordmark({ className = "" }: { className?: string }) {
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

/* ── Feature icons (inline SVG, no dep) ─────────────────────────────────── */
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
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
function IconMinus() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  );
}
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

const FEATURES = [
  {
    icon: <IconSpool />,
    title: "Filament inventory",
    body: "Vendors, filaments, and physical spools. Gram-native tracking — grams are the stored truth, percentages are derived. Cost tracking, drying status, multi-color support, archive/restore.",
  },
  {
    icon: <IconCube />,
    title: "Model library",
    body: "STL/3MF/GCODE files, photos, tags, source links, and print history for every model.",
  },
  {
    icon: <IconPrinter />,
    title: "Printer status",
    body: "Live OctoPrint integration: state, progress, temps, camera, maintenance log, and print history — with automatic filament deduction on completed prints.",
  },
  {
    icon: <IconSparkle />,
    title: "AI assistant",
    body: "Bring your own Anthropic API key and ask questions about your workshop. The key never leaves your server.",
  },
];

const SCREENSHOTS = [
  { label: "Overview" },
  { label: "Filament inventory" },
  { label: "Model detail" },
  { label: "Settings" },
];

const STATUS_SOLID = [
  "Real test suite (114 tests) — correctness math, the deduction engine, migrations, schema round-trips, the auth seam",
  "Single-user authentication — session login + API tokens for machine clients",
  "Uploaded photos gated behind the same login as everything else",
  "No secrets round-trip to the browser — API keys stay server-side",
];

const STATUS_NOT_YET = [
  "No rate limiting on login",
  "No 2FA — password only",
  "Plain HTTP by default (session cookies aren't Secure unless you front it with TLS)",
  "Sessions are in-memory — a restart logs everyone out",
  "API tokens don't expire (revoking is the lifecycle control)",
];

export default function App() {
  return (
    <div className="min-h-screen bg-rw-app text-rw-text">

      {/* ── Nav — baked SVG lockup (correct for small nav use) ───────────── */}
      <header className="sticky top-0 z-10 border-b border-rw-border bg-rw-app/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <img src={navLogo} alt="RackWall" className="h-6 w-auto" />
          <div className="flex items-center gap-2">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-1.5 text-sm text-rw-text-2 transition-colors hover:text-rw-text"
            >
              Try the demo
            </a>
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
        </div>
      </header>

      {/* ── Hero — WebHero2.png background, live-text wordmark overlay ───── */}
      <section className="relative flex flex-col items-center overflow-hidden px-5 pb-20 pt-16 text-center">
        <img
          src="/hero/WebHero2.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        {/* Fade to bg color at the edges so the render blends into the page */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, transparent, var(--rw-bg-app) 100%)",
          }}
        />

        <div className="mt-[22vw] max-w-[90vw] sm:mt-64">
          <HeroWordmark className="text-[clamp(2.75rem,9vw,5.5rem)] leading-none tracking-[-0.025em]" />
        </div>

        {/* Tagline is an open question — plain, honest placeholder, not final marketing copy */}
        <p className="mt-5 max-w-md text-lg leading-relaxed text-rw-text-2">
          Self-hosted 3D-printing workshop manager.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-rw-accent px-6 py-3 text-sm font-semibold text-rw-on-accent transition-opacity hover:opacity-90"
          >
            Try the live demo
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-rw-border px-6 py-3 text-sm font-semibold text-rw-text transition-colors hover:border-rw-border-strong"
          >
            <GithubIcon />
            View on GitHub
          </a>
        </div>
      </section>

      {/* ── Install — OctoPrint-style, the centerpiece ───────────────────── */}
      <section id="install" className="border-t border-rw-border bg-rw-surface px-5 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center text-2xl font-semibold tracking-tight text-rw-text">
            Run it yourself
          </h2>
          <p className="mb-10 text-center text-sm text-rw-text-muted">
            Self-hosted, open source, $0 hosting. Build, migrate, and a healthy stack in under
            two minutes on a cold machine.
          </p>

          <div className="mb-8 rounded-xl border border-rw-border bg-rw-card p-5">
            <h3 className="mb-2.5 text-sm font-semibold text-rw-text">Requirements</h3>
            <ul className="space-y-1.5 text-sm text-rw-text-2">
              <li>
                <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" className="text-rw-accent hover:underline">
                  Git
                </a>
              </li>
              <li>
                <strong className="font-medium text-rw-text">Docker.</strong> On Windows:
                Docker Desktop with the WSL 2 backend (the installer default). This may require
                enabling virtualization in your BIOS and a restart — if the installer says
                "Virtualization support not detected," that's what it means.{" "}
                <a href={DOCKER_INSTALL_URL} target="_blank" rel="noopener noreferrer" className="text-rw-accent hover:underline">
                  Docker's install docs
                </a>
                .
              </li>
            </ul>
          </div>

          <pre className="mb-6 overflow-x-auto rounded-xl border border-rw-border bg-rw-surface-elevated p-5 font-mono text-sm leading-relaxed text-rw-text-2">
{`git clone https://github.com/BobToTheRob/rackwall.git
cd rackwall
docker compose -f infra/docker-compose.yml up --build`}
          </pre>

          <p className="mb-6 text-sm leading-relaxed text-rw-text-2">
            Then open <code className="rounded bg-rw-surface-elevated px-1.5 py-0.5 text-rw-text">http://&lt;host-ip&gt;:8080</code>{" "}
            from any device on your LAN and create your password — first launch shows a
            "create your password" screen, there is no default password.
          </p>

          <div className="space-y-3">
            <div className="rounded-lg border border-rw-border-strong bg-rw-warning-soft p-4 text-sm leading-relaxed text-rw-text-2">
              <strong className="font-semibold text-rw-text">Set <code className="rounded bg-rw-surface-elevated px-1 py-0.5">SESSION_SECRET</code> for anything beyond a quick trial.</strong>{" "}
              Without it, a random secret is generated on every container start and every
              restart logs you out. See the README's Configuration section.
            </div>

            <div className="rounded-lg border border-rw-border bg-rw-surface-elevated p-4 text-sm leading-relaxed text-rw-text-2">
              A fresh install starts <strong className="font-medium text-rw-text">completely empty</strong> —
              no seeded spools, no sample data. To load a demo dataset to click around:
              <pre className="mt-2.5 overflow-x-auto rounded-lg bg-rw-app px-3.5 py-2.5 font-mono text-xs text-rw-text-2">
{`docker compose -f infra/docker-compose.yml exec api pnpm --filter @filament/db seed:demo`}
              </pre>
              Idempotent — safe to run again later. Or just use the{" "}
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-rw-accent hover:underline">
                live demo
              </a>{" "}
              — no install needed.
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={README_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-rw-accent hover:underline"
            >
              Full README — configuration, local dev, security model →
            </a>
          </div>
        </div>
      </section>

      {/* ── What it does ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-rw-text">
          What it does
        </h2>
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

      {/* ── Screenshots ───────────────────────────────────────────────────── */}
      {/* PLACEHOLDER: swap each slot for a real screenshot when available */}
      <section className="border-t border-rw-border bg-rw-surface px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-rw-text">
            See it in action
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SCREENSHOTS.map((s) => (
              <div
                key={s.label}
                className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-rw-border bg-rw-card"
              >
                <span className="text-sm text-rw-text-faint">
                  {/* PLACEHOLDER */}
                  {s.label} screenshot — coming soon
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-rw-text-muted">
            Or skip straight to the{" "}
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-rw-accent hover:underline">
              live demo
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Honest status ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rw-warning-soft bg-rw-warning-soft px-3 py-1 text-xs font-medium text-rw-warning">
            Actively developed · pre-1.0
          </span>
        </div>
        <h2 className="mb-3 text-center text-2xl font-semibold tracking-tight text-rw-text">
          Honest status
        </h2>
        <p className="mb-10 text-center text-sm leading-relaxed text-rw-text-muted">
          RackWall is designed for a trusted LAN, single user, behind your own firewall. It is{" "}
          <strong className="font-medium text-rw-text-2">not yet hardened for public internet exposure</strong> —
          don't port-forward it to the open internet.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-rw-success">What's real</h3>
            <ul className="space-y-2.5">
              {STATUS_SOLID.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-rw-text-2">
                  <span className="mt-0.5 shrink-0 text-rw-success"><IconCheck /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-rw-text-muted">Not hardened yet</h3>
            <ul className="space-y-2.5">
              {STATUS_NOT_YET.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-rw-text-2">
                  <span className="mt-0.5 shrink-0 text-rw-text-faint"><IconMinus /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-rw-text-muted">
          Full threat model in{" "}
          <a href={`${GITHUB_URL}/blob/main/SECURITY.md`} target="_blank" rel="noopener noreferrer" className="text-rw-accent hover:underline">
            SECURITY.md
          </a>
          . AGPL-3.0 licensed — the same license OctoPrint uses.
        </p>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-rw-border px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <img src={footerMark} alt="RackWall" className="h-7 w-auto" />
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-rw-text-muted">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-rw-text">
              Live demo
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-rw-text">
              <GithubIcon size={14} />
              GitHub
            </a>
            <a href={LICENSE_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-rw-text">
              AGPL-3.0
            </a>
            <a href={ROADMAP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-rw-text">
              Roadmap
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
