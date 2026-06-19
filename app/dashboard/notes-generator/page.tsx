"use client";

import { useState } from "react";
import { interTight, instrumentSerif } from "@/app/fonts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { supabase } from "@/lib/supabase";

export default function NotesGenerator() {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

 async function handleSave() {
  if (!notes.trim()) return;

  setSaving(true);

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please sign in first.");
      return;
    }

    const { error } = await supabase
      .from("notes")
      .insert({
        user_id: user.id,
        title: topic,
        content: notes,
      });

    if (error) {
      throw error;
    }

    alert("Notes saved successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to save notes.");
  }

  setSaving(false);
}

  async function handleGenerate() {
  if (!topic.trim()) return;

  setLoading(true);

  try {
    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic,
      }),
    });

    const data = await response.json();

    setNotes(
      data.notes ||
      data.error ||
      "Failed to generate notes."
    );
  } catch (error) {
    console.error(error);

    setNotes(
      "Cliero AI is experiencing high demand right now. Please try again in a minute. 🚀"
    );
  }

  setLoading(false);
}

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
            onClick={handleGenerate}
            disabled={loading}
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
            {loading ? "Generating..." : "Generate Notes"}
          </button>
          <button
  onClick={handleSave}
  disabled={!notes || saving}
  className={`${interTight.className}
    mt-3
    w-full
    rounded-2xl
    border
    border-blue-900
    bg-white
    p-3
    font-medium
    text-blue-900
    transition-all
    duration-300
    hover:bg-blue-50
    hover:shadow-lg
    disabled:cursor-not-allowed
    disabled:opacity-50
  `}
>
  {saving ? "Saving..." : "Save Notes"}
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

          {notes ? (
<div
  className={`${interTight.className}
    prose
    text-blue-900
    prose-sm
    max-w-none
    prose-headings:text-blue-900
    prose-strong:text-blue-900
  `}
>
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {notes}
  </ReactMarkdown>
</div>
) : (
  <p
    className={`${interTight.className} mt-4 text-center text-gray-400`}
  >
    Your generated notes will appear here.
  </p>
)}
          
        </div>
      </div>
    </div>
  );
}