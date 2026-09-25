"use client";

import Link from "next/link";
import Image from "next/image";
import { css } from "@/lib/css";

/** Brand mark — network icon + FINANCETECH GROUP wordmark (no LATAM). */
export function BrandLogo({
  href = "/",
  size = "md",
}: {
  href?: string;
  size?: "sm" | "md" | "lg";
}) {
  const mark = size === "sm" ? 28 : size === "lg" ? 44 : 36;
  const wordH = size === "sm" ? 22 : size === "lg" ? 34 : 28;

  return (
    <Link
      href={href}
      style={css(
        "display:flex;align-items:center;gap:10px;flex:0 0 auto;text-decoration:none"
      )}
      aria-label="Financetech Group"
    >
      <span
        style={{
          position: "relative",
          width: mark,
          height: mark,
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/logo-mark-network.png"
          alt=""
          fill
          sizes={`${mark}px`}
          style={{ objectFit: "contain" }}
          priority
        />
      </span>
      <span
        style={{
          position: "relative",
          height: wordH,
          width: size === "sm" ? 130 : size === "lg" ? 200 : 168,
        }}
      >
        <Image
          src="/images/logo-financetech-group.png"
          alt="Financetech Group"
          fill
          sizes="200px"
          style={{ objectFit: "contain", objectPosition: "left center" }}
          priority
        />
      </span>
    </Link>
  );
}
