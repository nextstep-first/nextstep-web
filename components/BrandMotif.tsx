import type { CSSProperties } from "react";

/* ブランドカラー（黄色） */
const Y = "#FFE100";

/* 1本の線を描くためのヘルパー。
   len = 線の長さ（stroke-dasharray 用）、delay = 描き始めまでの秒数。
   paused = true のときは描画を止めておき、スクロールで画面に入ってから開始する。 */
function drawnPath(
  d: string,
  len: number,
  delay: number,
  paused: boolean
): CSSProperties {
  return {
    strokeDasharray: len,
    strokeDashoffset: len,
    animation: `ns-draw 2s cubic-bezier(.55,.1,.3,1) ${delay}s forwards`,
    animationPlayState: paused ? "paused" : "running",
  };
}

const pathBase = {
  fill: "none",
  stroke: Y,
  strokeWidth: 5.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ぐちゃぐちゃに絡まった塊（左）→ 右へ向かって整った線（ファン）になるモチーフ。
   社長の頭の中の違和感・経験・判断が、AI・数字・文章・業務フローに
   変換されていく様子を表す。 */
const TANGLE_D =
  "M 60 200 C 140 60 300 90 250 190 C 210 270 90 260 130 150 " +
  "C 165 60 320 140 280 240 C 245 320 100 300 90 200 " +
  "C 80 100 220 70 300 130 C 370 185 300 300 200 280 " +
  "C 110 262 120 120 230 110 C 330 100 360 220 260 250 " +
  "C 180 273 110 200 170 130 C 225 70 350 60 340 170 " +
  "C 332 250 220 310 150 240 C 100 190 170 100 260 160 " +
  "C 330 205 305 265 345 235 C 385 205 380 196 430 195 " +
  "C 500 197 570 194 655 194";

const FAN: [string, number][] = [
  ["M 655 194 C 715 194 715 108 775 108 L 1160 108", 580],
  ["M 655 194 C 715 194 715 166 775 166 L 1160 166", 545],
  ["M 655 194 C 715 194 715 224 775 224 L 1160 224", 545],
  ["M 655 194 C 715 194 715 282 775 282 L 1160 282", 580],
];

export function HeroMotif({ opacity = 1 }: { opacity?: number }) {
  return (
    <svg
      viewBox="0 0 1200 360"
      style={{ width: "100%", height: "auto", display: "block", opacity }}
      aria-hidden
    >
      <path {...pathBase} d={TANGLE_D} style={drawnPath(TANGLE_D, 4200, 0, false)} />
      {FAN.map(([d, len], i) => (
        <path
          key={`fan${i}`}
          {...pathBase}
          d={d}
          style={drawnPath(d, len, 1.05 + i * 0.12, false)}
        />
      ))}
    </svg>
  );
}

/* まっすぐ伸びていく3本の線（Contact セクションの締め）。
   スクロールで画面に入ってから描き始める（paused = true）。 */
const STRAIGHT: [string, number][] = [
  ["M 40 22 L 1160 22", 1140],
  ["M 40 64 L 1010 64", 990],
  ["M 40 106 L 1120 106", 1100],
];

export function ContactLines({ opacity = 1 }: { opacity?: number }) {
  return (
    <svg
      viewBox="0 0 1200 128"
      style={{ width: "100%", height: "auto", display: "block", opacity }}
      aria-hidden
    >
      {STRAIGHT.map(([d, len], i) => (
        <path
          key={`line${i}`}
          {...pathBase}
          d={d}
          style={drawnPath(d, len, 0.2 + i * 0.15, true)}
        />
      ))}
    </svg>
  );
}
