import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import type { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: "1",
    title: "TripHive - Travel Planner",
    description: "A full stack booking web application with features like user authentication, booking tours, stripe payment gateway, and reviews system. Experience seamless travel planning with integrated payment processing.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    link: "https://triphive-aqkd.onrender.com/",
    codeLink: "https://github.com/Phaham/TripHive-Travel-planner",
    technologies: ["Node.js", "MongoDB", "Express.js", "REST APIs", "Stripe"],
  },
  {
    id: "2",
    title: "Quizzer | React Quiz App",
    description: "A Trivia Quiz application featuring a vast category of topics, time-bounded questions, and detailed analysis of results. Test your knowledge across multiple subjects!",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
    link: "https://quizzer24.netlify.app/",
    codeLink: "https://github.com/Phaham/Quiz-App",
    technologies: ["React.js", "Open Trivia API", "CSS"],
  },
  {
    id: "4",
    title: "Forkify",
    description: "A recipe search engine application that allows users to search for recipes, save them to their favorites, and create shopping lists. Integrated with the forkify API for recipe data.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2080&auto=format&fit=crop",
    link: "https://forkifyfast.netlify.app/",
    codeLink: "https://github.com/Phaham/Forkify",
    technologies: ["HTML", "CSS", "JavaScript", "REST APIs"],
  },
  {
    id: "3",
    title: "Bank App",
    description: "A banking application simulation featuring money transfer and loan facilities. Built during JavaScript learning with Jonas Schmedtmann's course.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2069&auto=format&fit=crop",
    link: "https://banksapp.netlify.app/",
    codeLink: "https://github.com/Phaham/Bank-App",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "5",
    title: "Track Your Workout",
    description: "A workout tracking platform where you can track your workouts around the world. Features an interactive map interface using the Leaflet library.",
    image: "https://plus.unsplash.com/premium_vector-1720622697702-615a7cb1cdc2?q=80&w=1800&auto=format&fit=crop",
    link: "https://trackworkouts.netlify.app/",
    codeLink: "https://github.com/Phaham/Mapty",
    technologies: ["HTML", "CSS", "JavaScript", "Leaflet"],
  },
  {
    id: "6",
    title: "Plan Your Food",
    description: "A frontend project for creating personalized diet plans. Features a modern and intuitive interface for meal planning and nutrition tracking.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
    link: "https://planyourfood.netlify.app/",
    codeLink: "https://github.com/Phaham/Omnifood",
    technologies: ["HTML", "CSS", "JavaScript"],
  }
];

const PROJECTS_PER_PAGE = 6;

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  return (
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
      <main className="flex-1 container py-12 animate-fade-in">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            My Practice Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development and design.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        )}

        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
