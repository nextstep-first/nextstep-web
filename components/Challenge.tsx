import SectionHead from "./SectionHead";

const body = {
  fontSize: "clamp(15px,1.2vw,16.5px)",
  fontWeight: 500 as const,
  lineHeight: 2.4,
  color: "#2B2B28",
};

export default function Challenge() {
  return (
    <section id="challenge" data-screen-label="Challenge" style={{ background: "#FAFAF5" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(90px,12vw,170px) clamp(20px,4.5vw,48px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: "clamp(40px,5vw,72px)",
        }}
      >
        <div>
          <SectionHead en="CHALLENGE" ja="課題" />
          <h2
            style={{
              margin: "clamp(24px,3vw,40px) 0 0",
              fontWeight: 900,
              fontSize: "clamp(28px,3.6vw,46px)",
              lineHeight: 1.6,
              letterSpacing: "0.02em",
            }}
          >
            「分かっているのに、
            <br />
            言葉にできない。」
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
              className="ns-marker"
              style={{
                background: "linear-gradient(transparent 64%, #FFE100 64%)",
                padding: "0 2px",
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
