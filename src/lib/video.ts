function extractYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.pathname.split("/")[2] ?? null;
      }

      if (parsed.pathname.startsWith("/shorts/")) {
        return parsed.pathname.split("/")[2] ?? null;
      }

      const videoId = parsed.searchParams.get("v");
      if (videoId) {
        return videoId;
      }
    }

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1) || null;
    }

    return null;
  } catch {
    return null;
  }
}

export function isYouTubeShort(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.hostname.includes("youtube.com") &&
      parsed.pathname.startsWith("/shorts/")
    );
  } catch {
    return false;
  }
}

export function getYouTubeEmbedUrl(url: string, autoplay = false): string | null {
  const videoId = extractYouTubeId(url);

  if (!videoId) {
    return null;
  }

  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });

  if (autoplay) {
    params.set("autoplay", "1");
  }

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}
