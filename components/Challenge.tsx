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
      {/* 名刺と同じブランド表現（1段）：黄色の右下に白い段が1つ切り込まれ、
          n の右足がその段を踏み締める。左足は段の左の黄色に着地。
          数値はグリフ実測値（右足の裏＝下から20.2%、左足＝最下端）から算出 */}
      <div
        aria-hidden
        className="ns-challenge-deco"
        style={{
          position: "absolute",
          right: 0,
          bottom: -1,
          width: "clamp(240px, 40vw, 560px)",
          aspectRatio: "560 / 150",
          pointerEvents: "none",
        }}
      >
        {/* 1段の白い切り欠き（右端まで） */}
        <div
          style={{
            position: "absolute",
            left: "83.9%",
            right: 0,
            bottom: 0,
            height: "35.7%",
            background: "#FFFFFF",
          }}
        />
        {/* 下段：左端から段の角まで伸びる白い帯（上面＝左足の裏の高さ）。
            これで n は「下の段に左足・上の段に右足」で階段を上る構図になる */}
        <div
          style={{
            position: "absolute",
            right: "100%",
            width: "100vw",
            bottom: 0,
            height: "16.3%",
            background: "#FFFFFF",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: "16.1%",
            bottom: 0,
            height: "16.3%",
            background: "#FFFFFF",
          }}
        />
        {/* 段を踏み締める n（右足の裏＝段の上面。3pxだけ踏み込ませる） */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ns-challenge-n"
          src="/assets/n-glyph-black.png"
          alt=""
          style={{
            position: "absolute",
            left: "72.3%",
            bottom: "16.3%",
            width: "22.3%",
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
                background: "linear-gradient(transparent 64%, #FFFFFF 64%)",
                padding: "0 4px",
              }}
            >
              分かっているのに、
            </span>
            <br />
            <span
              className="ns-marker"
              style={{
                background: "linear-gradient(transparent 64%, #FFFFFF 64%)",
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
