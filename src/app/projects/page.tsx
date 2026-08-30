import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectsHeaderSection } from "@/components/projects/ProjectsHeaderSection";
import { LeadGenForm } from "@/components/sections/LeadGenForm";
import { projectsData } from "@/data/projects";
import React from "react";

export default function page() {
  return (
    <div>
      <ProjectsHeaderSection />
      <section className="min-h-screen text-white px-4 sm:px-8 py-12 max-w-7xl mx-auto">
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <LeadGenForm />
    </div>
  );
}
