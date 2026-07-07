import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Challenge from "@/components/Challenge";
import Problem from "@/components/Problem";
import Service from "@/components/Service";
import Works from "@/components/Works";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statement />
        <Challenge />
        <Problem />
        <Service />
        <Works />
        <Company />
        <Contact />
      </main>
      <Footer />
      {/* スクロール演出（フェードイン・マーカー・線の描画）を全体に適用 */}
      <ScrollFx />
    </>
  );
}
