"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Loader2,
  Globe,
  Send,
} from "lucide-react";
import { Marquee } from "../ui/Marquee";

// Custom SVG components for brand icons not available in Lucide
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export function LeadGenForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    budget: "$10K - $20K",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const budgetOptions = [
    "Less than $5K",
    "$5K - $10K",
    "$10K - $20K",
    "$20K - $50K",
    "More than $50K",
  ];

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

      if (res.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#7C3AED", "#A78BFA", "#FFFFFF", "#10B981"],
        });
      } else {
        const data = await res.json();
        setErrorMessage(data.error || "Failed to submit. Please try again.");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#F8F9FA] text-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main CTA Card */}
        <div className="rounded-[2.5rem] bg-[#0A0A0C] text-white p-8 sm:p-12 lg:p-16 border border-zinc-800 relative overflow-hidden shadow-2xl">
          {/* Ambient Lighting Gradients */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/40 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-50 h-50 bg-amber-600/80 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                {/* Pill Tag */}
                <div className="inline-block mb-6">
                  <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                    Claim a $799 Consultation, on Us!
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl font-bold font-title tracking-tight text-white mb-6 leading-[1.15]">
                  Enhance Your Brand <br />
                  Potential{" "}
                  <span className="italic font-brand font-normal text-zinc-300">
                    At No Cost!
                  </span>
                </h2>

                {/* Bullet Value Props */}
                <ul className="space-y-3 mb-10 text-xs sm:text-sm text-zinc-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Expect a response from us within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>We&apos;re happy to sign an NDA upon request.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>
                      Get access to a team of dedicated product specialists.
                    </span>
                  </li>
                </ul>

                {/* Profile Section */}
                <div className="space-y-4">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden bg-gradient-to-br from-purple-200 to-indigo-300 p-1">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                      alt="Abdullah Al Noman"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-[1.25rem]"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      Abdullah Al Noman
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      COO &amp; Co-founder
                    </p>
                  </div>

                  <div className="pt-2 space-y-1.5 text-xs text-zinc-300">
                    <a
                      href="https://wa.me/17165036335"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-zinc-400" />
                      <span>+1 (716) 503-6335</span>
                    </a>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-purple-400 hover:text-purple-300 font-medium transition-colors"
                    >
                      Book a Call Directly
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="py-20 text-center flex flex-col items-center justify-center bg-zinc-900/40 rounded-3xl border border-zinc-800 p-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Request Received!
                  </h3>
                  <p className="text-xs text-zinc-400 max-w-sm mb-6">
                    Our team will review your project details and respond within
                    24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourmail@gmail.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-2">
                        Whatsapp Number
                      </label>
                      <div className="flex items-center px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white focus-within:border-zinc-600 transition-colors">
                        <Globe className="w-4 h-4 text-zinc-500 mr-2 shrink-0" />
                        <input
                          type="tel"
                          placeholder="123 456 7890"
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              whatsapp: e.target.value,
                            })
                          }
                          className="w-full bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Budget Selector Pill Buttons */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">
                      Project Budget
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {budgetOptions.map((option) => {
                        const active = formData.budget === option;
                        return (
                          <button
                            type="button"
                            key={option}
                            onClick={() =>
                              setFormData({ ...formData, budget: option })
                            }
                            className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                              active
                                ? "bg-zinc-800 text-white border border-zinc-600"
                                : "bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:bg-zinc-800/50 hover:text-zinc-200"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="I want to redesign my website.."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-red-400 font-medium">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-purple-900/20 transition-all active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Connecting...</span>
                        </>
                      ) : (
                        <>
                          <span>Let&apos;s Connect</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Marquee Banner */}
        <div
          className="mt-8 rounded-full py-3.5 px-6 overflow-hidden flex items-center shadow-md"
          style={{
            background:
              "linear-gradient(90deg, #CCFF00 0%, #FFFFFF 50%, #CCFF00 100%)",
          }}
        >
          <div className="flex items-center gap-3 shrink-0 mr-6">
            <div className="flex -space-x-2">
              <Image
                className="w-7 h-7 rounded-full border-2 border-[#CCFF00] object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                alt="User"
                width={28}
                height={28}
              />
              <Image
                className="w-7 h-7 rounded-full border-2 border-[#CCFF00] object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                alt="User"
                width={28}
                height={28}
              />
              <Image
                className="w-7 h-7 rounded-full border-2 border-[#CCFF00] object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                alt="User"
                width={28}
                height={28}
              />
              <Image
                className="w-7 h-7 rounded-full border-2 border-[#CCFF00] object-cover"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop"
                alt="User"
                width={28}
                height={28}
              />
            </div>

            <span className="text-[11px] font-bold text-black bg-white/60 px-2 py-0.5 rounded-full border border-black/10">
              40+
            </span>
          </div>

          <Marquee className="text-sm sm:text-base font-medium text-black/80">
            Trusted by 40+ Brands Worldwide for Exceptional Design & Development
            Services
          </Marquee>
        </div>

        {/* Bottom Sub-Footer Section */}
        <div className="mt-16 text-center max-w-xl mx-auto space-y-8">
          <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
            Say goodbye to outdated enterprise software and welcome the smoother
            one. We lead you from design to product innovation to shape your
            path from idea to success
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-2">
            {[
              { component: Globe, href: "#" },
              { component: InstagramIcon, href: "#" },
              { component: LinkedinIcon, href: "#" },
              { component: FacebookIcon, href: "#" },
              { component: TwitterIcon, href: "#" },
              { component: Send, href: "#" },
              { component: YoutubeIcon, href: "#" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="w-9 h-9 rounded-xl bg-zinc-200/80 hover:bg-zinc-300/80 flex items-center justify-center text-zinc-700 transition-colors"
              >
                <item.component />
              </a>
            ))}
          </div>

          {/* Newsletter Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 max-w-md mx-auto"
          >
            <div className="flex-1 flex items-center px-4 py-3 rounded-xl bg-white border border-zinc-200 shadow-sm focus-within:border-zinc-400 transition-colors">
              <Mail className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
              <input
                type="email"
                placeholder="Your email here"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-1.5 shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
