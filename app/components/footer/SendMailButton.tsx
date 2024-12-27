import React from "react";
import Link from "next/link";
export default function SendMailButton() {
  return (
    <>
      <Link
        className="self-start text-xl border-background border-b"
        href={"mailto:ycahe1997@gmail.com"}
      >
        Send Mail
      </Link>
    </>
  );
}
