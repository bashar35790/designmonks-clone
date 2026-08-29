"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  MessageSquare,
  Calendar,
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
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#8B5CF6", "#A78BFA", "#FFFFFF", "#10B981"],
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
    <section id="contact" className="py-24 bg-white text-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-2">
            FREE STRATEGY CALL
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-4">
            Claim a $799 Consultation,{" "}
            <span className="font-brand italic font-normal text-purple-700">
              on Us!
            </span>
          </h2>
          <p className="font-body text-zinc-600 text-sm sm:text-base leading-relaxed">
            Speak directly with our leadership team. We&apos;ll audit your current UX, map out a conversion strategy, and outline a rapid sprint roadmap.
          </p>
        </div>

        {/* Glowing Dark Luxury Card Container */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-[#090614] text-white p-8 sm:p-14 border border-purple-500/30 shadow-[0_20px_60px_rgba(109,40,217,0.18)] relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            {/* Left Column: COO Profile & Direct Links */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                      alt="Abdullah Al Noman"
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-500/50 shadow-lg shadow-purple-900/30"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-950" />
                  </div>

                  <div>
                    <h3 className="font-title text-xl font-bold text-white">
                      Abdullah Al Noman
                    </h3>
                    <span className="text-xs font-semibold text-purple-400 block font-mono">
                      Chief Operating Officer
                    </span>
                    <span className="text-xs text-zinc-400">Design Monks Global</span>
                  </div>
                </div>

                <p className="text-sm text-purple-100/80 leading-relaxed font-body mb-8 italic">
                  &ldquo;We don&apos;t just create stunning interfaces; we engineer high-converting product journeys that scale with your revenue. Let&apos;s discuss your roadmap.&rdquo;
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>30-minute product &amp; UX architecture audit</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Concrete scope &amp; budget estimate within 24 hours</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Interactive Figma walkthrough of relevant case studies</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/[0.08]">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all text-xs font-bold text-white group"
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
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-xs font-bold text-zinc-300 hover:text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>Book a Call Directly</span>
                  </div>
                  <span className="text-zinc-500 group-hover:text-purple-400 transition-colors">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/[0.08] shadow-xl">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-title text-2xl font-bold text-white mb-2">
                    Consultation Request Confirmed!
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mb-8">
                    Abdullah Al Noman will review your requirements and reach out via email or WhatsApp within 2 hours.
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 focus-within:border-purple-500 transition-colors">
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

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Work Email *
                      </label>
                      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 focus-within:border-purple-500 transition-colors">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        WhatsApp / Phone (Optional)
                      </label>
                      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 focus-within:border-purple-500 transition-colors">
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

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Estimated Budget
                      </label>
                      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 focus-within:border-purple-500 transition-colors">
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

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                      Project Details
                    </label>
                    <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-zinc-900/90 border border-white/10 focus-within:border-purple-500 transition-colors">
                      <FileText className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                      <textarea
                        rows={3}
                        placeholder="Tell us about your product, challenges, or timeline..."
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

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-title font-bold text-sm shadow-xl shadow-purple-600/30 transition-all active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Claim $799 Consultation, on Us!</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
