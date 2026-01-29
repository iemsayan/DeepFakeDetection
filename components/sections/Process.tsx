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
        <Section id="process" className="mt-40 overflow-hidden">
            {/* Heading */}
            <Reveal>
                <h2 className="mb-24 text-center text-5xl md:text-6xl font-extrabold tracking-tight">
                    Idea → <span className="text-[var(--accent)]">Production</span>
                </h2>
            </Reveal>

            {/* Container (hard-clipped to prevent bleed) */}
            <div className="relative mx-auto max-w-5xl overflow-hidden px-4 md:px-8">
                {/* Subtle vertical guide */}
                <div
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            bottom-0
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-white/15
            to-transparent
          "
                />

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
                  ${i % 2 === 0
                                        ? "mr-auto"
                                        : "ml-auto"
                                    }
                `}
                            >
                                {/* Connector dot */}
                                <span
                                    className={`
                    absolute
                    top-1/2
                    -translate-y-1/2
                    h-3 w-3
                    rounded-full
                    bg-[var(--accent)]
                    shadow-[0_0_12px_var(--accent)]
                    ${i % 2 === 0
                                            ? "-right-6"
                                            : "-left-6"
                                        }
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
