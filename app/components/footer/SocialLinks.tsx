import Link from "next/link";
import React from "react";

const socialLinks = [
  { name: "Github", href: "https://github.com/ychae030" },
  { name: "Blog", href: "https://velog.io/@ychae1997/posts" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/%EC%B1%84%EC%9B%90-%EC%9C%A0-9a316827a/",
  },
];

export default function SocialLinks() {
  return (
    <div className="grid">
      <p className="text-xl mb-2">Follow me!</p>
      {socialLinks.map(({ name, href }) => (
        <Link key={name} href={href} target="_blank">
          {name}
        </Link>
      ))}
    </div>
  );
}
