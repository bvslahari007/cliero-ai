import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({
  content,
}: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-3xl font-bold text-blue-900">
            {children}
          </h1>
        ),

        h2: ({ children }) => (
          <h2 className="mt-6 mb-3 text-2xl font-bold text-blue-900">
            {children}
          </h2>
        ),

        h3: ({ children }) => (
          <h3 className="mt-4 mb-2 text-xl font-semibold text-blue-900">
            {children}
          </h3>
        ),

        p: ({ children }) => (
          <p className="mb-3 leading-relaxed text-gray-700">
            {children}
          </p>
        ),

        ul: ({ children }) => (
          <ul className="mb-3 list-disc pl-6 text-gray-700">
            {children}
          </ul>
        ),

        ol: ({ children }) => (
          <ol className="mb-3 list-decimal pl-6 text-gray-700">
            {children}
          </ol>
        ),

        strong: ({ children }) => (
          <strong className="font-bold text-blue-900">
            {children}
          </strong>
        ),

        code: ({ children }) => (
          <code className="rounded bg-blue-50 px-1 py-0.5 text-sm text-blue-900">
            {children}
          </code>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}