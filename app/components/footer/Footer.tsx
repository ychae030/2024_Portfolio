import React from "react";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <footer id="footer" className="py-3 px-2 relative z-0 sm:px-8">
      <div className="grid gap-14 p-8 bg-brand rounded-2xl text-background">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
}
