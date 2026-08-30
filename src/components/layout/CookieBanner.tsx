"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    personalization: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem("designmonks_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("designmonks_cookie_consent", "all");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("designmonks_cookie_consent", "essential");
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "designmonks_cookie_consent",
      JSON.stringify(preferences)
    );
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 sm:right-auto sm:max-w-md z-50 p-6 rounded-3xl bg-zinc-950/95 border border-white/[0.12] shadow-2xl backdrop-blur-2xl text-white"
        >
          {!showSettings ? (
            <div>
              <div className="flex items-start gap-3.5 mb-3">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-title text-base font-bold text-white mb-1">
                    Cookie & Privacy Preferences
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-body">
                    We use cookies and telemetry to analyze traffic, enhance navigation, and optimize product animations.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-5">
                <Button
                  onClick={handleAcceptAll}
                  variant="emerald"
                  size="sm"
                  className="flex-1 text-xs py-2"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="secondary"
                  size="sm"
                  className="text-xs py-2"
                >
                  Essential Only
                </Button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="text-xs text-zinc-400 hover:text-white underline underline-offset-4 py-1.5 px-2 transition-colors cursor-pointer"
                >
                  Customize
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="font-title text-sm font-bold text-white">
                    Customize Preferences
                  </span>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 mb-5 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03]">
                  <div>
                    <span className="font-semibold text-white block">Strictly Necessary</span>
                    <span className="text-zinc-500 text-[11px]">Core site functionality & security</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Always Active</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03]">
                  <div>
                    <span className="font-semibold text-white block">Analytics & Performance</span>
                    <span className="text-zinc-500 text-[11px]">Help us refine UX & speed</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="accent-emerald-500 w-4 h-4 rounded cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03]">
                  <div>
                    <span className="font-semibold text-white block">Marketing & Retargeting</span>
                    <span className="text-zinc-500 text-[11px]">Tailored campaigns</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="accent-emerald-500 w-4 h-4 rounded cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  onClick={handleSavePreferences}
                  variant="emerald"
                  size="sm"
                  className="w-full text-xs py-2"
                >
                  Save Choices
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
