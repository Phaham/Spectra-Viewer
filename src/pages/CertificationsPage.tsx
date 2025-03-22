import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { CertificationModal } from "@/components/CertificationModal";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

// Sample certifications data - replace with your actual certifications
const certifications: Project[] = [
  {
    "id": "cert2",
    "title": "Introduction to C++",
    "description": "Certification for successfully completing the Introduction to C++ course.",
    "image": "/images/cpp2.png",
    "link": "https://certificate.codingninjas.com/verify/9f0cdab50eb5c785",
    "codeLink": "",
    "technologies": ["C++", "Programming Basics"]
  },
  {
    "id": "cert3",
    "title": "Data Structures in C++",
    "description": "Certification for successfully completing Data Structures in C++.",
    "image": "/images/dsa2.png",
    "link": "https://certificate.codingninjas.com/verify/72509b5e26bef8d6",
    "codeLink": "",
    "technologies": ["C++", "Data Structures"]
  },
  {
    "id": "cert4",
    "title": "Operating Systems",
    "description": "Certification for successfully completing the Operating Systems course.",
    "image": "/images/os.png",
    "link": "certificate.codingninjas.com/verify/b6685ca35f1a49b4",
    "codeLink": "",
    "technologies": ["Operating Systems", "Memory Management"]
  },
  {
    "id": "cert5",
    "title": "System Design",
    "description": "Certification for successfully completing the System Design course.",
    "image": "/images/sd.png",
    "link": "certificate.codingninjas.com/verify/ec8808e4d79b4023",
    "codeLink": "",
    "technologies": ["System Design", "Scalability"]
  },
  {
    "id": "cert7",
    "title": "The Complete JavaScript Course",
    "description": "Certification for successfully completing The Complete JavaScript Course 2022.",
    "image": "/images/js.png",
    "link": "https://www.udemy.com/certificate/UC-941ffa58-e5a7-41a3-a656-cc4d7ca125c5/",
    "codeLink": "",
    "technologies": ["JavaScript", "ES6+", "OOP", "Async JS"]
  },
  {
    "id": "cert8",
    "title": "Node.js, Express, MongoDB & More",
    "description": "Certification for successfully completing the Node.js, Express, MongoDB Bootcamp 2023.",
    "image": "/images/node.png",
    "link": "https://www.udemy.com/certificate/UC-6399fd0e-4c10-4fe7-a052-c3a5c8d86348/",
    "codeLink": "",
    "technologies": ["Node.js", "Express", "MongoDB", "Mongoose"]
  },
  {
    "id": "cert6",
    "title": "Build Responsive Real-World Websites with HTML and CSS",
    "description": "Certification for successfully completing the web development course.",
    "image": "/images/html.png",
    "link": "ude.my/UC-1842478c-a9b3-48b5-bd59-3051276767fa",
    "codeLink": "",
    "technologies": ["HTML", "CSS", "Responsive Design"]
  },
  {
    "id": "cert9",
    "title": "Introduction to Career Skills in Software Development",
    "description": "Certification for successfully completing the LinkedIn Learning course on career skills in software development.",
    "image": "/images/sd1.png",
    "link": "https://drive.google.com/drive/u/1/folders/1iZQY8NKm2AMC3VmdYQxIR-hSZRzvfL82",
    "codeLink": "",
    "technologies": ["Career Development", "Software Engineering"]
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