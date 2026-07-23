import { useEffect, useRef } from "react";

interface ScreenshotItem {
  key: string;
  caption: string;
  alt: string;
}

interface ScreenshotLightboxProps {
  items: ScreenshotItem[];
  openIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const FOCUSABLE_SELECTOR =
  'button, a[href], [tabindex]:not([tabindex="-1"])';

function ScreenshotLightbox({ items, openIndex, onClose, onNavigate }: ScreenshotLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<Element | null>(null);

  const item = items[openIndex];
  const captionId = `screenshot-lightbox-caption-${item.key}`;

  // Scroll lock + focus capture/restore.
  useEffect(() => {
    triggerElementRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (triggerElementRef.current instanceof HTMLElement) {
        triggerElementRef.current.focus();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Esc / arrow-key nav / focus trap.
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onNavigate((openIndex + 1) % items.length);
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onNavigate((openIndex - 1 + items.length) % items.length);
        return;
      }
      if (e.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openIndex, items.length, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-rw-app/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={captionId}
        className="relative flex max-h-full max-w-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="fixed right-4 z-10 flex size-10 items-center justify-center rounded-full border border-rw-border bg-rw-surface/90 text-rw-text transition-colors hover:border-rw-border-strong"
          style={{ top: "max(1rem, env(safe-area-inset-top))" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => onNavigate((openIndex - 1 + items.length) % items.length)}
              aria-label="Previous screenshot"
              className="fixed left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-rw-border bg-rw-surface/90 text-rw-text transition-colors hover:border-rw-border-strong sm:left-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => onNavigate((openIndex + 1) % items.length)}
              aria-label="Next screenshot"
              className="fixed right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-rw-border bg-rw-surface/90 text-rw-text transition-colors hover:border-rw-border-strong sm:right-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        <img
          src={`/screens/pages/${item.key}-2880.webp`}
          alt={item.alt}
          className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain"
        />
        <p id={captionId} className="mt-3 max-w-[95vw] text-center text-sm text-rw-text-2">
          {item.caption}
        </p>
      </div>
    </div>
  );
}

export default ScreenshotLightbox;
