/* 各セクション共通の小見出し（黄色バー ＋ 英語ラベル ＋ 日本語ラベル） */
export default function SectionHead({
  en,
  ja,
  center = false,
}: {
  en: string;
  ja: string;
  center?: boolean;
}) {
  return (
    <div
      className="ns-sechead"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        justifyContent: center ? "center" : undefined,
      }}
    >
      <span
        style={{ width: 34, height: 3, background: "#FFE100", display: "block" }}
      />
      <span
        className="ns-en"
        style={{ fontWeight: 800, fontSize: 14, letterSpacing: "0.24em" }}
      >
        {en}
      </span>
      <span
        style={{
          fontSize: 12.5,
          fontWeight: 700,
          color: "#8B8B80",
          letterSpacing: "0.14em",
        }}
      >
        {ja}
      </span>
    </div>
  );
}
