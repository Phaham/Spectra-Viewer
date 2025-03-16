import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import ProjectsPage from "@/pages/ProjectsPage";
import CertificationsPage from "@/pages/CertificationsPage";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <div className="animated-background" />
        <div className="container relative">
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 right-4 z-50"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/practice-projects" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;