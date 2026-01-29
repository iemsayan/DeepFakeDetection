"use client";

import Section from "@/components/ui/Section";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
    return (
        <Section className="mt-32 md:mt-48">
            <div id="pricing">
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
              bg-white/10
              backdrop-blur-xl
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

                        {/* 100% OFF badge */}
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
                            100% OFF
                        </span>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                                Portfolio Website
                            </h3>

                            {/* Price */}
                            <div className="flex items-end gap-3 mb-4">
                                <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold">
                                    ₹0
                                </p>
                                <p className="mb-1 text-sm sm:text-base text-[var(--text-secondary)] line-through">
                                    ₹100
                                </p>
                            </div>

                            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] mb-8">
                                Free launch offer — clean, modern and high-quality portfolio website.
                            </p>

                            {/* Features */}
                            <ul className="space-y-4 text-sm sm:text-base md:text-lg">
                                {[
                                    "Project ready within 72 hours",
                                    "Completely free for limited users",
                                    "Live demo shared before delivery",
                                    "Full source code included",
                                    "Requirements discussed via Gmail",
                                    "Premium portfolio UI & animations",
                                ].map((text) => (
                                    <li key={text} className="flex gap-3">
                                        <span className="text-[var(--accent)]">✔</span>
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA — FIXED */}
                            <div className="mt-10">
                                <Link
                                    href="/buy-service"
                                    className="
                    group
                    relative
                    block
                    w-full
                    rounded-2xl
                    bg-[var(--accent)]
                    px-8 py-4
                    text-center
                    text-base sm:text-lg
                    font-semibold
                    text-black
                    shadow-lg
                    transition
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    overflow-hidden
                  "
                                >
                                    <span
                                        className="
                      absolute inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition
                      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_70%)]
                    "
                                    />
                                    <span className="relative">
                                        Get High-Quality Portfolio Now →
                                    </span>
                                </Link>

                                <p className="mt-3 text-center text-xs sm:text-sm text-[var(--text-secondary)]">
                                    Limited-time free launch offer
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Footer note */}
                    <p className="mt-8 text-center text-xs sm:text-sm md:text-base text-[var(--text-secondary)]">
                        Limited slots · One project at a time for quality work
                    </p>
                </Stagger>
            </div>
        </Section>
    );
}
