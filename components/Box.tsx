"use client";

import React, { useState } from "react";
import { sx } from "@/lib/css";
import type { CSSProperties } from "react";

type BoxProps = Omit<React.HTMLAttributes<HTMLDivElement>, "style"> & {
  /** Base styles: a CSS string ("display:flex;gap:8px") or a style object. */
  s?: string | CSSProperties;
  /** Styles merged in while hovered (replaces the design's `style-hover`). */
  hover?: string | CSSProperties;
  as?: keyof JSX.IntrinsicElements;
};

/**
 * A div (or other tag) that applies `hover` styles on mouse-over. Lets pages
 * keep the design's inline-style + style-hover pattern with minimal noise.
 */
export function Box({ s, hover, as = "div", children, ...rest }: BoxProps) {
  const [h, setH] = useState(false);
  const Tag = as as any;
  return (
    <Tag
      {...rest}
      style={sx(s, h && hover ? hover : undefined)}
      onMouseEnter={(e: any) => {
        setH(true);
        rest.onMouseEnter?.(e);
      }}
      onMouseLeave={(e: any) => {
        setH(false);
        rest.onMouseLeave?.(e);
      }}
    >
      {children}
    </Tag>
  );
}
