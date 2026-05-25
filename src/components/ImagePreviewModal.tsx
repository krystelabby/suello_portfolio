import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode } from "react";

type ImagePreviewModalProps = {
  open: boolean;
  onClose: () => void;
  imageSrc?: string;
  title: string;
  footer?: ReactNode;
};

export function ImagePreviewModal({
  open,
  onClose,
  imageSrc,
  title,
  footer,
}: ImagePreviewModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-text-primary/25 p-4 backdrop-blur-sm dark:bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal
          aria-labelledby="preview-modal-title"
        >
          <motion.div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border-theme bg-bg-card shadow-[var(--shadow-card-hover)]"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-soft-pink text-text-primary transition hover:opacity-90"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="max-h-[calc(92vh-12rem)] overflow-auto bg-bg-section-alt p-4 md:p-6">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={title}
                  className="mx-auto h-auto max-h-[60vh] w-full object-contain"
                />
              ) : (
                <p className="py-16 text-center text-text-body">No preview available.</p>
              )}
            </div>
            <div className="border-t border-border-theme px-5 py-4">
              <h3 id="preview-modal-title" className="font-bold text-text-primary">
                {title}
              </h3>
              {footer}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
