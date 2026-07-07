import type { Metadata } from "next";
import { Manrope, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

// 英語見出し用フォント（Manrope）
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-en",
  display: "swap",
});

// 日本語本文・見出し用フォント（Zen Kaku Gothic New）
const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Nextstep｜建設業 × AI × 言語化 × 仕組み化 × 実行支援",
  description:
    "Nextstepは、建設現場を知る「翻訳家」として、社長の頭の中にある違和感・経験・判断を、AI・数字・文章・業務フローに変えていく会社です。",
  openGraph: {
    title: "Nextstep｜「分かっているのに、言葉にできない。」その想いを、仕組みに変える。",
    description:
      "建設業を、AIと実行支援で前に進める。全てのビジネスを、“ワクワク”の舞台に変える。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${manrope.variable} ${zenKaku.variable}`}>
      <body>{children}</body>
    </html>
  );
}
