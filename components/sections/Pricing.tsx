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
            mb-12 md:mb-16
            text-center
            text-4xl sm:text-5xl md:text-6xl
            font-extrabold tracking-tight
          "
        >
          Detection <span className="text-[var(--accent)]">Systems</span>
        </motion.h2>

        <div className="grid gap-8 md:gap-10 md:grid-cols-2">

          {/* ================= LEFT MODEL ================= */}
          <motion.div
            variants={staggerItem}
            className="
              relative group
              rounded-3xl
              border border-white/20
              bg-gradient-to-br from-white/10 to-white/5
              backdrop-blur-2xl
              p-6 sm:p-8 md:p-10
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              hover:shadow-[0_0_60px_var(--accent-soft)]
              transition-all duration-500
              hover:-translate-y-1
            "
          >
            {/* Glow Layer */}
            <div className="
              pointer-events-none absolute inset-0 rounded-3xl
              opacity-0 group-hover:opacity-100
              transition duration-500
              shadow-[0_0_60px_var(--accent-soft)]
            " />

            {/* Top Gradient Border Glow */}
            <div className="
              absolute inset-0 rounded-3xl
              bg-gradient-to-r from-transparent via-white/10 to-transparent
              opacity-20
            " />

            {/* Status */}
            <span className="
              absolute top-4 right-4
              rounded-full bg-emerald-400
              px-3 py-1 text-xs font-semibold text-black
              shadow-lg
            ">
              LIVE
            </span>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                Image Deepfake Detection
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-6">
                High-accuracy deepfake detection using ConvNeXt with RetinaFace
                preprocessing and hybrid spatial learning.
              </p>

              <ul className="space-y-3 text-sm sm:text-base mb-8">
                {[
                  "RetinaFace-based face detection",
                  "ConvNeXt-Base backbone",
                  "ImageNet pretrained",
                  "Clean dataset pipeline",
                  "FastAPI backend",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--accent)]">■</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://colab.research.google.com/drive/1jZ9HI7C5V2Vv8caYcLoUlOmhlX_HPYof?usp=sharing"
                  target="_blank"
                  className="
                    inline-flex items-center justify-center
                    rounded-xl
                    bg-[var(--accent)]
                    px-6 py-3 text-sm sm:text-base font-semibold text-black
                    shadow-[0_0_30px_var(--accent-glow)]
                    transition hover:scale-[1.05] active:scale-[0.97]
                  "
                >
                  View Source →
                </Link>

                <Link
                  href="https://huggingface.co/spaces/iemsayan/deepfake-detector"
                  target="_blank"
                  className="
                    inline-flex items-center justify-center
                    rounded-xl
                    border border-white/20
                    px-6 py-3 text-sm sm:text-base font-semibold text-white
                    backdrop-blur-lg
                    hover:bg-white/10
                    transition hover:scale-[1.05] active:scale-[0.97]
                  "
                >
                  Try Live Demo →
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT MODEL ================= */}
          <motion.div
            variants={staggerItem}
            className="
              relative group
              rounded-3xl
              border border-white/20
              bg-gradient-to-br from-white/10 to-white/5
              backdrop-blur-2xl
              p-6 sm:p-8 md:p-10
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              hover:shadow-[0_0_60px_var(--accent-soft)]
              transition-all duration-500
              hover:-translate-y-1
            "
          >
            {/* Glow */}
            <div className="
              pointer-events-none absolute inset-0 rounded-3xl
              opacity-0 group-hover:opacity-100
              transition duration-500
              shadow-[0_0_60px_var(--accent-soft)]
            " />

            {/* Status */}
            <span className="
              absolute top-4 right-4
              rounded-full bg-emerald-400
              px-3 py-1 text-xs font-semibold text-black
              shadow-lg
            ">
              LIVE
            </span>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                Haar Cascade + CNN Detection
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-6">
                Lightweight pipeline using Haar Cascade for fast face detection
                combined with CNN classification for real-time deepfake detection.
              </p>

              <ul className="space-y-3 text-sm sm:text-base mb-8">
                {[
                  "OpenCV Haar Cascade detection",
                  "Fast CPU inference",
                  "Low latency system",
                  "No GPU required",
                  "Hugging Face deployment",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--accent)]">■</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="https://huggingface.co/spaces/iemsayan/deep-fake-detection-model"
                target="_blank"
                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  bg-[var(--accent)]
                  px-7 py-3 text-sm sm:text-base font-semibold text-black
                  shadow-[0_0_30px_var(--accent-glow)]
                  transition hover:scale-[1.05] active:scale-[0.97]
                "
              >
                Try Live Demo →
              </Link>
            </div>
          </motion.div>

        </div>
      </Stagger>
    </Section>
  );
}
