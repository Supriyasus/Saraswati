"use client";
import { useState } from "react";

export default function SmartImage({
  src,
  alt = "",
  className = "",
  disableRightClick = true
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      draggable="false"
      onLoad={() => setLoaded(true)}
      onContextMenu={
        disableRightClick ? (e) => e.preventDefault() : undefined
      }
      className={`
        ${className}
        transition-all duration-700 ease-out
        ${loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"}
      `}
    />
  );
}