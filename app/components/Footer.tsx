import Link from "next/link";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-3 px-2 sm:px-8">
      <div className="grid gap-14 p-8 bg-brand rounded-2xl text-black">
        <div className="grid gap-5 sm:flex justify-between">
          <div className="flex gap-10 items-top">
            <div className="grid">
              <p className="text-xl mb-2">Follow me!</p>
              <Link href={"/"}>Github</Link>
              <Link href={"/"}>Blog</Link>
              <Link href={"/"}>Instagram</Link>
            </div>
            <button className="self-start text-xl border-black border-b">
              Send Mail
            </button>
          </div>
          <p className="text-sm sm:text-right">
            ⓒ 2024 YuChaeWon Portfolio
            <br />
            All Rights Reserved.
          </p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-5xl sm:text-8xl font-[family-name:var(--font-display)]">
            Tank you!
          </p>
          <button className="w-10 h-10 sm:w-14 sm:h-14 text-xl bg-black text-brand rounded-full">
            <FaArrowUpLong className="mx-auto" />
          </button>
        </div>
      </div>
    </footer>
  );
}
