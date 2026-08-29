"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  MessageSquare,
  Calendar,
  Sparkles,
  CheckCircle2,
  Send,
  Loader2,
  Mail,
  User,
  Phone,
  DollarSign,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function LeadGenForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    budget: "$10,000 - $25,000",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSubmitted(true);
        // Trigger celebratory confetti burst
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#10B981", "#34D399", "#FFFFFF", "#8B5CF6"],
        });
      } else {
        setErrorMessage(data.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Zero Risk Consultation"
          title="Claim a $799 Consultation,"
          italicAccent="on Us!"
          subtitle="Speak directly with our leadership team. We'll audit your current UX, map out a conversion strategy, and provide a clear sprint roadmap."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: COO Executive Card & Quick CTAs (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-white/[0.08] flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    alt="Abdullah Al Noman"
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/20"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-950" />
                </div>

                <div>
                  <h3 className="font-title text-xl font-bold text-white">
                    Abdullah Al Noman
                  </h3>
                  <span className="text-xs font-medium text-emerald-400 block font-mono">
                    Chief Operating Officer
                  </span>
                  <span className="text-xs text-zinc-500">Design Monks Global</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-body mb-8 italic">
                &ldquo;We don&apos;t just create stunning interfaces; we engineer high-converting product journeys that scale with your revenue. Let&apos;s discuss your roadmap.&rdquo;
              </p>

              {/* Consultation Highlights */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>30-minute high-level product & UX architecture audit</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Concrete scope & budget estimate within 24 hours</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Interactive Figma walkthrough of similar case studies</span>
                </div>
              </div>
            </div>

            {/* Direct Instant Channels */}
            <div className="space-y-3 pt-6 border-t border-white/[0.08]">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all text-xs font-semibold text-white group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp Directly</span>
                </div>
                <span className="text-zinc-500 group-hover:text-emerald-400 transition-colors">→</span>
              </a>

              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all text-xs font-semibold text-zinc-300 hover:text-white group"
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-zinc-400" />
                  <span>Book a Calendar Slot</span>
                </div>
                <span className="text-zinc-500 group-hover:text-white transition-colors">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-white/[0.08] shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-title text-2xl sm:text-3xl font-bold text-white mb-2">
                  Consultation Request Received!
                </h3>
                <p className="text-sm text-zinc-400 max-w-md mb-8">
                  Our Chief Operating Officer will review your requirements and reach out via email or WhatsApp within 2 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  size="sm"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Your Full Name *
                    </label>
                    <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-zinc-900 border border-white/10 focus-within:border-emerald-500/50 transition-colors">
                      <User className="w-4 h-4 text-zinc-500" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Work Email *
                    </label>
                    <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-zinc-900 border border-white/10 focus-within:border-emerald-500/50 transition-colors">
                      <Mail className="w-4 h-4 text-zinc-500" />
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* WhatsApp / Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      WhatsApp / Phone (Optional)
                    </label>
                    <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-zinc-900 border border-white/10 focus-within:border-emerald-500/50 transition-colors">
                      <Phone className="w-4 h-4 text-zinc-500" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.whatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, whatsapp: e.target.value })
                        }
                        className="w-full bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Budget Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-zinc-900 border border-white/10 focus-within:border-emerald-500/50 transition-colors">
                      <DollarSign className="w-4 h-4 text-zinc-500" />
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer"
                      >
                        <option value="<$5,000" className="bg-zinc-900 text-white">Less than $5,000</option>
                        <option value="$5,000 - $10,000" className="bg-zinc-900 text-white">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000" className="bg-zinc-900 text-white">$10,000 - $25,000</option>
                        <option value="$25,000+" className="bg-zinc-900 text-white">$25,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    Project Goals &amp; Timeline Details
                  </label>
                  <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-zinc-900 border border-white/10 focus-within:border-emerald-500/50 transition-colors">
                    <FileText className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                    <textarea
                      rows={4}
                      placeholder="Tell us about your product, desired launch date, current Figma links, or redesign challenges..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <p className="text-xs text-red-400 font-medium">
                    {errorMessage}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="emerald"
                  size="lg"
                  disabled={isLoading}
                  className="w-full py-4 text-sm"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting Request...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Claim Free $799 Consultation</span>
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
