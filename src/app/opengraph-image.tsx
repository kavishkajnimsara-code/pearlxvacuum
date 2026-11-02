import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Pearl-X Vacuum Packing — Running Out of Suitcase Space? Pack 3X More.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const heroBuffer = await readFile(
    join(process.cwd(), "public/images/hero-pack.jpg")
  );
  const heroSrc = `data:image/jpeg;base64,${heroBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#ffffff",
          padding: "16px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "36px",
            overflow: "hidden",
            backgroundColor: "#020617",
          }}
        >
          {/* Background Image */}
          <img
            src={heroSrc}
            alt="Pearl-X Hero Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Soft Dark Gradient Overlay matching brightness-[0.55] + slate-950 gradient */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              background:
                "linear-gradient(to top, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.62) 50%, rgba(2,6,23,0.72) 100%)",
            }}
          />

          {/* Hero Content */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "0 64px",
              width: "100%",
            }}
          >
            {/* Top Headline */}
            <div
              style={{
                display: "flex",
                fontSize: "50px",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                textShadow: "0 4px 24px rgba(0,0,0,0.9)",
              }}
            >
              Running Out of Suitcase Space?
            </div>

            {/* Highlighted Red Headline */}
            <div
              style={{
                display: "flex",
                fontSize: "96px",
                fontWeight: 800,
                color: "#ef4444",
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
                marginTop: "6px",
                textShadow: "0 6px 28px rgba(0,0,0,0.95)",
              }}
            >
              Pack 3X More.
            </div>

            {/* Sub-headline */}
            <div
              style={{
                display: "flex",
                fontSize: "23px",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.5,
                maxWidth: "860px",
                marginTop: "22px",
                textAlign: "center",
                textShadow: "0 2px 16px rgba(0,0,0,0.95)",
              }}
            >
              {"Don't leave your favorite food or clothes behind. Professional vacuum sealing that saves up to 80% luggage space, keeps food 100% leak-proof, and guarantees freshness on every flight."}
            </div>

            {/* CTA Buttons Row */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                marginTop: "36px",
              }}
            >
              {/* Primary CTA Pill */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  width: "256px",
                  height: "54px",
                  borderRadius: "9999px",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  fontSize: "17px",
                  fontWeight: 600,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0f172a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </div>

              {/* Secondary CTA Pill */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  width: "256px",
                  height: "54px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 600,
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call 074 367 8100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
