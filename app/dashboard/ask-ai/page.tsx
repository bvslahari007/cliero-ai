"use client";

import { interTight } from "@/app/fonts";
import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { supabase } from "@/lib/supabase";

export default function AskAI() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<
    { role: string; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Let's make today productive. What would you like to learn?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  async function handleSend() {
  if (!input.trim()) return;

  const userMessage = {
    role: "user",
    content: input,
  };

  setMessages((prev) => [...prev, userMessage]);

  const currentInput = input;

  setInput("");
  setLoading(true);

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: currentInput,
        userId: user?.id,
      }),
    });

    const data = await response.json();

    const aiMessage = {
      role: "assistant",
      content:
        data.reply ||
        data.error ||
        "No response received.",
    };

    setMessages((prev) => [...prev, aiMessage]);
  } catch (error) {
    console.error(error);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "Something went wrong. Please try again in a moment.",
      },
    ]);
  }

  setLoading(false);
}


  return (
    <div className="notebook-bg min-h-screen bg-white p-9 md:p-12">
      <h1
        className={`${interTight.className} text-xl md:text-3xl font-bold text-blue-900`}
      >
        Ask AI
      </h1>

      <div
  className="
    mt-2
    flex
    flex-col
    h-[calc(100vh-140px)]
  "
>
        {/* Messages */}
        <div
          className={`${interTight.className} flex-1 overflow-y-auto p-4`}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.role === "user"
                  ? "mt-4 flex justify-end"
                  : "mt-4"
              }
            >
              <div
                className={
                  message.role === "user"
                    ? `
                      max-w-xl
                      rounded-2xl
                      bg-blue-900
                      px-5
                      py-3
                      text-white
                      shadow-sm
                    `
                    :
                       ` max-w-3xl rounded-2xl bg-blue-50 p-5 shadow-sm break-words overflow-hidden`
                }
              >
                <p
                  className={
                    message.role === "user"
                      ? "mb-1 text-xs font-semibold text-white/70"
                      : "font-bold text-sm md:text-base text-blue-900"
                  }
                >
                  {message.role === "user"
                    ? "You"
                    : "Cliero AI"}
                </p>

                <div
                  className={
                    message.role === "user"
                      ? "text-sm md:text-base"
                      : "mt-1 text-gray-700"
                  }
                >
                  <div className="mt-1 text-gray-700">
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-semibold text-blue-900 mt-4 mb-2">
          {children}
        </h3>
      ),
      p: ({ children }) => (
        <p className="mb-3 leading-relaxed">
          {children}
        </p>
      ),
      ul: ({ children }) => (
        <ul className="list-disc pl-6 mb-3">
          {children}
        </ul>
      ),
      ol: ({ children }) => (
        <ol className="list-decimal pl-6 mb-3">
          {children}
        </ol>
      ),
      strong: ({ children }) => (
        <strong className="font-bold text-blue-900">
          {children}
        </strong>
      ),
    }}
  >
    {message.content}
  </ReactMarkdown>
</div>
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="mt-4 max-w-3xl rounded-2xl bg-blue-50 p-5 shadow-sm">
              <p className="font-bold text-sm md:text-base text-blue-900">
                Cliero AI
              </p>

              <p className="mt-1 text-sm md:text-base text-gray-700">
                Thinking...
              </p>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t p-4">
          <p
            className={`${interTight.className} mb-3 text-center text-xs text-gray-400`}
          >
            Cliero AI may occasionally make mistakes. Verify important
            information.
          </p>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ask your doubts here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              className={`${interTight.className}
                flex-1
                text-sm md:text-base
                text-blue-900
                rounded-2xl
                border
                border-blue-200
                bg-white
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue-800
              `}
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <Image
                className="hover:scale-110 transition-all duration-300"
                src="/send-button.png"
                alt="Send Arrow"
                width={50}
                height={50}
              />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}