"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import useSectionOffset from "@/hooks/useSectionOffset";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const MENU: string[] = ["home", "about", "projects"];
  const sections = useSectionOffset(MENU);
  const scrollPosition = useScrollPosition();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const currentSection = sections?.find(
      ({ offsetTop, height }) =>
        scrollPosition >= offsetTop && scrollPosition <= offsetTop + height
    );

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  }, [scrollPosition, sections]);

  return (
    <div className="bg-brand fixed bottom-8 left-1/2 -translate-x-1/2 gap-5 flex py-2 px-6 rounded-full text-sm">
      {MENU.map((id) => (
        <Link
          className={`${
            activeSection === id
              ? "text-foregroud font-bold"
              : "text-background"
          } hover:text-foreground uppercase`}
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {id}
        </Link>
      ))}
    </div>
  );
}
