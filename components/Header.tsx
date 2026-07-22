const NAV = [
  ["#statement", "STATEMENT"],
  ["#challenge", "CHALLENGE"],
  ["#problem", "PROBLEM"],
  ["#service", "SERVICE"],
  ["#works", "WORKS"],
  ["#company", "COMPANY"],
] as const;

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "13px clamp(20px,4.5vw,48px)",
        }}
      >
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "#141414",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/n-mark-transparent.png"
            alt="Nextstep"
            style={{ height: 30, width: "auto", display: "block" }}
          />
          <span
            className="ns-en"
            style={{ fontWeight: 800, fontSize: 19, letterSpacing: "0.01em" }}
          >
            Nextstep
          </span>
        </a>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(14px,2.4vw,30px)",
            justifyContent: "flex-end",
          }}
        >
          <span
            className="ns-navlinks"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(14px,2.4vw,30px)",
              justifyContent: "flex-end",
            }}
          >
            {NAV.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="ns-en ns-nav-a"
                style={{
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  color: "#141414",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
          </span>
          <a
            href="#contact"
            className="ns-en ns-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#FFE100",
              color: "#141414",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: "0.06em",
              padding: "10px 20px",
              borderRadius: 999,
              whiteSpace: "nowrap",
            }}
          >
            CONTACT
            <span style={{ fontSize: 12 }}>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
