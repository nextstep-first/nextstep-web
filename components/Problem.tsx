import SectionHead from "./SectionHead";

const body = {
  fontSize: "clamp(15px,1.2vw,16.5px)",
  fontWeight: 500 as const,
  lineHeight: 2.3,
  color: "#2B2B28",
};

/* 仕事の分解ステップ。段を下げるほど左インデントを深くして階段状に見せる */
const STEPS: {
  n: string;
  ja: string;
  en: string;
  ml: string;
  shadow?: boolean;
}[] = [
  { n: "01", ja: "目的", en: "PURPOSE", ml: "0" },
  { n: "02", ja: "成果物", en: "DELIVERABLE", ml: "min(4vw,44px)" },
  { n: "03", ja: "業務", en: "OPERATION", ml: "min(8vw,88px)" },
  { n: "04", ja: "作業", en: "TASK", ml: "min(12vw,132px)" },
  { n: "05", ja: "手順", en: "PROCEDURE", ml: "min(16vw,176px)", shadow: true },
];

export default function Problem() {
  return (
    <section id="problem" data-screen-label="Problem" style={{ background: "#FFFFFF" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(90px,12vw,160px) clamp(20px,4.5vw,48px)",
        }}
      >
        <SectionHead en="PROBLEM" ja="なぜAIを使いこなせないのか" />
        <h2
          style={{
            margin: "clamp(24px,3vw,40px) 0 0",
            fontWeight: 900,
            fontSize: "clamp(26px,3.6vw,46px)",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          AIが使えない理由は、
          <br />
          ツール不足ではなく、
          <br className="ns-br-sp" />
          <span
            className="ns-marker"
            style={{
              background: "linear-gradient(transparent 64%, #FFE100 64%)",
              padding: "0 4px",
            }}
          >
            分解不足
          </span>
          です。
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
            gap: "clamp(32px,5vw,72px)",
            marginTop: "clamp(36px,4.5vw,60px)",
            alignItems: "start",
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <p style={{ margin: 0, ...body }}>
              ChatGPTも、無料ツールも、目の前にある。
              <br />
              でも、なかなか現場で使いこなせない。
            </p>
            <p style={{ margin: "2em 0 0", ...body }}>理由はシンプルです。</p>
            <p style={{ margin: "2em 0 0", ...body }}>
              自分たちの仕事を、
              <br />
              <strong style={{ fontWeight: 900 }}>
                目的・成果物・業務・作業・手順
              </strong>
              まで
              <br />
              分解できていないからです。
            </p>
            <p style={{ margin: "2em 0 0", ...body }}>
              AIは、あいまいな指示では動けません。
            </p>
            <p
              style={{
                margin: "2.4em 0 0",
                fontSize: "clamp(17px,1.5vw,20px)",
                fontWeight: 900,
                lineHeight: 2,
                color: "#141414",
              }}
            >
              でも、仕事が分解されれば、
              <br />
              <span
                className="ns-marker"
                style={{
                  background: "linear-gradient(transparent 64%, #FFE100 64%)",
                  padding: "0 2px",
                }}
              >
                AIは現場の力になります。
              </span>
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="ns-step"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  background: "#FFFFFF",
                  border: "1.5px solid #141414",
                  borderRadius: 6,
                  padding: "16px 24px",
                  maxWidth: 520,
                  marginLeft: s.ml,
                  boxShadow: s.shadow ? "5px 5px 0 #FFE100" : undefined,
                }}
              >
                <span
                  className="ns-en"
                  style={{
                    fontWeight: 800,
                    fontSize: 14,
                    borderBottom: "3px solid #FFE100",
                    paddingBottom: 2,
                  }}
                >
                  {s.n}
                </span>
                <span
                  style={{ fontWeight: 900, fontSize: "clamp(17px,1.6vw,20px)" }}
                >
                  {s.ja}
                </span>
                <span
                  className="ns-en"
                  style={{
                    marginLeft: "auto",
                    fontWeight: 700,
                    fontSize: 10.5,
                    letterSpacing: "0.2em",
                    color: "#A3A396",
                  }}
                >
                  {s.en}
                </span>
              </div>
            ))}
            <p
              style={{
                margin: "16px 0 0 min(16vw,176px)",
                fontSize: 13,
                fontWeight: 700,
                color: "#8B8B80",
                letterSpacing: "0.1em",
              }}
            >
              ここまで分解できれば、AIが動き出す。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
