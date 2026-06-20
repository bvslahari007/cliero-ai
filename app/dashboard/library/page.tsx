"use client";

import { interTight } from "@/app/fonts";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Library() {
    const [notes, setNotes] = useState<any[]>([]);

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
    className="mb-3 rounded-2xl border border-blue-100 p-3"
  >
    <p className="font-semibold text-white">
      {note.title}
    </p>
  </div>
))}
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-2 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm overflow-y-auto">
          <p
            className={`${interTight.className} text-center text-gray-400`}
          >
            Select a note to view.
          </p>
        </div>

      </div>
    </div>
  );
}