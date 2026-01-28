"use client";

import Section from "@/components/ui/Section";
import MotionDiv from "@/components/ui/MotionDiv";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <Section id="home" className="min-h-[90vh] flex items-center">
            <div className="grid gap-20 md:grid-cols-2 items-center">

                {/* LEFT — TEXT (OWNS THE MESSAGE) */}
                <MotionDiv>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Hi, I’m{" "}
                        <span className="text-[var(--accent)]">Sayandeep</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-[var(--text-secondary)] text-lg">
                        I design and build fast, scalable, and thoughtfully engineered web
                        experiences.
                    </p>

                    {/* 🔹 Caption stays with text */}
                    <p className="mt-4 text-sm text-[var(--text-secondary)]">
                        Building better experiences.
                    </p>
                </MotionDiv>

                {/* RIGHT — VISUAL ONLY */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    className="relative mx-auto w-[260px] md:w-[340px]"
                >
                    {/* 🌌 Soft aura */}
                    <div
                        className="
              absolute
              -inset-12
              rounded-full
              bg-[radial-gradient(circle,rgba(124,124,255,0.28),transparent_65%)]
              blur-3xl
            "
                    />

                    {/* 🔵 Orbiting signals */}
                    <motion.span
                        className="absolute -top-4 left-1/2 h-2 w-2 rounded-full bg-[var(--accent)]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "0 140px" }}
                    />

                    <motion.span
                        className="absolute top-1/2 -right-4 h-1.5 w-1.5 rounded-full bg-white/60"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "-140px 0" }}
                    />

                    {/* 🧍 Floating image */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative"
                    >
                        <Image
                            src="/myself.png"
                            alt="Sayandeep Ghosh"
                            width={340}
                            height={440}
                            priority
                            className="object-contain"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </Section>
    );
}
