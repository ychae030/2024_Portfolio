import React from "react";

const PARA: string[] = ["I create Modern,", "resposive Website"];
const HEADING: string[] = [
  "Frontend developer",
  "crafting modern,",
  "responsive websites",
];
const renderSpans = (items: string[]) =>
  items.map((item, index) => (
    <span className="text-center" key={index}>
      {item}
    </span>
  ));

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen">
      <p className="grid py-24">{renderSpans(PARA)}</p>
      <h2 className="grid justify-center text-display text-brand font-[family-name:var(--font-display)]">
        {renderSpans(HEADING)}
      </h2>
    </section>
  );
}
