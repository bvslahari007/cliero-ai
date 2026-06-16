"use client";

import Image from "next/image";
import Link from "next/link";
import { instrumentSerif, interTight } from "@/app/fonts";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  NotebookPen,
  Library,
  Settings,
} from "lucide-react";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Sidebar() {
  const pathname = usePathname();
  const [fullName, setFullName] = useState("");
  const firstName = fullName.split(" ")[0];
  const [domain, setDomain] = useState(""); 

  async function fetchProfile() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data, error } = await supabase
    .from("profiles")
    .select("full_name, domain")
    .eq("user_id", user.id)
    .single();

  if (error) {
    console.log(error);
    return;
  }

  setFullName(data.full_name);
  setDomain(data.domain);
}

  useEffect(() => {
  fetchProfile();
}, []);



  const linkStyles = (href: string) =>
  `flex items-center gap-3 rounded-xl px-4 py-3 font-semibold transition-all duration-300 hover:translate-x-1 ${      pathname === href
        ? "bg-white text-blue-900 shadow-md"
        : "bg-blue-500/10 text-white hover:bg-white hover:text-blue-900"
    }`;

  return (
<aside className="flex h-screen w-60 flex-col bg-blue-900 text-white p-5">      
      {/* Logo Section */}
      <div className="mb-12 flex flex-col items-center">
        <Image
          src="/nav logo.png"
          alt="Cliero AI"
          width={150}
          height={50}
        />

        <p
          className={`${instrumentSerif.className} mt-3 text-center text-2xl text-white/60`}
        >
          Learn smarter.
          <br />
          Build stronger.
        </p>
      </div>

      {/* Main Navigation */}
      <nav className={`${interTight.className} flex flex-col gap-1`}>
        <Link href="/dashboard" className={linkStyles("/dashboard")}>
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/dashboard/ask-ai" className={linkStyles("/dashboard/ask-ai")}>
          <Sparkles size={18} />  
          Ask AI
        </Link>

        <Link href="/dashboard/notes" className={linkStyles("/dashboard/notes")}>
          <NotebookPen size={18} />
          Notes Generator
        </Link>

        <Link href="/dashboard/library" className={linkStyles("/dashboard/library")}>
          <Library size={18} />
          Library
        </Link>
      </nav>

      <div className={`${interTight.className} mt-22 border-t border-white/10 pt-4`}>
        <Link
  href="/dashboard/settings"
  className={`${linkStyles("/dashboard/settings")} flex items-center gap-2`}
>
  <Settings size={18} />
  Settings
</Link>
      </div>

      <div className={`${interTight.className} mt-auto`}>
  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm shadow-lg">
    
    <div className="flex items-center gap-3">
      
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-white
          text-blue-900
          text-lg
          font-bold
        "
      >
        {firstName ? firstName[0].toUpperCase() : "?"}
      </div>

      <div>
        <p className="font-semibold">
          {firstName || "Loading..."}
        </p>

        <p className="text-sm text-white/70">
          {domain || "Loading..."}
        </p>
      </div>

    </div>

  </div>
</div>

    </aside>
  );
}