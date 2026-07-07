import SectionHead from "./SectionHead";

/* 本文段落の基本スタイル */
const body = {
  fontSize: "clamp(15px,1.2vw,16.5px)",
  fontWeight: 500 as const,
  lineHeight: 2.4,
  color: "#2B2B28",
};

export default function Statement() {
  return (
    <section id="statement" data-screen-label="Statement" style={{ background: "#FFFFFF" }}>
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
          <SectionHead en="STATEMENT" ja="私たちの理念" />
          <h2
            style={{
              margin: "clamp(24px,3vw,40px) 0 0",
              fontWeight: 900,
              fontSize: "clamp(28px,3.6vw,46px)",
              lineHeight: 1.55,
              letterSpacing: "0.02em",
            }}
          >
            全てのビジネスを、
            <br />
            <span
              className="ns-marker"
              style={{
                background: "linear-gradient(transparent 62%, #FFE100 62%)",
                padding: "0 4px",
              }}
            >
              “ワクワク”
            </span>
            <br />
            の舞台に変える。
          </h2>
        </div>

        <div style={{ maxWidth: 560 }}>
          <p style={{ margin: 0, ...body }}>仕事は、本来おもしろい。</p>
          <p style={{ margin: "2.2em 0 0", ...body }}>
            現場には、挑戦がある。
            <br />
            数字の先には、人の物語がある。
            <br />
            一つの判断の裏に、積み上げてきた経験がある。
          </p>
          <p style={{ margin: "2.2em 0 0", ...body }}>
            けれど、日々の忙しさの中で、
            <br />
            その
            <span
              style={{
                fontWeight: 900,
                background: "linear-gradient(transparent 64%, #FFE100 64%)",
                padding: "0 2px",
              }}
            >
              “ワクワク”
            </span>
            は、少しずつ見えなくなっていく。
          </p>
          <p style={{ margin: "2.2em 0 0", ...body, fontWeight: 700, color: "#141414" }}>
            Nextstepは、AIと仕組みの力で、
            <br />
            ムダな作業と迷いを減らし、
            <br />
            一人ひとりが「本当にやりたいこと」に
            <br />
            集中できる状態をつくります。
          </p>
          <p style={{ margin: "2.2em 0 0", ...body }}>
            作業が減れば、挑戦が増える。
            <br />
            迷いが消えれば、ワクワクが戻る。
          </p>
          <p
            className="ns-statement-close"
            style={{
              margin: "2.4em 0 0",
              fontSize: "clamp(18px,1.7vw,22px)",
              fontWeight: 900,
              lineHeight: 2.1,
              color: "#141414",
            }}
          >
            全てのビジネスを、“ワクワク”の舞台に。
            <br />
            それが、Nextstepの目指す景色です。
          </p>
        </div>
      </div>
    </section>
  );
}
