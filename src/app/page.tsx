import { Sparkles, ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-monk-dark">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
        <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
        <span>4.9 ★ Rating on Clutch & Google</span>
      </div>

      <h1 className="font-title text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl text-white mb-6">
        Leading UI/UX Design Agency <br />
        <span className="font-brand italic font-normal text-emerald-400">
          We Design Products That Drive Results
        </span>
      </h1>

      <p className="font-body text-monk-muted text-base sm:text-lg max-w-xl mb-8">
        Phase 1 Design System & Typography is fully configured. Ready for component library and section development.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all hover:gap-3">
          <span>Book a 15-Min Intro Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel text-white font-medium text-sm hover:bg-zinc-800/60 transition-all">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Explore Capabilities</span>
        </button>
      </div>
    </main>
  );
}
