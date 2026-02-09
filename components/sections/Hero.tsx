"use client";

import Section from "@/components/ui/Section";
import MotionDiv from "@/components/ui/MotionDiv";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { label: "Accuracy", value: "68%" },
  { label: "Model", value: "ConvNeXt-Base" },
  { label: "Domain", value: "Face-centric" },
  { label: "Latency", value: "<300ms" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section
      id="home"
      className="relative min-h-screen flex items-center pt-24 md:pt-0 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--accent-soft),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.7))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 grid gap-12 md:gap-20 md:grid-cols-2 items-center">

        {/* LEFT — COPY */}
        <MotionDiv>
          <span className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-wide text-[var(--accent)]">
            Deep Learning Research System
          </span>

          <h1 className="text-[clamp(2.4rem,8vw,5.5rem)] font-extrabold leading-[1.08] tracking-tight">
            Deepfake
            <span className="block text-[var(--accent)] drop-shadow-[0_0_16px_var(--accent-glow)]">
              Detection
            </span>
            Engine
          </h1>

          <p className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            A face-centric deep learning system that detects AI-generated
            imagery by analyzing subtle spatial manipulation artifacts.
          </p>

          {/* CTA — MOBILE OPTIMIZED */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo("pricing")}
              className="
                w-full sm:w-auto
                rounded-xl
                bg-[var(--accent)]
                px-8 py-4
                text-base font-semibold
                text-black
                shadow-[0_0_40px_var(--accent-glow)]
                active:scale-[0.97]
                transition
              "
            >
              Run Detection
            </button>

            <button
              onClick={() => scrollTo("process")}
              className="
                w-full sm:w-auto
                rounded-xl
                border border-white/20
                bg-white/10 backdrop-blur
                px-8 py-4
                text-base font-medium
                transition hover:bg-white/20
              "
            >
              How it Works
            </button>
          </div>
        </MotionDiv>

        {/* RIGHT — DESKTOP CONSOLE / MOBILE STATUS */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-lg mx-auto"
        >
          <div className="relative rounded-2xl border border-white/20 bg-black/50 backdrop-blur-xl shadow-2xl overflow-hidden">

            {/* Scan line (desktop only) */}
            {!reduceMotion && (
              <motion.div
                className="hidden md:block absolute inset-x-0 h-[2px] bg-[var(--accent)] blur-sm"
                initial={{ top: "-10%" }}
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              />
            )}

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <span className="text-xs font-medium text-white/70">
                Inference Status
              </span>
              <span className="flex items-center gap-2 text-[10px] text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                LIVE
              </span>
            </div>

            {/* Body */}
            <div className="px-4 py-5 font-mono text-xs sm:text-sm text-white/75 space-y-2">
              <p>{">"} Model loaded</p>
              <p>{">"} Face detected</p>
              <p>{">"} Feature extraction</p>
              <p className="text-[var(--accent)] drop-shadow-[0_0_10px_var(--accent-glow)]">
                {">"} Prediction: FAKE (0.83)
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* STATS — MOBILE SCROLL / DESKTOP GRID */}
      <div className="relative mt-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="
            flex sm:grid
            sm:grid-cols-4
            gap-4
            overflow-x-auto
            sm:overflow-visible
            snap-x snap-mandatory
            rounded-2xl
            border border-white/15
            bg-white/10 backdrop-blur-xl
            px-4 py-4
          ">
            {stats.map((s) => (
              <div
                key={s.label}
                className="min-w-[140px] sm:min-w-0 snap-center text-center"
              >
                <p className="text-xs text-white/40">{s.label}</p>
                <p className="mt-1 text-sm sm:text-base font-semibold text-white">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
