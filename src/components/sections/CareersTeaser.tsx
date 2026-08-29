"use client";

import React, { useState } from "react";
import { JOB_OPENINGS } from "@/data/careers";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CareersTeaser() {
  const [selectedDept, setSelectedDept] = useState<string>("All");

  const departments = ["All", "Design", "Engineering", "Growth"];
  const filteredJobs = JOB_OPENINGS.filter((job) =>
    selectedDept === "All" ? true : job.department === selectedDept
  );

  return (
    <section id="careers" className="py-24 bg-[#0A0A0A] border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Join Our Global Collective"
          title="Be a Monk!"
          italicAccent="Like Us"
          subtitle="We are a remote-first team of obsessed product designers, 3D artists, and Next.js developers building for top brands."
          className="mb-12"
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedDept === dept
                  ? "bg-white text-black shadow-lg shadow-white/10"
                  : "bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job Listings Grid */}
        <div className="space-y-4 max-w-4xl mx-auto mb-12">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {job.department}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="font-title text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-zinc-400 mt-2 font-body">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <Button
                  href="mailto:careers@designmonks.co?subject=Application:%20"
                  variant="secondary"
                  size="sm"
                  showArrow
                  className="whitespace-nowrap"
                >
                  Apply Now
                </Button>
              </div>
            ))
          ) : (
            <div className="p-12 text-center rounded-3xl bg-zinc-950 border border-white/[0.08]">
              <p className="text-sm text-zinc-400 mb-4 font-body">
                No active openings in this department right now.
              </p>
              <Button
                href="mailto:careers@designmonks.co"
                variant="outline"
                size="sm"
                icon={Send}
                iconPosition="right"
              >
                Send Open Portfolio Application
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
