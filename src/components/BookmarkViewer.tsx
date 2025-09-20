import { useState } from "react";
import { ViewToggle } from "./ViewToggle";
import { BookmarkGrid } from "./BookmarkGrid";
import { BookmarkGallery } from "./BookmarkGallery";
import { BookmarkCard } from "./BookmarkCard";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

type ViewMode = "grid" | "gallery" | "card";

// Mock bookmark data
const mockBookmarks = [
  {
    id: "1",
    text: "Just shipped a new feature! The dark mode toggle is now live 🌙",
    author: "John Developer",
    username: "@johndeveloper",
    timestamp: "2h",
    likes: 42,
    retweets: 12,
    hasImage: true,
  },
  {
    id: "2", 
    text: "Building in public is one of the best ways to grow your audience. Share your journey, the ups and downs, and people will connect with your story.",
    author: "Sarah Builder",
    username: "@sarahbuilder",
    timestamp: "4h",
    likes: 128,
    retweets: 34,
    hasImage: false,
  },
  {
    id: "3",
    text: "New blog post: 'How I built a Twitter bookmark manager in React' 📖",
    author: "Alex Coder",
    username: "@alexcoder",
    timestamp: "1d",
    likes: 89,
    retweets: 23,
    hasImage: true,
  },
];

export function BookmarkViewer() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [bookmarks] = useState(mockBookmarks);

  const renderView = () => {
    switch (viewMode) {
      case "grid":
        return <BookmarkGrid bookmarks={bookmarks} />;
      case "gallery":
        return <BookmarkGallery bookmarks={bookmarks} />;
      case "card":
        return <BookmarkCard bookmarks={bookmarks} />;
      default:
        return <BookmarkGrid bookmarks={bookmarks} />;
    }
  };

  return (
    <div className="flex-1 p-6">
      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Your Bookmarks</h2>
            <p className="text-muted-foreground flex items-center mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              {bookmarks.length} saved tweets
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="shadow-sm">
              <Upload className="h-4 w-4 mr-2" />
              Upload JSON
            </Button>
            <ViewToggle value={viewMode} onValueChange={setViewMode} />
          </div>
        </div>
      </div>
      
      <div className="w-full">
        {renderView()}
      </div>
    </div>
  );
}