import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Icon generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 14,
          background: "linear-gradient(to bottom right, #38bdf8, #6366f1)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "8px",
          fontWeight: 800,
          letterSpacing: "-0.05em",
          boxShadow: "inset 0 0 4px rgba(255, 255, 255, 0.2)",
        }}
      >
        SA
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
