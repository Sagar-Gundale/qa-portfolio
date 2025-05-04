import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project showcasing the key features and technologies used.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  link = "#",
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white"
    >
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border border-gray-200">
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex flex-wrap gap-1 mt-1">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-sm text-gray-600">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          {link && (
            <Button variant="outline" size="sm" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
