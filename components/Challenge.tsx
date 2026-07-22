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
      style={{ background: "#FFE100", position: "relative", overflow: "hidden" }}
    >
      {/* 装飾：階段を上った先に n マークが立つ（Nextstep＝次の一歩、のブランド表現）。
          nマークは白背景を透明化した専用画像（n-mark-black.png）を使う */}
      <div
        aria-hidden
        className="ns-challenge-deco"
        style={{
          position: "absolute",
          right: "clamp(16px,4vw,48px)",
          bottom: "clamp(14px,2.5vw,34px)",
          width: "clamp(240px,26vw,400px)",
          aspectRatio: "2 / 1",
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 400 200"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <path
            d="M 0 196 H 70 V 156 H 140 V 116 H 210 V 76 H 280 V 36 H 400"
            fill="none"
            stroke="#141414"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/n-mark-black.png"
          alt=""
          style={{
            position: "absolute",
            right: "3%",
            bottom: "19.5%",
            width: "28%",
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
            分かっているのに、
            <br />
            言葉にできない。
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
                background: "#141414",
                color: "#FFFFFF",
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
