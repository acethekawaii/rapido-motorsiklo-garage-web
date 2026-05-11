import { ImageResponse } from "next/og"

export const alt =
  "Rapido Motorsiklo Garage — Quick, honest motorcycle repair in Lubao, Pampanga"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const COLORS = {
  bg: "#15151A",
  card: "#1E1E24",
  border: "#2A2A33",
  primary: "#E13B2A",
  primarySoft: "rgba(225, 59, 42, 0.18)",
  accent: "#F0C447",
  fg: "#F8F4E8",
  muted: "#B8B0A0",
}

function Bullet({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: 2,
          background: COLORS.accent,
          display: "flex",
        }}
      />
      <div style={{ display: "flex" }}>{label}</div>
    </div>
  )
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: COLORS.bg,
          backgroundImage: `radial-gradient(900px 500px at 88% -10%, ${COLORS.primarySoft}, transparent 60%), radial-gradient(700px 400px at -10% 110%, rgba(240, 196, 71, 0.10), transparent 60%)`,
          color: COLORS.fg,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              background: COLORS.primary,
              borderRadius: 8,
              fontSize: 44,
              fontWeight: 900,
              color: "#fff",
              boxShadow: "0 14px 40px -12px rgba(225, 59, 42, 0.7)",
              position: "relative",
            }}
          >
            R
            <div
              style={{
                position: "absolute",
                bottom: 6,
                left: 12,
                right: 12,
                height: 4,
                background: COLORS.accent,
                display: "flex",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: -0.5,
                display: "flex",
              }}
            >
              <span>Rapido</span>
              <span style={{ color: COLORS.primary }}>.</span>
            </div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: COLORS.muted,
                marginTop: 2,
                display: "flex",
              }}
            >
              Motorsiklo Garage
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: 999,
              background: "rgba(240, 196, 71, 0.14)",
              border: `1px solid rgba(240, 196, 71, 0.35)`,
              color: COLORS.accent,
              fontSize: 22,
              fontWeight: 600,
              alignSelf: "flex-start",
              marginBottom: 28,
            }}
          >
            Lubao, Pampanga
          </div>

          <div
            style={{
              fontSize: 86,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: -2,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Quick, honest&nbsp;</span>
            <span style={{ color: COLORS.primary }}>motorcycle repair</span>
            <span>&nbsp;for daily riders.</span>
          </div>

          <div
            style={{
              fontSize: 28,
              color: COLORS.muted,
              marginTop: 28,
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            Reliable repair, straightforward pricing, and friendly service from
            a local shop that treats your motor like our own.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 32,
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 32,
              fontSize: 22,
              color: COLORS.fg,
              fontWeight: 600,
            }}
          >
            <Bullet label="Quick turnaround" />
            <Bullet label="Honest pricing" />
            <Bullet label="Walk-ins welcome" />
          </div>

          <div
            style={{
              fontSize: 20,
              color: COLORS.muted,
              fontWeight: 600,
              display: "flex",
            }}
          >
            Message us on Facebook
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
