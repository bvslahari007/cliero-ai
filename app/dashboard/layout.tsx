"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";

export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return(
        <div className="flex min-h-screen">
            <aside className="hidden md:block border-r">
                <Sidebar />
            </aside>

            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
