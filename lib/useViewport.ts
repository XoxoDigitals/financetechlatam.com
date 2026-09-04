"use client";

import { useEffect, useState } from "react";

/**
 * Tracks viewport width so components can reproduce the design's width-aware
 * layout logic (e.g. the responsive stat-bar dividers). Desktop-first initial
 * value keeps SSR/first paint stable; it corrects on mount.
 */
export function useViewport() {
  const [w, setW] = useState(1440);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return { w, sm: w < 720, md: w < 1080 };
}

/**
 * Divider/padding style for a cell in a horizontal stat bar that reflows to
 * fewer columns on smaller screens. Uses left/top borders (not right) so a
 * stacked column never shows a floating vertical tick. Ported from the design.
 */
export function statCell(
  i: number,
  sm: boolean,
  md: boolean,
  opts?: { cols?: number; border?: string }
) {
  const cols = opts?.cols ?? (sm ? 1 : md ? 2 : 4);
  const border = opts?.border ?? "rgba(12,21,36,0.10)";
  const first = i % cols === 0;
  const row = Math.floor(i / cols);
  const p = "clamp(26px,3vw,34px)";
  const g = "clamp(16px,2.4vw,28px)";
  return (
    "padding:" + p + " " + g + " " + p + " " + (first ? "0" : g) +
    (first ? "" : ";border-left:1px solid " + border) +
    (row > 0 ? ";border-top:1px solid " + border : "")
  );
}
