"use client";

import { useState } from "react";
import { interTight, instrumentSerif } from "@/app/fonts";

export default function NotesGenerator() {
  const [topic, setTopic] = useState("");

  return (
    <div className="notebook-bg min-h-screen bg-white p-9 md:p-12">
      <h1
        className={`${interTight.className} text-xl md:text-3xl font-bold text-blue-900`}
      >
        Notes Generator
      </h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-3 lg:h-[calc(100vh-180px)]">
        {/* Left Panel */}
<div className="h-fit rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">          <p
            className={`${interTight.className} mt-2 text-sm text-gray-500`}
          >
            Enter any topic and Cliero will create structured study notes for
            you.
          </p>

          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Indus Valley Civilization (IVC)"
            rows={1}
            className={`${interTight.className}
              mt-4
              w-full
              rounded-2xl
              border
              border-blue-200
              p-4
              text-gray-900
              resize-none
              focus:outline-none
              focus:ring-2
              focus:ring-blue-800
            `}
          />

          <button
            className={`${interTight.className}
              mt-4
              w-full
              rounded-2xl
              bg-blue-900
              p-3
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-blue-700
              hover:shadow-lg
            `}
          >
            Generate Notes
          </button>
          <p
            className={`${interTight.className} mt-4 mb-3 text-center text-xs text-gray-400`}
          >
            Cliero AI may occasionally make mistakes in notes generation. Verify important
            information.
          </p>
        </div>

        {/* Right Panel */}
        <div className="h-full lg:col-span-2 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm overflow-y-auto">
          <h2
            className={`${instrumentSerif.className} text-3xl text-blue-900`}
          >
            Generated Notes
          </h2>

          <p
            className={`${interTight.className} mt-4 text-center text-gray-400`}
          >
            Your generated notes will appear here.
          </p>
          
        </div>
      </div>
    </div>
  );
}