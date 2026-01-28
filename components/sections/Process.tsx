"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const steps = [
    { title: "Idea", desc: "Understanding the problem and defining the vision." },
    { title: "Planning", desc: "Requirements, architecture, and tech decisions." },
    { title: "Design", desc: "UI/UX, wireframes, and user flows." },
    { title: "Development", desc: "Clean, scalable, production-ready code." },
    { title: "Testing", desc: "Edge cases, performance, and reliability checks." },
    { title: "Deployment", desc: "CI/CD, hosting, and monitoring." },
    { title: "Production", desc: "Live product, users, iteration, and scaling." },
];

export default function Process() {
    return (
        <Section id="process" className="mt-36">
            <Reveal>
                <h2 className="mb-28 text-center text-4xl font-bold">
                    Idea → <span className="text-[var(--accent)]">Production</span>
                </h2>
            </Reveal>

            {/* Balanced container */}
            <div className="relative mx-auto max-w-5xl min-h-[1600px]">

                {/* 🌊 CURVE — MATCHED TO CONTENT */}
                <svg
                    className="absolute left-1/2 top-0 -translate-x-1/2"
                    width="500"
                    height="1600"
                    viewBox="0 0 500 1600"
                    fill="none"
                >
                    <defs>
                        <linearGradient id="flowGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                            <stop offset="50%" stopColor="var(--accent)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                        </linearGradient>

                        <filter id="glow">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <motion.path
                        d="
              M250 0
              C110 180, 390 360, 250 540
              C110 720, 390 900, 250 1080
              C110 1260, 390 1440, 250 1600
            "
                        stroke="url(#flowGradient)"
                        strokeWidth="3"
                        fill="none"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    />
                </svg>

                {/* 🧊 CARDS — COMPACT BUT BREATHABLE */}
                <div className="relative space-y-[220px]">
                    {steps.map((step, i) => (
                        <Reveal key={step.title} delay={i * 0.1}>
                            <div
                                className={`
                  relative
                  w-[340px]
                  rounded-2xl
                  border border-white/20
                  bg-white/10 backdrop-blur-xl
                  p-6
                  shadow-lg
                  ${i % 2 === 0 ? "mr-auto" : "ml-auto"}
                `}
                            >
                                {/* 🔵 Connector */}
                                <span
                                    className={`
                    absolute
                    top-1/2
                    -translate-y-1/2
                    h-3.5 w-3.5
                    rounded-full
                    bg-[var(--accent)]
                    shadow-[0_0_18px_var(--accent)]
                    ${i % 2 === 0 ? "-right-6" : "-left-6"}
                  `}
                                />

                                <h3 className="mb-2 text-lg font-semibold">
                                    {step.title}
                                </h3>

                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}
