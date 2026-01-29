"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const steps = [
    { title: "Idea", desc: "We talk through the idea and what you actually need." },
    { title: "Planning", desc: "I break it down — features, tech stack, timelines and scope." },
    { title: "Design", desc: "Basic UI/UX, layout and user flow so everything makes sense before coding." },
    { title: "Development", desc: "I build the product with clean, scalable, production-ready code." },
    { title: "Testing", desc: "I test edge cases, performance and make sure nothing breaks." },
    { title: "Deployment", desc: "Hosting, domain and setup so the site is live and working properly." },
    { title: "Production", desc: "The product goes live, users use it and we improve it over time." },
];

export default function Process() {
    return (
        <Section id="process" className="mt-28 md:mt-40 overflow-hidden">
            {/* Heading */}
            <Reveal>
                <h2 className="mb-10 md:mb-16 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                    Idea → <span className="text-[var(--accent)]">Production</span>
                </h2>
            </Reveal>

            {/* Bio line (NO underline) */}
            <Reveal delay={0.1}>
                <p className="mx-auto mb-12 max-w-2xl text-center text-sm sm:text-base md:text-lg text-[var(--text-secondary)]">
                    This is how I usually take a project from an idea to something real and live.
                </p>
            </Reveal>

            {/* Timeline container */}
            <div className="relative mx-auto max-w-5xl px-4 md:px-8">
                {/* Center line (desktop only) */}
                <div
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            bottom-0
            hidden md:block
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-white/15
            to-transparent
          "
                />

                {/* Steps */}
                <div className="relative space-y-10 md:space-y-20">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0.5 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "-80px" }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <div
                                tabIndex={0}
                                className={`
                  group
                  relative
                  mx-auto
                  w-full
                  max-w-[360px]
                  rounded-2xl
                  border border-white/15
                  bg-white/10
                  p-5 sm:p-6
                  transition-all duration-300
                  md:mx-0
                  ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                `}
                            >
                                {/* Glow on scroll */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.35 }}
                                    className="
                    pointer-events-none
                    absolute inset-0
                    rounded-2xl
                    shadow-[0_0_22px_rgba(99,102,241,0.22)]
                  "
                                />

                                {/* Connector dot (desktop only) */}
                                <span
                                    className={`
                    absolute
                    top-1/2
                    hidden md:block
                    -translate-y-1/2
                    h-3 w-3
                    rounded-full
                    bg-[var(--accent)]
                    shadow-[0_0_10px_var(--accent)]
                    ${i % 2 === 0 ? "-right-6" : "-left-6"}
                  `}
                                />

                                {/* CONTENT */}
                                <div className="relative z-10 text-left space-y-1">
                                    {/* Title — UNDERLINE ONLY HERE */}
                                    <h3
                                        className="
                      underline
                      decoration-transparent
                      underline-offset-4
                      transition-colors duration-300
                      group-hover:decoration-[var(--accent)]
                      group-focus-visible:decoration-[var(--accent)]
                      text-base sm:text-lg md:text-xl
                      font-semibold
                    "
                                    >
                                        {step.title}
                                    </h3>

                                    {/* Description — NO underline */}
                                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
