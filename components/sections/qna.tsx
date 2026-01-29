"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const QNA = [
    {
        q: "What type of projects do you usually work on?",
        a: "I typically work on web applications, MVPs, dashboards, landing pages, and frontend-heavy products for startups, founders, and small teams.",
    },
    {
        q: "Are you available for freelance or contract work?",
        a: "Yes. I’m currently open to select freelance and contract opportunities, depending on scope, timeline, and alignment.",
    },
    {
        q: "How does the engagement usually start?",
        a: "We start with a short discussion to understand your idea or requirements. From there, I propose a clear plan, timeline, and next steps.",
    },
    {
        q: "Do you handle production and deployment?",
        a: "Yes. I handle production-ready code, deployment, and setup on platforms like Vercel, including performance and reliability considerations.",
    },
    {
        q: "What about pricing and payments?",
        a: "Pricing depends on the scope and complexity of the project. For the right MVP-focused projects, I offer zero upfront cost with clear milestones.",
    },
    {
        q: "Will I be involved during development?",
        a: "Absolutely. I believe in transparent communication and regular updates so you’re always aware of progress and decisions.",
    },
];

export default function QnA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section id="qna" className="mt-48">
            <Reveal>
                <h2 className="mb-6 text-5xl md:text-6xl font-extrabold tracking-tight">
                    Questions <span className="text-[var(--accent)]">Clients Ask</span>
                </h2>
            </Reveal>

            <Reveal delay={0.1}>
                <p className="mb-20 max-w-2xl text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                    A few common questions to help you understand how I work and what
                    you can expect when collaborating with me.
                </p>
            </Reveal>

            <div className="mx-auto max-w-4xl space-y-4">
                {QNA.map((item, i) => {
                    const isOpen = openIndex === i;

                    return (
                        <Reveal key={item.q} delay={0.15 + i * 0.05}>
                            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl overflow-hidden">
                                {/* Question */}
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="
                    group
                    flex w-full items-center justify-between
                    px-8 py-6
                    text-left
                    cursor-pointer
                    select-none
                    hover:bg-white/5
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[var(--accent)]/60
                    transition-colors
                  "
                                >
                                    <span className="text-lg md:text-xl font-semibold">
                                        {item.q}
                                    </span>

                                    {/* Arrow */}
                                    <motion.span
                                        aria-hidden
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                        className="
                      ml-4
                      text-[var(--accent)]
                      transition-transform
                      group-hover:opacity-80
                    "
                                    >
                                        ▼
                                    </motion.span>
                                </button>

                                {/* Answer */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="px-8 pb-6"
                                        >
                                            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                                {item.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </Reveal>
                    );
                })}
            </div>

            <Reveal delay={0.5}>
                <p className="mt-20 text-center text-sm md:text-base text-[var(--text-secondary)]">
                    Still have questions? Feel free to reach out — happy to discuss.
                </p>
            </Reveal>
        </Section>
    );
}
