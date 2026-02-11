"use client";

import Section from "@/components/ui/Section";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Products() {
  return (
    <Section id="products" className="mt-28 sm:mt-36 md:mt-48">
      <Stagger>
        {/* Heading */}
        <motion.h2
          variants={staggerItem}
          className="
            mb-10 md:mb-14
            text-center
            text-4xl sm:text-5xl md:text-6xl
            font-extrabold tracking-tight
          "
        >
          Detection <span className="text-[var(--accent)]">Systems</span>
        </motion.h2>

        <div className="grid gap-8 md:gap-10 md:grid-cols-2">

          {/* IMAGE MODEL */}
          <motion.div
            variants={staggerItem}
            className="
              relative
              rounded-3xl
              border border-white/15
              bg-white/10
              backdrop-blur-xl
              p-6 sm:p-8 md:p-10
              shadow-xl
            "
          >
            {/* Subtle red glow */}
            <div className="
              pointer-events-none
              absolute inset-0
              rounded-3xl
              shadow-[0_0_32px_var(--accent-soft)]
            " />

            {/* Status */}
            <span className="
              absolute top-4 right-4
              rounded-full
              bg-emerald-400
              px-3 py-1
              text-xs font-semibold
              text-black
            ">
              LIVE
            </span>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                Image Deepfake Detection
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-6">
                Face-centric image analysis using a spatial ConvNeXt-based
                deep learning pipeline to identify AI-generated facial artifacts.
              </p>

              <ul className="space-y-3 text-sm sm:text-base mb-8">
                {[
                  "RetinaFace-based face detection & cropping",
                  "ConvNeXt-Base spatial backbone",
                  "ImageNet pretrained initialization",
                  "Clean train / validation / test split",
                  "FastAPI inference backend",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--accent)]">■</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="https://colab.research.google.com/drive/1NzW1dNiV8gy_DeuyAotEa-JdGJuht44J?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  bg-[var(--accent)]
                  px-7 py-3
                  text-sm sm:text-base
                  font-semibold
                  text-black
                  shadow-[0_0_36px_var(--accent-glow)]
                  transition
                  hover:scale-[1.03]
                  active:scale-[0.97]
                "
              >
                View Source & API →
              </Link>
            </div>
          </motion.div>

          {/* VIDEO MODEL */}
          <motion.div
            variants={staggerItem}
            className="
              relative
              rounded-3xl
              border border-white/15
              bg-white/10
              backdrop-blur-xl
              p-6 sm:p-8 md:p-10
              shadow-xl
              opacity-90
            "
          >
            {/* Softer glow */}
            <div className="
              pointer-events-none
              absolute inset-0
              rounded-3xl
              shadow-[0_0_22px_rgba(255,255,255,0.08)]
            " />

            {/* Status */}
            <span className="
              absolute top-4 right-4
              rounded-full
              bg-yellow-400
              px-3 py-1
              text-xs font-semibold
              text-black
            ">
              IN DEVELOPMENT
            </span>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                Video Deepfake Detection
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-6">
                Temporal and frequency-domain analysis for detecting
                manipulated videos across sequential frames.
              </p>

              <ul className="space-y-3 text-sm sm:text-base mb-8">
                {[
                  "Frame-wise face extraction",
                  "Spatial + frequency feature fusion",
                  "FFT-based artifact detection",
                  "Sequence-aware modeling",
                  "Improved real-world generalization",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--accent)]">■</span>
                    {item}
                  </li>
                ))}
              </ul>

              <span className="
                inline-block
                rounded-xl
                border border-white/25
                bg-white/5
                px-7 py-3
                text-sm sm:text-base
                text-[var(--text-secondary)]
              ">
                Coming Soon
              </span>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <p className="
          mt-10
          text-center
          text-xs sm:text-sm
          text-[var(--text-secondary)]
        ">
          Research-driven systems · Documented limitations · Continuous iteration
        </p>
      </Stagger>
    </Section>
  );
}
