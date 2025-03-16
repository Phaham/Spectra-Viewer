
import { Card } from "@/components/ui/card";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer animate-fade-in"
    >
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
      </div>
    </Card>
  );
};
