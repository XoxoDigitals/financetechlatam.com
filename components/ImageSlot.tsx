"use client";

import Image from "next/image";
import { css } from "@/lib/css";
import { color } from "@/lib/theme";

/**
 * Replacement for the design's <image-slot> placeholder. If an image with the
 * slot's id exists in /public/images it is shown; otherwise a labelled
 * placeholder is rendered (matching the original's empty-slot look).
 */
export function ImageSlot({
  id,
  src,
  alt = "",
  placeholder,
}: {
  id: string;
  src?: string; // e.g. "/images/ftl-about-office.webp"
  alt?: string;
  placeholder?: string;
}) {
  if (src) {
    return (
      <div style={css("position:relative;width:100%;height:100%")}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 720px) 100vw, 50vw"
          style={css("object-fit:cover")}
        />
      </div>
    );
  }

  return (
    <div
      aria-label={placeholder}
      style={{
        ...css(
          "width:100%;height:100%;display:grid;place-items:center;text-align:center;padding:24px"
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
