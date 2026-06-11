"use client";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return(
        
        <div className="flex min-h-screen bg-blue-900">
            <aside className="hidden md:block border-r">
                <Sidebar />
            </aside>

            <main className="flex-1">
  <div className="md:hidden p-4">
    <button className="text-3xl text-white">
      ☰ 
    </button>
  </div>

  {children}
</main>
        </div>
    );
}
