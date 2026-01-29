"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const QNA = [
    {
        q: "Why is your pricing low?",
        a: "I’m a student, so I keep my pricing affordable. That doesn’t mean low quality. Your project will be clean, production-ready, and properly tested.",
    },
    {
        q: "Why is my project taking time?",
        a: "Most projects are completed within 72 hours after confirmation. If it takes a bit longer, it’s because I’m focusing on quality and making sure everything works properly.",
    },
    {
        q: "Do I need to pay before getting the code?",
        a: "No. First, I build and host the project and show it to you. If you’re satisfied, then you pay and I’ll share the complete source code with you.",
    },
    {
        q: "Do you handle domain and deployment?",
        a: "Yes. You need to purchase the domain or hosting, and I’ll handle the setup, deployment, and production configuration.",
    },
    {
        q: "Do you only make portfolio & small websites?",
        a: "No. I also build more complex websites, but right now I’m limiting freelance work to smaller projects due to time constraints.",
    },
    {
        q: "What if I face issues later?",
        a: "I provide free maintenance and bug fixes for up to 6 months after delivery. If something breaks later, feel free to reach out.",
    },
];

export default function QnA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section id="qna" className="mt-28 md:mt-44">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">

                {/* Heading */}
                <div className="max-w-3xl">
                    <Reveal>
                        <h2 className="mb-4 text-left text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                            Questions{" "}
                            <span className="text-[var(--accent)]">Clients Ask</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <p className="mb-14 text-left text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                            Some common questions clients usually ask before starting a project.
                        </p>
                    </Reveal>
                </div>

                {/* QnA list */}
                <div className="mx-auto max-w-4xl space-y-3 sm:space-y-4">
                    {QNA.map((item, i) => {
                        const isOpen = openIndex === i;

                        return (
                            <Reveal key={item.q} delay={0.1 + i * 0.03}>
                                <div className="group overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl">

                                    {/* Question */}
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className="
                      flex w-full items-center justify-between
                      px-5 sm:px-6 md:px-8 py-4
                      text-left
                      hover:bg-white/5
                      transition-colors
                    "
                                    >
                                        {/* Question text with underline */}
                                        <span
                                            className="
                        relative
                        text-sm sm:text-base md:text-lg
                        font-semibold

                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0
                        after:bg-[var(--accent)]
                        after:transition-all after:duration-300
                        group-hover:after:w-full
                      "
                                        >
                                            {item.q}
                                        </span>

                                        <motion.span
                                            aria-hidden
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.18, ease: "easeOut" }}
                                            className="ml-3 text-[var(--accent)]"
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
                                                transition={{ duration: 0.22, ease: "easeOut" }}
                                                className="px-5 sm:px-6 md:px-8 pb-5"
                                            >
                                                <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
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

                {/* Footer */}
                <Reveal delay={0.35}>
                    <p className="mt-14 text-center text-sm md:text-base text-[var(--text-secondary)]">
                        Still have questions? You can reach out from the{" "}
                        <a
                            href="#contact"
                            className="
                inline-block
                !text-white
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-white
                after:transition-all after:duration-300
                hover:after:w-full
              "
                        >
                            Contact
                        </a>{" "}
                        section.
                    </p>
                </Reveal>
            </div>
        </Section>
    );
}
