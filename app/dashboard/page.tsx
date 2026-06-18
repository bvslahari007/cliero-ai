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
        <ActionCard title="Smart Notes Generator" description="Turn any topic into structured study notes - summaries
formulas, worked examples, and revision points." link="/action" icon={<NotebookPen />} />
        <ActionCard title="Library" description="Every question you've asked and every note you've
made, saved and searchable in one calm place." link="/action" icon={<Library />} />
      </div>
      </div>
  );
}