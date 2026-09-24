// Adapted from Magic UI's Interactive Hover Button, discovered on 21st.dev.
// MIT: docs/MAGIC-UI-LICENSE.txt. Uses anchor semantics for navigation.
import type { AnchorHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../utils";
export function InteractiveHoverButton({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn("interactive-button group", className)} {...props}>
      <span className="button-dot" aria-hidden="true" />
      <span className="relative z-10">{children}</span>
      <ArrowRight
        size={18}
        className="relative z-10 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}
