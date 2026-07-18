import { HeroMotif } from "./BrandMotif";

const marker = {
  background: "linear-gradient(transparent 64%, #FFE100 64%)",
  padding: "0 4px",
};

export default function Hero() {
  return (
    <section
      id="top"
      data-screen-label="First View"
      style={{ position: "relative", overflow: "hidden", background: "#FFFFFF" }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding:
            "clamp(104px,9vw,148px) clamp(20px,4.5vw,48px) clamp(40px,5vw,64px)",
        }}
      >
        {/* 英語ラベル */}
        <div
          className="ns-sechead"
          style={{ display: "flex", alignItems: "center", gap: 14 }}
        >
          <span
            style={{ width: 34, height: 3, background: "#FFE100", display: "block" }}
          />
          <span
            className="ns-en"
            style={{
              fontWeight: 800,
              fontSize: "clamp(12px,1.3vw,14px)",
              letterSpacing: "0.2em",
              color: "#141414",
            }}
          >
            WE ARE NEXTSTEP.&nbsp; TURNING UNSPOKEN IDEAS INTO SYSTEMS.
          </span>
        </div>

        {/* 大見出し（前半・カギカッコなし・左そろえ） */}
        <h1
          style={{
            margin: "clamp(28px,4vw,48px) 0 0",
            fontWeight: 900,
            fontSize: "clamp(30px,5.3vw,66px)",
            lineHeight: 1.4,
            letterSpacing: "0.015em",
          }}
        >
          分かっているのに、
          <br />
          言葉にできない。
        </h1>

        {/* ぐちゃぐちゃ→まっすぐ のモチーフ（2つの見出しの「間」に配置して一体感を出す） */}
        <div
          className="ns-hero-motif"
          style={{ maxWidth: 660, margin: "clamp(22px,3vw,38px) 0 0" }}
        >
          <HeroMotif />
        </div>

        {/* 大見出し（後半） */}
        <p
          style={{
            margin: "clamp(18px,2.6vw,32px) 0 0",
            fontWeight: 900,
            fontSize: "clamp(24px,4vw,50px)",
            lineHeight: 1.5,
            letterSpacing: "0.02em",
            color: "#141414",
          }}
        >
          その想いを、
          <span className="ns-marker" style={marker}>
            仕組みに変える。
          </span>
        </p>

        {/* サブコピー */}
        <p
          style={{
            margin: "clamp(24px,3.4vw,40px) 0 0",
            fontSize: "clamp(15px,1.3vw,17px)",
            fontWeight: 500,
            lineHeight: 2.2,
            color: "#33332E",
            maxWidth: 640,
          }}
        >
          建設現場を知る
          <span
            className="ns-marker"
            style={{
              fontWeight: 900,
              background: "linear-gradient(transparent 64%, #FFE100 64%)",
              padding: "0 4px",
            }}
          >
            「翻訳家」
          </span>
          として、
          <br />
          社長の頭の中にある違和感・経験・判断を、
          <br />
          AI・数字・文章・業務フローに変えていきます。
        </p>

        {/* ボタン */}
        <div className="ns-hero-btns" style={{ margin: "clamp(28px,4vw,44px) 0 0" }}>
          <div
            className="ns-btn-row"
            style={{ display: "flex", flexWrap: "wrap", gap: 16 }}
          >
            <a
              href="#contact"
              className="ns-btn ns-btn-y"
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 2,
                background: "#FFE100",
                color: "#141414",
                textDecoration: "none",
                padding: "16px 34px",
                borderRadius: 8,
              }}
            >
              <span style={{ fontWeight: 900, fontSize: 16, letterSpacing: "0.04em" }}>
                お問い合わせ
              </span>
              <span
                className="ns-en"
                style={{
                  fontWeight: 700,
                  fontSize: 10.5,
                  letterSpacing: "0.22em",
                  color: "#141414",
                }}
              >
                CONTACT →
              </span>
            </a>
            <a
              href="#service"
              className="ns-btn ns-btn-o"
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 2,
                background: "#FFFFFF",
                color: "#141414",
                textDecoration: "none",
                padding: "14px 32px",
                borderRadius: 8,
                border: "2px solid #141414",
              }}
            >
              <span style={{ fontWeight: 900, fontSize: 16, letterSpacing: "0.04em" }}>
                サービスを見る
              </span>
              <span
                className="ns-en"
                style={{
                  fontWeight: 700,
                  fontSize: 10.5,
                  letterSpacing: "0.22em",
                  color: "#8B8B80",
                }}
              >
                SERVICE →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
