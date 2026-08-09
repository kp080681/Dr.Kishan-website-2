"use client";

import { useId, useState, type ReactNode } from "react";

type ExpandablePanelProps = {
  children: ReactNode;
  className?: string;
  controlsClassName?: string;
  label: string;
  expandedLabel?: string;
};

export function ExpandablePanel({
  children,
  className,
  controlsClassName,
  label,
  expandedLabel,
}: ExpandablePanelProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={className}>
      <button
        type="button"
        className={`expandable-trigger ${controlsClassName ?? ""}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? expandedLabel ?? "Show less" : label}</span>
        <span className="expandable-trigger__mark" aria-hidden>
          {open ? "-" : "+"}
        </span>
      </button>
      <div id={id} className="expandable-panel__region" data-open={open ? "true" : "false"}>
        <div className="expandable-panel__inner">{children}</div>
      </div>
    </div>
  );
}
