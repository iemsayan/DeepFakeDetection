"use client";

import Section from "@/components/ui/Section";
import MotionDiv from "@/components/ui/MotionDiv";
import TypeWriterName from "@/components/ui/TypeWriterName";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <Section
            id="home"
            className="min-h-screen flex items-center pt-28 sm:pt-32 md:pt-0"
        >
            <div className="mx-auto max-w-7xl grid gap-16 md:grid-cols-2 items-center px-6">

                {/* LEFT — TEXT */}
                <MotionDiv>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight">
                        <span className="block">Hi, I’m</span>
                        <span className="block">
                            <TypeWriterName />
                        </span>
                    </h1>

                    <h1 className="mt-2 text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight">
                        Ghosh
                    </h1>

                    <p className="mt-8 max-w-xl text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed">
                        Freelance Developer building high-quality, fast &amp;
                        production-ready web experiences.
                    </p>

                    <p className="mt-6 text-sm md:text-base text-[var(--text-secondary)]">
                        *Available for freelance work.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#pricing"
                            className="
                relative inline-flex items-center justify-center
                rounded-2xl bg-[var(--accent)]
                px-8 py-4 text-base md:text-lg
                font-semibold text-black
                transition hover:opacity-90
              "
                        >
                            My Services
                        </a>

                        <a
                            href="#projects"
                            className="
                relative inline-flex items-center justify-center
                rounded-2xl border border-white/20
                bg-white/10 backdrop-blur
                px-8 py-4 text-base md:text-lg
                font-medium transition hover:bg-white/20
              "
                        >
                            View My Previous Works
                        </a>
                    </div>
                </MotionDiv>

                {/* RIGHT — IMAGE */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative mx-auto flex items-center justify-center"
                >
                    {/* Glass Card */}
                    <div
                        className="
              relative
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              shadow-2xl
              p-6
              overflow-hidden
            "
                    >
                        {/* INNER GLOW (comes from the box) */}
                        <motion.div
                            aria-hidden
                            animate={
                                shouldReduceMotion
                                    ? {}
                                    : { opacity: [0.25, 0.45, 0.25] }
                            }
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                pointer-events-none
                absolute inset-0
                rounded-3xl
                bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.45),transparent_65%)]
              "
                        />

                        {/* FLOATING IMAGE */}
                        <motion.div
                            animate={
                                shouldReduceMotion
                                    ? {}
                                    : {
                                        y: [0, -14, 0],
                                        rotate: [0, 1.2, 0],
                                    }
                            }
                            transition={{
                                duration: 3.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10"
                        >
                            <Image
                                src="/myself.png"
                                alt="Sayandeep Ghosh – Freelance Frontend Developer"
                                width={320}
                                height={480}
                                priority
                                className="object-contain"
                            />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </Section>
    );
}
