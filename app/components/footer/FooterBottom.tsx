import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";

export default function FooterBottom() {
  return (
    <div className="flex justify-between items-end">
      <p className="text-5xl sm:text-8xl font-[family-name:var(--font-display)]">
        Tank you!
      </p>
      <ScrollToTopButton />
    </div>
  );
}
