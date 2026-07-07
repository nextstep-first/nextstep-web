const FOOT_NAV = [
  ["#statement", "STATEMENT"],
  ["#challenge", "CHALLENGE"],
  ["#problem", "PROBLEM"],
  ["#service", "SERVICE"],
  ["#works", "WORKS"],
  ["#company", "COMPANY"],
  ["#contact", "CONTACT"],
] as const;

export default function Footer() {
  return (
    <footer style={{ background: "#141414", color: "#FFFFFF" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(36px,4.5vw,56px) clamp(20px,4.5vw,48px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span className="ns-en" style={{ fontWeight: 800, fontSize: 20 }}>
            Nextstep
            <span
              style={{
                display: "inline-block",
                width: 10,
                height: 10,
                background: "#FFE100",
                marginLeft: 6,
              }}
            />
          </span>
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "#9A9A90",
              letterSpacing: "0.06em",
            }}
          >
            建設業 × AI × 言語化 × 仕組み化 × 実行支援
          </span>
        </div>
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(14px,2.4vw,26px)",
          }}
        >
          {FOOT_NAV.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="ns-en ns-foot-a"
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.16em",
                color: "#C9C9C0",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <span
          className="ns-en"
          style={{
            fontWeight: 500,
            fontSize: 11.5,
            letterSpacing: "0.08em",
            color: "#77776E",
          }}
        >
          © 2026 Nextstep
        </span>
      </div>
    </footer>
  );
}
