import type { ReactNode } from "react";
import SectionHead from "./SectionHead";

const ROWS: { label: string; value: ReactNode; lineHeight?: number }[] = [
  { label: "屋号", value: "Nextstep" },
  { label: "代表", value: "服部 健児" },
  { label: "事業内容", value: "戦略AI総務 / 建設業専門FDE" },
  { label: "所在地", value: "名古屋市中村区名駅4-24-5 第2森ビル401" },
  {
    label: "事業領域",
    lineHeight: 2.2,
    value: (
      <>
        AI活用研修
        <br />
        小規模AIシステム開発
        <br />
        YouTube運用代行
        <br />
        建設・外構工事
      </>
    ),
  },
];

export default function Company() {
  return (
    <section id="company" data-screen-label="Company" style={{ background: "#FAFAF5" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(90px,12vw,160px) clamp(20px,4.5vw,48px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
          gap: "clamp(40px,5vw,72px)",
          alignItems: "start",
        }}
      >
        <div className="ns-company-col">
          <SectionHead en="COMPANY" ja="会社概要" />
          <h2
            style={{
              margin: "clamp(24px,3vw,40px) 0 0",
              fontWeight: 900,
              fontSize: "clamp(26px,3.2vw,40px)",
              lineHeight: 1.6,
              letterSpacing: "0.02em",
            }}
          >
            次の一歩を、
            <br />
            現場と共に。
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.png"
            alt="Nextstep ロゴ"
            style={{
              display: "block",
              width: "min(150px,36%)",
              height: "auto",
              marginTop: "clamp(32px,4vw,52px)",
            }}
          />
        </div>

        <div
          className="ns-card"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E5DC",
            borderRadius: 10,
            padding: "clamp(10px,1.4vw,18px) clamp(24px,3vw,40px)",
          }}
        >
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(84px,140px) 1fr",
                gap: 8,
                padding: "20px 0",
                borderBottom:
                  i < ROWS.length - 1 ? "1px solid #ECECE4" : undefined,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#8B8B80",
                  letterSpacing: "0.1em",
                  paddingTop: 2,
                }}
              >
                {row.label}
              </span>
              <span
                style={{
                  fontSize: 15.5,
                  fontWeight: 700,
                  lineHeight: row.lineHeight ?? 1.9,
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
