import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Athmisaynee Raveendran — Data Analyst & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "#0F1420",
          position: "relative",
        }}
      >
        <svg
          width="480"
          height="160"
          viewBox="0 0 480 160"
          style={{ position: "absolute", right: 60, bottom: 50, opacity: 0.15 }}
        >
          <polyline
            points="0,120 60,100 120,130 180,60 240,90 300,40 360,70 420,20 480,50"
            fill="none"
            stroke="#5DCAA5"
            strokeWidth="4"
          />
          <polyline
            points="0,140 60,110 120,150 180,100 240,120 300,80 360,100 420,60 480,90"
            fill="none"
            stroke="#7F77DD"
            strokeWidth="4"
          />
        </svg>

        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            color: "#5DCAA5",
            fontSize: 28,
            marginBottom: 24,
          }}
        >
          Hi, my name is
        </div>

        <div
          style={{
            display: "flex",
            color: "#E6EDF3",
            fontSize: 72,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          Athmisaynee Raveendran.
        </div>

        <div
          style={{
            display: "flex",
            width: 120,
            height: 6,
            background: "#5DCAA5",
            marginBottom: 24,
          }}
        />

        <div
          style={{
            display: "flex",
            color: "#8B98A9",
            fontSize: 36,
          }}
        >
          I turn data into decisions.
        </div>
      </div>
    ),
    { ...size }
  );
}
