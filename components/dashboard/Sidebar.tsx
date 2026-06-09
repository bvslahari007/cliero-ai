"use client";

import Image from "next/image";
import Link from "next/link";
import { instrumentSerif, interTight } from "@/app/fonts";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-60 flex-col bg-blue-900 text-white p-5">
      
      {/* Logo Section */}
      <div className="mb-12 items-center flex flex-col">
        <Image
          src="/nav logo.png"
          alt="Cliero AI"
          width={150}
          height={50}
        />

        <p className={`${instrumentSerif.className} mt-3 text-2xl text-white/60`}>
          Learn smarter. <br></br>Build stronger.
        </p>
      </div>

      {/* Navigation */}
      <nav className={`${interTight.className} flex flex-col gap-2`}>
        <Link
          href="/dashboard"
          className="rounded-xl bg-blue-500/10 px-4 py-3 text-base font-semibold transition-all  duration-300 hover:bg-white/100 hover:text-blue-900 hover:shadow-md hover:translate-x-1"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/ask-ai"
          className="rounded-xl bg-blue-500/10 px-4 py-3 text-base font-semibold transition-all duration-300 hover:bg-white/100 hover:text-blue-900 hover:shadow-md hover:translate-x-1"
        >
          Ask AI
        </Link>

        <Link
          href="/dashboard/notes"
          className="rounded-xl bg-blue-500/10 px-4 py-3 text-base font-semibold transition-all duration-300 hover:bg-white/100 hover:text-blue-900 hover:shadow-md hover:translate-x-1"
        >
          Notes Generator
        </Link>

        <Link
          href="/dashboard/library"
          className="rounded-xl bg-blue-500/10 px-4 py-3 text-base font-semibold transition-all duration-300 hover:bg-white/100 hover:text-blue-900 hover:shadow-md hover:translate-x-1"
        >
          Library
        </Link>
      </nav>

      {/* User Card */}
      <div className={`${interTight.className} mt-auto`}>
        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm shadow-md">
          <p className="font-semibold">USERNAME</p>
          <p className="text-sm text-white/70">
            BRANCH
          </p>
        </div>
      </div>

    </aside>
  );
}