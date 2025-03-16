
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-soft-bg">
      <div className="container py-8">
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/phaham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-soft-text transition-colors duration-200 hover:text-foreground"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/phaham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-soft-text transition-colors duration-200 hover:text-foreground"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:phahamkhan17@gmail.com"
            className="text-soft-text transition-colors duration-200 hover:text-foreground"
          >
              <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-black text-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                phahamkhan17@gmail.com
             </span>
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
