// Lightweight adaptation of Magic UI Blur Fade, listed on 21st.dev (MIT).
// Keeps the one-time reveal; replaces Motion, observers and blur with CSS.
// Content stays readable when animations are disabled. See docs/COMPONENTS.md.
import type { CSSProperties, ReactNode } from "react";
export function BlurFade({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
