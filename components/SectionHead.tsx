/* 各セクション共通の小見出し（バー ＋ 英語ラベル ＋ 日本語ラベル）
   黄色背景のセクションでは barColor / jaColor を濃色に切り替えて見えるようにする */
export default function SectionHead({
  en,
  ja,
  center = false,
  barColor = "#FFE100",
  jaColor = "#8B8B80",
}: {
  en: string;
  ja: string;
  center?: boolean;
  barColor?: string;
  jaColor?: string;
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
        style={{ width: 34, height: 3, background: barColor, display: "block" }}
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
          color: jaColor,
          letterSpacing: "0.14em",
        }}
      >
        {ja}
      </span>
    </div>
  );
}
