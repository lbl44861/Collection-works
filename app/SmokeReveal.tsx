"use client";

import { useEffect, useRef, useState } from "react";

type SmokeRevealProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
};

export default function SmokeReveal({
  children,
  className = "",
  threshold = 0.35,
}: SmokeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold, rootMargin: "-10% 0px -10% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`${className} smokeReveal ${visible ? "is-visible" : ""}`.trim()}>
      {children}
    </div>
  );
}
