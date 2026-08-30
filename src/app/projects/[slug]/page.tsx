import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-emerald-400 font-medium text-sm tracking-wider uppercase">
            {project.category}
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mt-2 mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-300">
            <div><strong className="text-white">Client:</strong> {project.client}</div>
            <div><strong className="text-white">Location:</strong> {project.location}</div>
            <div><strong className="text-white">Timeline:</strong> {project.timeline}</div>
            <div><strong className="text-white">Impact:</strong> {project.impact}</div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif italic mb-6">Project Overview</h2>
        <p className="text-zinc-300 text-lg leading-relaxed mb-8">
          {project.fullDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
