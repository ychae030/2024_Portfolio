"use client"; // 클라이언트에서만 렌더링

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const [hoverText, setHoverText] = useState<string | null>(null);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorHover = document.querySelector(".cursor-hover");
    const hoverTargets = document.querySelectorAll(".hover-target");

    if (!cursor || !cursorHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2 });
      gsap.to(cursorHover, { x: e.clientX, y: e.clientY, duration: 0.4 });
    };

    const handleMouseEnter = () => {
      setHoverText("GitHub");
      gsap.to(cursorHover, {
        scale: 2.5,
        duration: 0.3,
      });
      cursorHover.classList.add("gradient");
    };

    const handleMouseLeave = () => {
      setHoverText(null);
      gsap.to(cursorHover, {
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        duration: 0.3,
      });
      cursorHover.classList.remove("gradient");
    };

    document.addEventListener("mousemove", handleMouseMove);
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor fixed top-0 left-0 w-4 h-4 bg-foreground rounded-full pointer-events-none z-50"></div>
      <div className="cursor-hover fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-40 flex justify-center items-center">
        {hoverText && (
          <span className="text-[7px] font-extrabold text-gray-800">
            {hoverText}
          </span>
        )}
      </div>
    </>
  );
}
