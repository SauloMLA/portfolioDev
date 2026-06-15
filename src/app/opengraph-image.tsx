import { ImageResponse } from "next/og";

import { en } from "@/content/en";

export const alt = en.site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#f5f5f7",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          {en.site.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#b8b8c0",
          }}
        >
          {en.site.title}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 22,
            color: "#85858f",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          {en.hero.positioning}
        </div>
      </div>
    ),
    { ...size }
  );
}
