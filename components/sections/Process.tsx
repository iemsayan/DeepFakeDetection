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
        <Section
            id="process"
            className="mt-40 overflow-hidden"
        >
            {/* Heading */}
            <Reveal>
                <h2 className="mb-24 text-center text-5xl md:text-6xl font-extrabold tracking-tight">
                    Idea → <span className="text-[var(--accent)]">Production</span>
                </h2>
            </Reveal>

            {/* Container (CLIPPED) */}
            <div className="relative mx-auto max-w-5xl overflow-hidden">

                {/* SVG Flow Line */}
                <svg
                    className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none"
                    width="420"
                    height="1400"
                    viewBox="0 0 420 1400"
                    fill="none"
                >
                    <defs>
                        <linearGradient id="flowGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                            <stop offset="50%" stopColor="var(--accent)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                        </linearGradient>
                    </defs>

                    <motion.path
                        d="
              M210 0
              C80 200, 340 400, 210 600
              C80 800, 340 1000, 210 1200
              C80 1400, 340 1600, 210 1800
            "
                        stroke="url(#flowGradient)"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    />
                </svg>

                {/* Steps */}
                <div className="relative space-y-32">
                    {steps.map((step, i) => (
                        <Reveal key={step.title} delay={i * 0.08}>
                            <div
                                className={`
                  relative
                  w-[320px]
                  md:w-[360px]
                  rounded-2xl
                  border border-white/15
                  bg-white/10
                  p-6
                  shadow-lg
                  ${i % 2 === 0 ? "mr-auto" : "ml-auto"}
                `}
                            >
                                {/* Connector Dot */}
                                <span
                                    className={`
                    absolute
                    top-1/2
                    -translate-y-1/2
                    h-3 w-3
                    rounded-full
                    bg-[var(--accent)]
                    shadow-[0_0_14px_var(--accent)]
                    ${i % 2 === 0 ? "-right-6" : "-left-6"}
                  `}
                                />

                                <h3 className="mb-2 text-lg md:text-xl font-semibold">
                                    {step.title}
                                </h3>

                                <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
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
