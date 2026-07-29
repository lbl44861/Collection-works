"use client";

import { useEffect } from "react";

export default function PointerGlow() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let x = -400;
    let y = -400;

    const paint = () => {
      root.style.setProperty("--pointer-x", `${x}px`);
      root.style.setProperty("--pointer-y", `${y}px`);
      frame = 0;
    };

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      root.style.setProperty("--pointer-opacity", "1");
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const leave = () => root.style.setProperty("--pointer-opacity", "0");

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
