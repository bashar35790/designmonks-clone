"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col space-y-3.5 w-full cursor-pointer"
    >
      {/* Image Container with Smooth 2XL Corners */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col space-y-2">
        {/* Title */}
        <h3 className="text-xl sm:text-[22px] font-bold text-zinc-900 tracking-tight leading-snug group-hover:text-zinc-600 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-zinc-500 font-normal line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Light Pill Tags (Exact Design Matching) */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3.5 py-1 rounded-full text-xs font-medium bg-[#e5e5e7] text-zinc-800 transition-colors group-hover:bg-[#d4d4d8]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
