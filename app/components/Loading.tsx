"use client";
import { LoadingCount } from "@/animation/gsapAnimation";

import { useEffect, useRef, useState } from "react";

export default function Loading() {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    LoadingCount(setCount);
  }, []);

  return (
    <div className="fixed inset-0 justify-end flex bg-background font-[family-name:var(--font-display)]">
      <div
        ref={countRef}
        className="self-end p-4 text-brand text-9xl font-bold"
      >
        {count}%
      </div>
    </div>
  );
}
