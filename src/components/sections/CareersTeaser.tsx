"use client";

import React, { useState } from "react";
import { JOB_OPENINGS } from "@/data/careers";
import { MapPin, Clock, ArrowRight, Send } from "lucide-react";

export function CareersTeaser() {
  const [selectedDept, setSelectedDept] = useState<string>("All");

  const departments = ["All", "Design", "Engineering", "Growth"];
  const filteredJobs = JOB_OPENINGS.filter((job) =>
    selectedDept === "All" ? true : job.department === selectedDept
  );

  return (
    <section id="careers" className="py-24 bg-white text-zinc-900 border-b border-zinc-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-2">
            JOIN OUR TEAM
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-4">
            Be a Monk!{" "}
            <span className="font-brand italic font-normal text-purple-700">
              Like us
            </span>
          </h2>
          <p className="font-body text-zinc-600 text-sm sm:text-base leading-relaxed">
            We are a remote-first team of obsessed product designers, 3D artists, and Next.js developers building for top global brands.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedDept === dept
                  ? "bg-purple-700 text-white shadow-md"
                  : "bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900"
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
                className="p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-purple-300 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold">
                      {job.department}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="font-title text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-purple-700 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-zinc-500 mt-2 font-body">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <a
                  href="mailto:careers@designmonks.co"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-purple-700 text-white font-title font-bold text-xs transition-colors shadow-sm whitespace-nowrap"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))
          ) : (
            <div className="p-12 text-center rounded-3xl bg-zinc-50 border border-zinc-200">
              <p className="text-sm text-zinc-500 mb-4 font-body">
                No active openings in this department right now.
              </p>
              <a
                href="mailto:careers@designmonks.co"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-700 text-white font-title font-bold text-xs shadow-md hover:bg-purple-800 transition-all"
              >
                <span>Send Open Portfolio</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
