"use client";

import Section from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { label: "Accuracy", value: "68%" },
  { label: "Architecture", value: "ConvNeXt-Base" },
  { label: "Learning", value: "Transfer Learning" },
  { label: "Latency", value: "< 300 ms" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="home"
      className="
        relative
        min-h-[100svh]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background — subtle, serious */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(226,58,58,0.12),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        {/* Heading */}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            mx-auto
            max-w-3xl
            text-[clamp(2.2rem,7.5vw,4.6rem)]
            font-extrabold
            leading-[1.05]
            tracking-tight
          "
        >
          Deepfake
          <span className="
            block
            text-[var(--accent)]
            drop-shadow-[0_0_8px_var(--accent-soft)]
          ">
            Detection
          </span>
          System
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-sm sm:text-base md:text-lg
            text-[var(--text-secondary)]
            leading-relaxed
          "
        >
          A research-driven deep learning system that detects AI-generated
          facial images using artificial neural networks and transfer learning.
          The model focuses on subtle spatial artifacts introduced during
          synthetic image generation.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4
          "
        >
          <a
            href="https://huggingface.co/spaces/nvakumarf/deepfake_detection"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full sm:w-auto
              rounded-xl
              bg-[var(--accent)]
              px-10 py-4
              text-base
              font-semibold
              text-black
              shadow-[0_0_28px_var(--accent-soft)]
              transition
              hover:opacity-90
              active:scale-[0.97]
            "
          >
            Run Detection →
          </a>

          <a
            href="#process"
            className="
              w-full sm:w-auto
              rounded-xl
              border border-white/20
              bg-white/10 backdrop-blur
              px-10 py-4
              text-base
              font-medium
              transition
              hover:bg-white/20
            "
          >
            Research Pipeline
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? false : { opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="
            grid
            grid-cols-2
            sm:grid-cols-4
            gap-4
            rounded-2xl
            border border-white/15
            bg-white/10 backdrop-blur-xl
            px-6 py-5
          ">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xs text-white/40">{s.label}</p>
                <p className="mt-1 text-sm sm:text-base font-semibold text-white">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
