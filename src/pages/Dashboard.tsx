import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { BookmarkViewer } from "@/components/BookmarkViewer";
import { ExportPanel } from "@/components/ExportPanel";

type ActiveView = "bookmarks" | "export";

export default function Dashboard() {
  const [activeView, setActiveView] = useState<ActiveView>("bookmarks");

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full app-background flex">
        <AppSidebar activeView={activeView} onViewChange={setActiveView} />
        <main className="flex-1">
          {activeView === "bookmarks" ? <BookmarkViewer /> : <ExportPanel />}
        </main>
      </div>
    </SidebarProvider>
  );
}