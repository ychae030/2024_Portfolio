import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function FooterBottom() {
  return (
    <div className="flex justify-between items-end">
      <p className="text-5xl sm:text-8xl font-[family-name:var(--font-display)]">
        Tank you!
      </p>
      <button className="w-10 h-10 sm:w-14 sm:h-14 text-xl bg-background text-brand rounded-full">
        <FaArrowUpLong className="mx-auto" />
      </button>
    </div>
  );
}
