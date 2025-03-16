
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 rounded-xl animate-scale-in overflow-hidden">
        <ScrollArea className="h-full max-h-[90vh]">
          <div className="h-[40vh] w-full">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold tracking-tight">
                {project.title}
              </DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-2">
              <Button
                asChild
                className="inline-flex items-center gap-2"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="inline-flex items-center gap-2"
              >
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  View Code <Code className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
