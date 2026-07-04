'use client';

import { useId, type ReactNode } from 'react';

type DetailTipProps = {
  children: ReactNode;
  detail: string;
};

/**
 * Progressive disclosure (PRD 9.4): a key noun that reveals extra detail
 * in a tooltip on hover and on keyboard focus.
 */
export default function DetailTip({ children, detail }: DetailTipProps) {
  const tipId = useId();

  return (
    <span className="group relative inline-block">
      <span
        tabIndex={0}
        aria-describedby={tipId}
        className="cursor-help border-b border-dashed border-teal/60 text-ink outline-none focus-visible:border-solid"
      >
        {children}
      </span>
      <span
        id={tipId}
        role="tooltip"
        className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-[6px] border border-hairline bg-surface px-3 py-2 text-sm leading-snug text-ink opacity-0 shadow-lg transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
      >
        {detail}
      </span>
    </span>
  );
}
