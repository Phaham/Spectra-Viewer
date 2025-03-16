import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { CertificationModal } from "@/components/CertificationModal";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

// Sample certifications data - replace with your actual certifications
const certifications: Project[] = [
  {
    id: "cert1",
    title: "The Complete JavaScript Course",
    description: "Master JavaScript with the most comprehensive course. Includes projects like Forkify, Bankist, and more.",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.udemy.com/certificate/sample",
    codeLink: "",
    technologies: ["JavaScript", "ES6+", "OOP", "Async JS"],
  },
  {
    id: "cert2",
    title: "React - The Complete Guide",
    description: "Comprehensive guide to modern React, including Hooks, Redux, React Router, and more.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.udemy.com/certificate/sample",
    codeLink: "",
    technologies: ["React", "Redux", "React Router", "Hooks"],
  },
  {
    id: "cert3",
    title: "Node.js, Express, MongoDB & More",
    description: "Build complete backend APIs with Node.js, Express, MongoDB and more.",
    image: "https://images.unsplash.com/photo-1614064642761-694326f89512?q=80&w=1775&auto=format&fit=crop",
    link: "https://www.udemy.com/certificate/sample",
    codeLink: "",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
  }
];

const CERTS_PER_PAGE = 6;

const CertificationsPage = () => {
  const [selectedCertification, setSelectedCertification] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(certifications.length / CERTS_PER_PAGE);
  const startIndex = (currentPage - 1) * CERTS_PER_PAGE;
  const endIndex = startIndex + CERTS_PER_PAGE;
  const currentCertifications = certifications.slice(startIndex, endIndex);

  return (
    <>
      <main className="flex-1 container py-12 animate-fade-in">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            My Certifications
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentCertifications.map((certification) => (
            <ProjectCard
              key={certification.id}
              project={certification}
              onClick={() => setSelectedCertification(certification)}
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

        <CertificationModal
          certification={selectedCertification}
          isOpen={!!selectedCertification}
          onClose={() => setSelectedCertification(null)}
        />
      </main>
      <Footer />
    </>
  );
};

export default CertificationsPage;