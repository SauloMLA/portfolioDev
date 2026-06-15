"use client";

import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import { getYouTubeEmbedUrl, isYouTubeShort } from "@/lib/video";
import { cn } from "@/lib/utils";

type DemoVideoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  videoUrl: string;
  closeLabel: string;
  unavailableLabel: string;
};

export function DemoVideoModal({
  open,
  onOpenChange,
  title,
  videoUrl,
  closeLabel,
  unavailableLabel,
}: DemoVideoModalProps) {
  const embedUrl = getYouTubeEmbedUrl(videoUrl, open);
  const isShort = isYouTubeShort(videoUrl);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Viewport className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <Dialog.Popup className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-black/40 transition-all data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
            <div className="flex items-center justify-between gap-4 border-b border-border/50 px-4 py-3 sm:px-5">
              <Dialog.Title className="text-sm font-medium text-foreground sm:text-base">
                {title}
              </Dialog.Title>
              <Dialog.Close
                aria-label={closeLabel}
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-border text-[var(--text-secondary)] transition-colors hover:border-[rgba(255,255,255,0.16)] hover:bg-[rgba(255,255,255,0.04)] hover:text-foreground"
              >
                <X className="size-4" />
              </Dialog.Close>
            </div>

            <div className="p-4 sm:p-5">
              {embedUrl ? (
                <div
                  className={cn(
                    "relative mx-auto w-full overflow-hidden rounded-xl border border-border/40 bg-black",
                    isShort
                      ? "aspect-[9/16] max-h-[72vh] max-w-sm"
                      : "aspect-video"
                  )}
                >
                  <iframe
                    key={embedUrl}
                    src={embedUrl}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 size-full"
                  />
                </div>
              ) : (
                <p className="rounded-xl border border-border/50 bg-muted/40 px-4 py-8 text-center text-sm text-muted-foreground">
                  {unavailableLabel}
                </p>
              )}
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
