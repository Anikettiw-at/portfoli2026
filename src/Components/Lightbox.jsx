import { useEffect } from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [image, onClose]);

  if (!image) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex animate-fade-up cursor-zoom-out flex-col items-center justify-center gap-4 bg-black/90 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        autoFocus
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-2xl text-white transition hover:bg-white/20"
      >
        <HiX />
      </button>
      <img
        src={image.src}
        alt={image.caption}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[95vw] cursor-default rounded-lg bg-white object-contain"
      />
      {image.caption && (
        <p className="max-w-3xl text-center text-sm text-zinc-300">{image.caption}</p>
      )}
    </div>,
    document.body
  );
}
