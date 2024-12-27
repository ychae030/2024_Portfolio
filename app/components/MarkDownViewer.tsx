import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
  fontSize: string;
};

export default function MarkDownViewer({
  content,
  fontSize = "text-md",
}: Props) {
  return (
    <Markdown
      className="prose max-w-full text-foreground"
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ ...props }) => <p className={`${fontSize}`} {...props} />,
        strong: ({ ...props }) => <strong className="text-brand" {...props} />,
      }}
    >
      {content}
    </Markdown>
  );
}
