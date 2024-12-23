import React from "react";
import SocialLinks from "./SocialLinks";
import SendMailButton from "./SendMailButton";

export default function FooterTop() {
  return (
    <div className="grid gap-5 sm:flex justify-between">
      <div className="flex gap-10 items-top">
        <SocialLinks />
        <SendMailButton />
      </div>
      <p className="text-sm sm:text-right">
        ⓒ 2024 YuChaeWon Portfolio
        <br />
        All Rights Reserved.
      </p>
    </div>
  );
}
