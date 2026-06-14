"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";



export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        
        <div className="flex min-h-screen bg-blue-900">
            <aside className="hidden md:block border-r">
                <Sidebar />
            </aside>

            <main className="flex-1">
  <div className="md:hidden p-4">
    <button className="text-3xl text-white" onClick={() => setIsOpen(true)}>
      {isOpen ? <XIcon size={32} /> : <Menu size={32} />}
    </button>
    {isOpen && (
  <div className="fixed inset-0 z-50 flex">
    
    {/* Dark Background */}
    <div
      className="absolute inset-0 bg-black/50"
      onClick={() => setIsOpen(false)}
    />

    {/* Sidebar */}
    <div className="relative w-64 bg-blue-900">
      <Sidebar />

      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
    </div>

  </div>
)}
  </div>

  {children}
</main>
        </div>
    );
}
