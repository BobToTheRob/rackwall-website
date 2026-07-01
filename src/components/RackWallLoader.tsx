/* Ported verbatim from apps/web/src/components/RackWallLoader.tsx in filament-manager.
   Self-contained: no app imports. showWordmark is unused here (hero wordmark is
   rendered separately in App.tsx using Inter 600). */

interface RackWallLoaderProps {
  variant?: "blink" | "wave";
  size?: "xs" | "sm" | "md";
  showWordmark?: boolean;
}

const SIZE = {
  xs: { tile: 10, gap: 3, radius: 3, font: 16, wordGap: 10, letterSpacing: -0.6 },
  sm: { tile: 16, gap: 4, radius: 4, font: 24, wordGap: 16, letterSpacing: -0.9 },
  md: { tile: 26, gap: 7, radius: 6, font: 40, wordGap: 30, letterSpacing: -1.6 },
};

// Blink: each tile has a desynced duration + negative delay for pseudo-random twinkle.
const BLINK_TIMING = [
  { dur: "2.6s", del: "-.8s" },
  { dur: "3.8s", del: "-2.2s" },
  { dur: "2.2s", del: "-.4s" },
  { dur: "3.4s", del: "-1.8s" },
  { dur: "2.8s", del: "-3.2s" },
  { dur: "4.2s", del: "-1.2s" },
  { dur: "2.4s", del: "-2.6s" },
  { dur: "3.6s", del: "-.2s" },
  { dur: "3s",   del: "-4s" },
];

// Wave: diagonal delays (row+col index / 4 * 0.24s).
const WAVE_DELAYS = ["0s", ".24s", ".48s", ".24s", ".48s", ".72s", ".48s", ".72s", ".96s"];

const GRADIENT = "linear-gradient(135deg, #B18CFF, #7C5CFF 55%, #5838E8)";

function RackWallLoader({
  variant = "blink",
  size = "sm",
  showWordmark = false,
}: RackWallLoaderProps) {
  const s = SIZE[size];
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(3, ${s.tile}px)`,
    gridTemplateRows: `repeat(3, ${s.tile}px)`,
    gap: s.gap,
  };

  return (
    <>
      <style>{`
        @keyframes rwBlink {
          0%, 100% { opacity: .16; }
          50%       { opacity: 1; }
        }
        @keyframes rwTilePulse {
          0%, 100% { opacity: .18; transform: scale(.82); }
          45%      { opacity: 1;  transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .rwbl-tile { animation: none !important; opacity: .85 !important; }
        }
      `}</style>

      <div
        role="status"
        aria-label="Loading"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: s.wordGap,
        }}
      >
        <div style={gridStyle} aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => {
            const tileStyle: React.CSSProperties =
              variant === "blink"
                ? {
                    borderRadius: s.radius,
                    background: GRADIENT,
                    animationName: "rwBlink",
                    animationDuration: BLINK_TIMING[i].dur,
                    animationDelay: BLINK_TIMING[i].del,
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                  }
                : {
                    borderRadius: s.radius,
                    background: GRADIENT,
                    animationName: "rwTilePulse",
                    animationDuration: "3s",
                    animationDelay: WAVE_DELAYS[i],
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                  };
            return <div key={i} className="rwbl-tile" style={tileStyle} />;
          })}
        </div>

        {showWordmark && (
          <div
            aria-hidden="true"
            style={{
              font: `800 ${s.font}px/1 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, sans-serif`,
              letterSpacing: s.letterSpacing,
            }}
          >
            <span style={{ color: "#F7F7FB" }}>Rack</span>
            <span
              style={{
                background: GRADIENT,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Wall
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export { RackWallLoader };
export default RackWallLoader;
