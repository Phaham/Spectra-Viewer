import { Link, useLocation } from "react-router-dom";
import { Book, BookOpen } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="bg-background/95 backdrop-blur-md sticky top-0 z-40 w-full border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-center sm:justify-start">
        <div className="flex space-x-8 text-sm font-medium">
          <Link
            to="/practice-projects"
            className={`flex items-center gap-2 transition-colors hover:text-primary ${
              path === "/" || path === "/practice-projects" 
                ? "text-primary border-b-2 border-primary" 
                : "text-muted-foreground"
            }`}
          >
            <Book className="h-4 w-4" />
            <span>Practice Projects</span>
          </Link>
          <Link
            to="/certifications"
            className={`flex items-center gap-2 transition-colors hover:text-primary ${
              path === "/certifications" 
                ? "text-primary border-b-2 border-primary" 
                : "text-muted-foreground"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Certifications</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};