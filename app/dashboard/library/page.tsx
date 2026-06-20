"use client";

import { interTight } from "@/app/fonts";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Trash2
} from "lucide-react";

export default function Library() {
    const [notes, setNotes] = useState<any[]>([]);
    const [selectedNote, setSelectedNote] = useState<any | null>(null);

    async function fetchNotes() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  setNotes(data || []);
}

async function handleDelete(id: string) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this note?"
  );

  if (!confirmDelete) return;

  const { error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    alert("Failed to delete note.");
    return;
  }

  if (selectedNote?.id === id) {
    setSelectedNote(null);
  }

  fetchNotes();
}

    useEffect(() => {
  fetchNotes();
}, []);

  return (
    <div className="notebook-bg min-h-screen bg-white p-9 md:p-12">
      <h1
        className={`${interTight.className} text-xl md:text-3xl font-bold text-blue-900`}
      >
        Library
      </h1>

      <div className="mt-8 grid gap-12 lg:grid-cols-3 lg:h-[calc(100vh-180px)]">
        
        {/* Left Panel */}
        <div className="rounded-3xl border border-gray-100 bg-blue-900 p-6 shadow-sm overflow-y-auto">
          {notes.map((note) => (
  <div
  key={note.id}
  onClick={() => setSelectedNote(note)}
  className="
    mb-3
    cursor-pointer
    rounded-2xl
    border
    border-blue-100
    p-3
    transition-all
    hover:bg-blue-800
    flex
    items-center
    justify-between
  "
>
  <p
    className={`${interTight.className} font-semibold text-white`}
  >
    {note.title}
  </p>

  <button
  onClick={(e) => {
    e.stopPropagation();
    handleDelete(note.id);
  }}
  className="
    rounded-lg
    p-1.5
    text-white/70
    hover:bg-red-500/20
    hover:text-red-300
    transition-all
    duration-200
  "
>
  <Trash2 size={16} />
</button>
</div>
))}
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-2 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm overflow-y-auto">
          {selectedNote ? (
  <>
    <h2
      className={`${interTight.className} text-2xl font-bold text-blue-900`}
    >
      {selectedNote.title}
    </h2>

    <div className="mt-6 text-gray-700">
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {selectedNote.content}
  </ReactMarkdown>
</div>
  </>
) : (
  <p
    className={`${interTight.className} text-center text-gray-400`}
  >
    Select a note to view.
  </p>
)}
        </div>

      </div>
    </div>
  );
}