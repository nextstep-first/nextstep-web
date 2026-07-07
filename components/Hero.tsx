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
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(104px,9vw,148px) clamp(20px,4.5vw,48px) 0",
        }}
      >
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

        <h1 style={{ margin: "clamp(28px,4vw,48px) 0 0", fontWeight: 900 }}>
          <span
            style={{
              display: "block",
              fontSize: "clamp(30px,5.3vw,66px)",
              lineHeight: 1.4,
              letterSpacing: "0.015em",
            }}
          >
            「分かっているのに、
            <br />
            言葉にできない。」
          </span>
          <span
            style={{
              display: "block",
              marginTop: "clamp(16px,2.4vw,30px)",
              fontSize: "clamp(24px,4vw,50px)",
              lineHeight: 1.5,
              letterSpacing: "0.02em",
            }}
          >
            その想いを、
            <br className="ns-br-sp" />
            <span className="ns-marker" style={marker}>
              仕組みに変える。
            </span>
          </span>
        </h1>

        <p
          style={{
            margin: "clamp(28px,4vw,44px) 0 0",
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
      </div>

      <div
        className="ns-hero-btns"
        style={{
          maxWidth: 1240,
          width: "100%",
          margin: "clamp(32px,4.5vw,52px) auto 0",
          padding: "0 clamp(20px,4.5vw,48px)",
          boxSizing: "border-box",
        }}
      >
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

      <div
        className="ns-hero-motif"
        style={{
          maxWidth: 1240,
          width: "100%",
          margin: "clamp(20px,3vw,40px) auto 0",
          padding: "0 clamp(20px,4.5vw,48px) clamp(40px,5vw,64px)",
          boxSizing: "border-box",
        }}
      >
        <HeroMotif />
        <div
          className="ns-hero-labels"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            marginTop: 10,
          }}
        >
          <span
            className="ns-label-strike"
            style={{
              fontSize: "clamp(11px,1.1vw,13px)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#A3A396",
            }}
          >
            混乱・感覚・属人化
          </span>
          <span
            style={{
              fontSize: "clamp(11px,1.1vw,13px)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#141414",
            }}
          >
            整理・言語化・
            <span
              className="ns-marker"
              style={{ background: "linear-gradient(transparent 64%, #FFE100 64%)" }}
            >
              仕組み化
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
