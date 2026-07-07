import SectionHead from "./SectionHead";

const SERVICES = [
  {
    no: "01",
    en: "AI TRAINING",
    title: "AI活用研修",
    copy: "職人・スタッフが、AIを使いこなせるように。",
    body: "ChatGPTの使い方だけを教えるのではなく、見積書、工程表、議事録、社内共有、採用文、営業資料など、日々の業務にそのまま使える形まで落とし込みます。",
  },
  {
    no: "02",
    en: "AI SYSTEM",
    title: "建設業向けAIお試し開発",
    copy: "まず小さく作って、効果を確かめる。",
    body: "大きなシステムをいきなり作るのではなく、現場で本当に使える小さな仕組みから始めます。日報、見積、問い合わせ対応、採用管理、社内ナレッジなど、業務に合わせてAI活用を設計します。",
  },
  {
    no: "03",
    en: "YOUTUBE GROWTH",
    title: "建設業特化型YouTube運用代行",
    copy: "業界を知る目線で、集客・採用につなげる。",
    body: "ただ動画を作るのではなく、会社の強み、職人の魅力、現場のこだわりを、伝わる言葉と映像に変えます。",
  },
  {
    no: "04",
    en: "CONSTRUCTION SUPPORT",
    title: "建設 / 外構の下請け工事",
    copy: "建設工事を原点に持つ会社だから、現場まで分かる。",
    body: "Nextstepは、7年前に建設工事の会社として立ち上がりました。だからこそ、机上の支援だけではなく、現場の段取り、職人とのやり取り、工事の流れまで理解したうえで支援できます。必要に応じて、建設・外構工事そのものも対応します。",
  },
];

export default function Service() {
  return (
    <section id="service" data-screen-label="Service" style={{ background: "#FFFFFF" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(90px,12vw,160px) clamp(20px,4.5vw,48px)",
        }}
      >
        <SectionHead en="SERVICE" ja="事業領域" />
        <h2
          style={{
            margin: "clamp(24px,3vw,40px) 0 0",
            fontWeight: 900,
            fontSize: "clamp(26px,3.6vw,46px)",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          建設業を、
          <br />
          AIと実行支援で前に進める。
        </h2>
        <p
          style={{
            margin: "clamp(20px,2.5vw,32px) 0 0",
            fontSize: "clamp(15px,1.2vw,16.5px)",
            fontWeight: 500,
            lineHeight: 2.2,
            color: "#2B2B28",
            maxWidth: 600,
          }}
        >
          Nextstepは、建設業を起点に、
          <br />
          業務改善・人材育成・採用広報・現場支援を横断して支援します。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
            gap: 22,
            marginTop: "clamp(40px,5vw,64px)",
          }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.no}
              className="ns-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E5DC",
                borderRadius: 10,
                padding: "clamp(28px,3vw,38px)",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span
                  className="ns-en"
                  style={{ fontWeight: 800, fontSize: 18 }}
                >
                  {s.no}
                </span>
                <span
                  style={{
                    width: 28,
                    height: 3,
                    background: "#FFE100",
                    display: "block",
                  }}
                />
                <span
                  className="ns-en"
                  style={{
                    fontWeight: 700,
                    fontSize: 11.5,
                    letterSpacing: "0.22em",
                    color: "#8B8B80",
                  }}
                >
                  {s.en}
                </span>
              </div>
              <h3
                style={{
                  margin: "22px 0 0",
                  fontWeight: 900,
                  fontSize: "clamp(20px,1.8vw,24px)",
                  letterSpacing: "0.02em",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  margin: "14px 0 0",
                  fontSize: 15,
                  fontWeight: 800,
                  lineHeight: 1.9,
                  color: "#141414",
                }}
              >
                {s.copy}
              </p>
              <p
                style={{
                  margin: "14px 0 0",
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: 2.1,
                  color: "#55554E",
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
