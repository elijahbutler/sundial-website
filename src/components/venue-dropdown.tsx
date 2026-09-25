"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function VenueDropdown({ children }: { children: ReactNode }) {
  const dropdown = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !dropdown.current?.contains(event.target) &&
        dropdown.current
      ) {
        dropdown.current.open = false;
      }
    }
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  return (
    <details
      className="venue-dropdown"
      ref={dropdown}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          event.currentTarget.open = false;
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && dropdown.current?.open) {
          event.stopPropagation();
          dropdown.current.open = false;
          dropdown.current.querySelector("summary")?.focus({ preventScroll: true });
        }
      }}
    >
      <summary>
        For venues <ChevronDown size={15} aria-hidden="true" />
      </summary>
      <div
        className="venue-dropdown-panel"
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest("a") &&
            dropdown.current
          ) {
            dropdown.current.open = false;
          }
        }}
      >
        {children}
      </div>
    </details>
  );
}
