import { Children } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
}

export default function TextMarkdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown
      className="space-y-3  p-2 rounded-lg"
      components={{
        ul: (props) => <ul className="list-inside list-disc" {...props} />,
        a: (props) => (
          <a className="text-green-500 underline" target="_blank" {...props} />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
