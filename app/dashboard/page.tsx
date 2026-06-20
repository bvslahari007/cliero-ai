import WelcomeSection from "@/components/dashboard/WelcomeSection";
import ActionCard from "@/components/dashboard/ActionCard";
import TipOfTheDay from "@/components/dashboard/TipOfTheDay";

import {
  Sparkles,
  NotebookPen,
  Library,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="notebook-bg min-h-screen">
      <WelcomeSection />
      <TipOfTheDay />
      <div className="grid gap-4 p-5 md:grid-cols-3">
        <ActionCard title="Ask AI" description="Beginner-friendly explanations, step-by-step breakdowns, and academic support - whenever a concept feels cloudy." link="/dashboard/ask-ai" icon={<Sparkles />} />
        <ActionCard
  title="Smart Notes Generator"
  description="Transform any topic into comprehensive study notes, thoughtfully curated to cover every aspect a student needs for learning, understanding, and revision."
  link="/dashboard/notes-generator"
  icon={<NotebookPen />}
/>
<ActionCard
  title="Library"
  description="Every concept you've explored and every note you've saved, organized in one calm place for focused learning and revision."
  link="/dashboard/library"
  icon={<Library />}
/>      </div>
      </div>
  );
}