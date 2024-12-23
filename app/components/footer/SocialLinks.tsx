import Link from "next/link";
import React from "react";

const socialLinks = [
  { name: "Github", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Instagram", href: "/" },
];

export default function SocialLinks() {
  return (
    <div className="grid">
      <p className="text-xl mb-2">Follow me!</p>
      {socialLinks.map(({ name, href }) => (
        <Link key={name} href={href}>
          {name}
        </Link>
      ))}
    </div>
  );
}
