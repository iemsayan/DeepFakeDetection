"use client";

import Section from "@/components/ui/Section";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <Section id="pricing" className="mt-32 md:mt-48">
            <Stagger>
                {/* Heading */}
                <motion.h2
                    variants={staggerItem}
                    className="mb-10 md:mb-14 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
                >
                    My <span className="text-[var(--accent)]">Services</span>
                </motion.h2>

                {/* Service Card */}
                <motion.div
                    variants={staggerItem}
                    className="
            relative
            mx-auto
            max-w-2xl
            rounded-3xl
            border border-white/20
            bg-white/10 backdrop-blur-xl
            p-6 sm:p-8 md:p-12
            shadow-xl
          "
                >
                    {/* Glow */}
                    <div
                        className="
              pointer-events-none
              absolute inset-0
              rounded-3xl
              shadow-[0_0_35px_rgba(99,102,241,0.28)]
            "
                    />

                    {/* 50% OFF badge */}
                    <span
                        className="
              absolute
              top-4 right-4
              z-20
              rounded-full
              bg-[var(--accent)]
              px-4 py-1.5
              text-xs sm:text-sm
              font-semibold
              text-black
              shadow-lg
            "
                    >
                        50% OFF
                    </span>

                    {/* Content */}
                    <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                            Portfolio Website
                        </h3>

                        {/* Price */}
                        <div className="flex items-end gap-3 mb-4">
                            <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold">
                                ₹50
                            </p>
                            <p className="mb-1 text-sm sm:text-base text-[var(--text-secondary)] line-through">
                                ₹100
                            </p>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] mb-8">
                            Clean, modern and high-quality portfolio website.
                        </p>

                        {/* Features */}
                        <ul className="space-y-4 text-sm sm:text-base md:text-lg">
                            <li className="flex gap-3">
                                <span className="text-[var(--accent)]">✔</span>
                                Project ready within <strong>72 hours</strong>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[var(--accent)]">✔</span>
                                No hidden charges — final price
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[var(--accent)]">✔</span>
                                Live demo shared before payment
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[var(--accent)]">✔</span>
                                Full source code after payment
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[var(--accent)]">✔</span>
                                Requirements discussed on <strong>Gmail</strong>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[var(--accent)]">✔</span>
                                Next-level portfolio design
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[var(--accent)]">✔</span>
                                Complex & 3D websites available
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[var(--accent)]">✔</span>
                                Extra pricing discussed via Gmail
                            </li>
                        </ul>

                        {/* CTA */}
                        <div className="mt-10">
                            <button
                                disabled
                                className="
                  group
                  relative
                  w-full
                  cursor-not-allowed
                  rounded-2xl
                  border border-white/20
                  bg-white/5
                  px-8 py-4
                  text-base sm:text-lg
                  font-semibold
                  text-[var(--text-secondary)]
                  backdrop-blur
                  overflow-hidden
                "
                            >
                                {/* Lock glow */}
                                <span
                                    className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_70%)]
                  "
                                />

                                <span className="relative flex items-center justify-center gap-2">
                                    🔒 Buy Service
                                </span>
                            </button>

                            <p className="mt-3 text-center text-xs sm:text-sm text-[var(--text-secondary)]">
                                Launching on <strong>5th Feb</strong>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Footer note */}
                <p className="mt-8 text-center text-xs sm:text-sm md:text-base text-[var(--text-secondary)]">
                    Limited slots · One project at a time for quality work
                </p>
            </Stagger>
        </Section>
    );
}
