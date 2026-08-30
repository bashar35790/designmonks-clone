import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ProjectsHeaderSection } from "@/components/projects/ProjectsHeaderSection";
import { LeadGenForm } from "@/components/sections/LeadGenForm";
import { projectsData } from "@/data/projects";
import React from "react";

export default function page() {
  return (
    <div>
      <ProjectsHeaderSection />
      <section className="min-h-screen text-white px-4 sm:px-8 py-12 max-w-7xl mx-auto">
        <ProjectsGrid projects={projectsData} />
      </section>
      <LeadGenForm />
    </div>
  );
}
