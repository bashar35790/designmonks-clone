"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Project } from "@/data/projects";

const PAGE_SIZE = 6;

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Explore All");
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const allCats = projects.map((project) => project.category);
    return ["Explore All", ...Array.from(new Set(allCats))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Explore All") return projects;
    return projects.filter(
      (project) => project.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory, projects]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginatedProjects = useMemo(
    () =>
      filteredProjects.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
      ),
    [filteredProjects, currentPage]
  );

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  return (
    <div ref={gridRef} className="space-y-10 scroll-mt-24">
      {/* Category Filter Bar */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 scroll-smooth">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => selectCategory(category)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-[#7c4dff] text-white"
                  : "bg-[#f4f4f5] text-zinc-900 hover:bg-zinc-200"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-zinc-400">
          No projects found in &apos;{selectedCategory}&apos;.
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4 pb-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="flex items-center justify-center w-10 h-10 rounded-xl text-zinc-600 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed bg-[#f4f4f5] hover:bg-zinc-200 enabled:active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all duration-200 ${
                page === currentPage
                  ? "bg-[#7c4dff] text-white"
                  : "bg-[#f4f4f5] text-zinc-900 hover:bg-zinc-200 active:scale-95"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="flex items-center justify-center w-10 h-10 rounded-xl text-zinc-600 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed bg-[#f4f4f5] hover:bg-zinc-200 enabled:active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}