"use client";

import { useEffect } from "react";

/* Givee 風のスクロール演出。
   - Contact のまっすぐな線を、画面に入ったタイミングで描き始める
   - 黄色マーカーを、画面に入ったタイミングで左から引く
   - 各セクションの要素をフェード＋スライドインさせる
   - ファーストビューはページ表示時に段階的に登場させる
   動きが苦手な環境（prefers-reduced-motion）では静的表示にする。 */
export default function ScrollFx() {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Contact のまっすぐな線
    const linesWrap = document.querySelector<HTMLElement>(".ns-lines");
    if (linesWrap) {
      const paths = linesWrap.querySelectorAll<SVGPathElement>("path");
      if (!reduce) {
        const lio = new IntersectionObserver(
          (entries, io) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                paths.forEach((p) => {
                  p.style.animationPlayState = "running";
                });
                io.disconnect();
              }
            });
          },
          { threshold: 0.3 }
        );
        lio.observe(linesWrap);
        observers.push(lio);
      } else {
        paths.forEach((p) => {
          p.style.animationPlayState = "running";
        });
      }
    }

    // reduced-motion のときはマーカーを即表示して終了
    if (reduce) {
      document
        .querySelectorAll(".ns-marker")
        .forEach((el) => el.classList.add("ns-on"));
      return () => observers.forEach((io) => io.disconnect());
    }

    // 黄色マーカー
    const mio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("ns-on");
            mio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll(".ns-marker").forEach((el) => mio.observe(el));
    observers.push(mio);

    // 各セクションの要素をフェード＋スライドイン
    const items: [HTMLElement, number][] = [];
    document.querySelectorAll("section").forEach((sec) => {
      if (sec.id === "top") return;
      const els = Array.from(
        sec.querySelectorAll<HTMLElement>(
          ".ns-sechead, h2, p, img, ul, .ns-card, .ns-step, .ns-rv"
        )
      ).filter((el) => {
        const box = el.closest(".ns-card, .ns-step");
        return !box || box === el;
      });
      els.forEach((el, i) => items.push([el, Math.min(i * 0.07, 0.45)]));
    });

    const rio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            rio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    items.forEach(([el, d]) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(26px)";
      el.style.transition = `opacity .8s ease ${d}s, transform .8s cubic-bezier(.22,1,.36,1) ${d}s`;
      rio.observe(el);
    });
    observers.push(rio);

    // ファーストビューの段階登場
    const hero = document.querySelector<HTMLElement>("#top");
    if (hero) {
      const seq = Array.from(
        hero.querySelectorAll<HTMLElement>(
          ".ns-sechead, h1, p, .ns-hero-btns, .ns-hero-motif"
        )
      ).sort(
        (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
      );
      seq.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition = `opacity .9s ease ${0.08 * i}s, transform .9s cubic-bezier(.22,1,.36,1) ${0.08 * i}s`;
      });
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          seq.forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          });
        })
      );
    }

    return () => observers.forEach((io) => io.disconnect());
  }, []);

  return null;
}
