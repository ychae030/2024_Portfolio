"use client";

import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className="w-10 h-10 sm:w-14 sm:h-14 text-xl bg-background text-brand rounded-full"
    >
      <FaArrowUpLong className="mx-auto" />
    </button>
  );
}
