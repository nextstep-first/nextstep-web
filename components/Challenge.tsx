import SectionHead from "./SectionHead";

/* 黄色背景でも読みやすい濃い本文色 */
const body = {
  fontSize: "clamp(15px,1.2vw,16.5px)",
  fontWeight: 500 as const,
  lineHeight: 2.4,
  color: "#1A1A15",
};

export default function Challenge() {
  return (
    <section
      id="challenge"
      data-screen-label="Challenge"
      style={{ background: "#FFE44D", position: "relative", overflow: "hidden" }}
    >
      {/* 名刺と同じブランド表現：黄色の面の右下が階段状に切れていて、
          その段差の上に n マークが立つ（白い階段＝次セクションの背景と一続きに見える） */}
      <div
        aria-hidden
        className="ns-challenge-deco"
        style={{
          position: "absolute",
          right: 0,
          bottom: -1,
          width: "min(72vw, 680px)",
          height: "clamp(60px, 9vw, 130px)",
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 600 130"
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          {/* 白い階段の切り欠き：右へ行くほど高く */}
          <path
            d="M 0 130 H 600 V 0 H 450 V 50 H 300 V 90 H 150 V 130 Z"
            fill="#FFFFFF"
          />
        </svg>
        {/* 段差に立つ n マーク（左足は黄色の段の上、右足元に白の切り欠き） */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ns-challenge-n"
          src="/assets/n-glyph-black.png"
          alt=""
          style={{
            position: "absolute",
            left: "76%",
            bottom: "97%",
            width: "clamp(56px, 9vw, 125px)",
            height: "auto",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(90px,12vw,170px) clamp(20px,4.5vw,48px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: "clamp(40px,5vw,72px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <SectionHead en="CHALLENGE" ja="課題" barColor="#141414" jaColor="#141414" />
          <h2
            style={{
              margin: "clamp(24px,3vw,40px) 0 0",
              fontWeight: 900,
              fontSize: "clamp(28px,3.6vw,46px)",
              lineHeight: 1.6,
              letterSpacing: "0.02em",
              color: "#141414",
            }}
          >
            <span
              className="ns-marker"
              style={{
                background: "linear-gradient(transparent 84%, #FFFFFF 84%)",
                padding: "0 4px",
              }}
            >
              分かっているのに、
            </span>
            <br />
            <span
              className="ns-marker"
              style={{
                background: "linear-gradient(transparent 84%, #FFFFFF 84%)",
                padding: "0 4px",
              }}
            >
              言葉にできない。
            </span>
          </h2>
        </div>

        <div style={{ maxWidth: 560 }}>
          <p style={{ margin: 0, ...body }}>
            それは、建設業の現場でよく起きることです。
          </p>
          <p style={{ margin: "2.2em 0 0", ...body }}>
            社長の頭の中には、答えがある。
            <br />
            職人の感覚にも、理由がある。
            <br />
            現場の違和感にも、必ず背景がある。
          </p>
          <p style={{ margin: "2.2em 0 0", ...body }}>
            けれど、それが言葉にならない。
            <br />
            数字にならない。
            <br />
            仕組みにならない。
          </p>
          <p style={{ margin: "2.2em 0 0", ...body }}>
            だから、伝わらない。
            <br />
            続かない。
            <br />
            会社に残らない。
          </p>
          <p style={{ margin: "2.2em 0 0", ...body, fontWeight: 700, color: "#141414" }}>
            Nextstepは、建設業の“言葉にできない”を、
            <br />
            AI・文章・数字・業務フローに
            <span
              style={{
                background: "#FFFFFF",
                color: "#141414",
                padding: "1px 8px",
                borderRadius: 4,
                fontWeight: 900,
                whiteSpace: "nowrap",
              }}
            >
              翻訳
            </span>
            します。
          </p>
          <p
            style={{
              margin: "2.4em 0 0",
              fontSize: "clamp(18px,1.7vw,22px)",
              fontWeight: 900,
              lineHeight: 2.1,
              color: "#141414",
            }}
          >
            現場の想いを、会社の仕組みに。
            <br />
            それが、Nextstepの仕事です。
          </p>
        </div>
      </div>
    </section>
  );
}
