"use client";

import { slideInWithScroll } from "@/animation/gsapAnimation";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import MarkDownViewer from "@/app/components/MarkDownViewer";

export default function About({ content }: { content: string }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current && divRef.current) {
      slideInWithScroll(imageRef, "left");
      slideInWithScroll(divRef, "right");
    }
  }, []);

  return (
    <section
      id="about"
      className="pt-32 flex gap-10 flex-col 2xl:flex-row lg:flex-row md:flex-col sm:flex-col"
    >
      <div ref={imageRef} className="mx-auto">
        <Image
          className="rounded-[30px]"
          src={"/images/me.jpg"}
          alt="me"
          width={340}
          height={450}
          priority
        />
      </div>
      <div
        ref={divRef}
        className="border border-brand flex-1 min-h-[450px] p-5 rounded-[30px]"
      >
        <MarkDownViewer content={content} fontSize={"text-lg"} />
      </div>
    </section>
  );
}
