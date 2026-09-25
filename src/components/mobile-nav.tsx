"use client";

import { useRef, type ReactNode } from "react";
import { Menu } from "lucide-react";

export function MobileNav({ children }: { children: ReactNode }) {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <details
      className="mobile-nav"
      ref={menu}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current?.open) {
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus({ preventScroll: true });
        }
      }}
    >
      <summary aria-label="Navigation menu">
        <Menu />
      </summary>
      <nav
        aria-label="Mobile"
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest("a") &&
            menu.current
          ) {
            menu.current.open = false;
          }
        }}
      >
        {children}
      </nav>
    </details>
  );
}
