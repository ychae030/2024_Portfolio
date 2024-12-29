"use client";

export default function ExternalLinkItem({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  return (
    <li
      onClick={() => window.open(path, "_blank")}
      className="hover-target flex gap-10 justify-between group"
    >
      {children}
    </li>
  );
}
