import SectionHead from "./SectionHead";

const WORKS = [
  { tag: "AI研修", items: ["上場企業でのAIリスキリング研修", "大学でのAIセミナー"] },
  {
    tag: "YouTube運用",
    items: ["工務店YouTubeの運用支援", "建設・不動産系動画の企画・制作・分析"],
  },
  {
    tag: "建設業支援",
    items: ["建設業の業務改善", "採用広報", "現場目線での仕組み化"],
  },
  {
    tag: "建設・外構工事",
    items: ["建設工事を原点とした現場対応", "工事の段取り・職人連携・現場管理"],
  },
];

/* タグの矢羽根（右側が三角にとがった形） */
const ARROW_CLIP =
  "polygon(0 0,calc(100% - 11px) 0,100% 50%,calc(100% - 11px) 100%,0 100%)";

export default function Works() {
  return (
    <section
      id="works"
      data-screen-label="Works"
      style={{
        background: "#FFFFFF",
        backgroundImage:
          "repeating-linear-gradient(0deg,rgba(240,210,0,0.09) 0 1px,transparent 1px 44px),repeating-linear-gradient(90deg,rgba(240,210,0,0.09) 0 1px,transparent 1px 44px)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(90px,12vw,160px) clamp(20px,4.5vw,48px)",
        }}
      >
        <SectionHead en="WORKS" ja="実績" />
        <h2
          style={{
            margin: "clamp(24px,3vw,40px) 0 0",
            fontWeight: 900,
            fontSize: "clamp(26px,3.6vw,46px)",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          現場とAIに、
          <br />
          <span
            className="ns-marker"
            style={{
              background: "linear-gradient(transparent 64%, #FFE100 64%)",
              padding: "0 4px",
            }}
          >
            誠実に向き合ってきた証
          </span>
          。
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,270px),1fr))",
            gap: 22,
            marginTop: "clamp(40px,5vw,64px)",
          }}
        >
          {WORKS.map((w) => (
            <div
              key={w.tag}
              className="ns-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E5DC",
                borderRadius: 10,
                padding: "clamp(26px,2.6vw,34px)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  background: "#141414",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: "0.06em",
                  padding: "7px 22px 7px 16px",
                  clipPath: ARROW_CLIP,
                }}
              >
                {w.tag}
              </span>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {w.items.map((it) => (
                  <li
                    key={it}
                    style={{
                      display: "flex",
                      gap: 12,
                      fontSize: 14.5,
                      fontWeight: 700,
                      lineHeight: 1.8,
                      color: "#2B2B28",
                    }}
                  >
                    <span
                      style={{
                        flex: "0 0 16px",
                        height: 3,
                        background: "#FFE100",
                        marginTop: 11,
                      }}
                    />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
