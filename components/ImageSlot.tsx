"use client";

import Image from "next/image";
import { css } from "@/lib/css";
import { color } from "@/lib/theme";

/**
 * Parent must be position:relative with an explicit size (height, min-height,
 * or aspect-ratio). The image fills that box — percentage height alone does
 * not work against min-height parents.
 */
export function ImageSlot({
  id,
  src,
  alt = "",
  placeholder,
}: {
  id: string;
  src?: string;
  alt?: string;
  placeholder?: string;
}) {
  if (src) {
    return (
      <div style={css("position:absolute;inset:0")}>
        <Image
          src={src}
          alt={alt || id}
          fill
          sizes="(max-width: 720px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }

  return (
    <div
      aria-label={placeholder}
      style={{
        ...css(
          "position:absolute;inset:0;display:grid;place-items:center;text-align:center;padding:24px"
        ),
        background: color.blueSoft,
        border: `1px dashed ${color.blue}55`,
        color: color.blue,
      }}
    >
      <span style={css("font-size:13px;font-weight:600;opacity:0.85")}>
        {placeholder || id}
      </span>
    </div>
  );
}
