"use client";

import Section from "@/components/ui/Section";
import MotionDiv from "@/components/ui/MotionDiv";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <Section id="home" className="min-h-screen flex items-center">
            <div className="mx-auto max-w-7xl grid gap-20 md:grid-cols-2 items-center">

                {/* LEFT — MESSAGE */}
                <MotionDiv>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight">
                        Hi, I’m{" "}
                        <span className="text-[var(--accent)]">Sayandeep</span>
                    </h1>

                    <p className="mt-8 max-w-xl text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed">
                        Freelance Frontend Developer building fast, scalable, and
                        production-ready web experiences for modern businesses.
                    </p>

                    <p className="mt-6 text-sm md:text-base text-[var(--text-secondary)]">
                        Available for freelance & contract work.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="
                inline-flex items-center justify-center
                rounded-2xl
                bg-[var(--accent)]
                px-8 py-4
                text-base md:text-lg
                font-semibold
                text-black
                hover:opacity-90
                transition
              "
                        >
                            Hire Me
                        </a>

                        <a
                            href="#projects"
                            className="
                inline-flex items-center justify-center
                rounded-2xl
                border border-white/20
                bg-white/10 backdrop-blur
                px-8 py-4
                text-base md:text-lg
                font-medium
                hover:bg-white/20
                transition
              "
                        >
                            View Projects
                        </a>
                    </div>
                </MotionDiv>

                {/* RIGHT — IMAGE (FIXED) */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="
            relative
            mx-auto
            w-[280px]
            md:w-[360px]
            flex
            items-end
          "
                >
                    {/* Soft depth shadow */}
                    <div
                        className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-black/20
              to-transparent
              rounded-3xl
            "
                    />

                    {/* Image */}
                    <motion.div
                        animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative z-10"
                    >
                        <Image
                            src="/myself.png"
                            alt="Sayandeep Ghosh – Freelance Frontend Developer"
                            width={360}
                            height={520}
                            priority
                            className="object-contain"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </Section>
    );
}
