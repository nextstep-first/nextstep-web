import SectionHead from "./SectionHead";

export default function Contact() {
  return (
    <section
      id="contact"
      data-screen-label="Contact"
      style={{ background: "#FFFFFF", overflow: "hidden" }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding:
            "clamp(100px,14vw,180px) clamp(20px,4.5vw,48px) clamp(50px,6vw,80px)",
          textAlign: "center",
        }}
      >
        <SectionHead en="CONTACT" ja="お問い合わせ" center />
        <h2
          className="ns-contact-h2"
          style={{
            margin: "clamp(24px,3vw,40px) 0 0",
            fontWeight: 900,
            fontSize: "clamp(26px,3.6vw,44px)",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          まだ
          <span
            className="ns-marker"
            style={{
              background: "linear-gradient(transparent 64%, #FFE100 64%)",
              padding: "0 4px",
            }}
          >
            言葉になっていない相談
          </span>
          から、
          <br />
          お聞かせください。
        </h2>
        <p
          className="ns-contact-lead"
          style={{
            margin: "clamp(28px,3.5vw,44px) 0 0",
            fontSize: "clamp(14.5px,1.2vw,16px)",
            fontWeight: 500,
            lineHeight: 2.4,
            color: "#55554E",
          }}
        >
          「何を頼めばいいか分からない」
          <br />
          「社内の課題をうまく説明できない」
          <br />
          「AIを使いたいけど、
          <br className="ns-br-sp" />
          何から始めればいいか分からない」
        </p>
        <p
          style={{
            margin: "2em 0 0",
            fontSize: "clamp(16px,1.4vw,19px)",
            fontWeight: 900,
            lineHeight: 2.1,
            color: "#141414",
          }}
        >
          その段階からで大丈夫です。
          <br />
          Nextstepが、課題を一緒に整理します。
        </p>

        <div
          className="ns-rv"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            marginTop: "clamp(36px,4.5vw,56px)",
          }}
        >
          {/* TODO: LINE公式アカウントのURLが決まったら href を差し替える（現在は仮） */}
          <a
            href="#"
            className="ns-btn-y"
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              background: "#FFE100",
              color: "#141414",
              textDecoration: "none",
              padding: "16px 40px",
              borderRadius: 8,
            }}
          >
            <span style={{ fontWeight: 900, fontSize: 16, letterSpacing: "0.04em" }}>
              LINEで相談する
            </span>
            <span
              className="ns-en"
              style={{ fontWeight: 700, fontSize: 10.5, letterSpacing: "0.22em" }}
            >
              LINE →
            </span>
          </a>
          <a
            href="mailto:nextstep@techsupply.work"
            className="ns-btn-o"
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              background: "#141414",
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "16px 40px",
              borderRadius: 8,
            }}
          >
            <span style={{ fontWeight: 900, fontSize: 16, letterSpacing: "0.04em" }}>
              お問い合わせする
            </span>
            <span
              className="ns-en"
              style={{
                fontWeight: 700,
                fontSize: 10.5,
                letterSpacing: "0.22em",
                color: "#B9B9B0",
              }}
            >
              MAIL →
            </span>
          </a>
        </div>
        <p
          className="ns-en"
          style={{
            margin: "28px 0 0",
            fontWeight: 700,
            fontSize: 12.5,
            letterSpacing: "0.1em",
            color: "#8B8B80",
          }}
        >
          nextstep@techsupply.work
        </p>
      </div>
    </section>
  );
}
