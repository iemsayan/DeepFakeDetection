"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const QNA = [
    {
        q: "How reliable is deepfake detection in real-world scenarios?",
        a: "Deepfake detection is inherently challenging. While the current system performs well on curated datasets, real-world performance depends on image quality, generation method, and domain shift. This project explicitly documents limitations instead of hiding them.",
    },
    {
        q: "Why does the system focus only on facial regions?",
        a: "Deepfake manipulation artifacts are concentrated around facial textures, edges, and blending regions. Cropping faces removes background noise and improves the model’s sensitivity to subtle inconsistencies.",
    },
    {
        q: "Why does the image model not achieve extremely high accuracy?",
        a: "Pure spatial CNNs typically saturate around 60–70% accuracy on complex deepfake datasets. Higher performance usually requires frequency-domain or temporal information, which this project is actively exploring.",
    },
    {
        q: "What makes video deepfake detection more difficult?",
        a: "Video deepfake detection requires modeling temporal consistency, motion patterns, and frame-to-frame coherence. A frame-level detector alone is insufficient, which is why the video model is under careful research rather than rushed release.",
    },
    {
        q: "What datasets are used for training and evaluation?",
        a: "Initial experiments use curated image datasets with verified REAL and FAKE labels. Planned migration to FaceForensics++ will improve benchmarking consistency and generalization.",
    },
    {
        q: "Is this system meant for production use?",
        a: "The deployed model demonstrates feasibility and research insights. It is suitable for experimentation, prototyping, and integration testing, but should be combined with additional safeguards for high-stakes production environments.",
    },
    {
        q: "Is the project open-source?",
        a: "Yes. The inference backend and trained model weights are open-sourced to promote transparency, reproducibility, and community-driven improvements.",
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
                            Common <span className="text-[var(--accent)]">Questions</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <p className="mb-14 text-left text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                            Answers to frequently asked questions about the deepfake detection
                            models, their limitations, and ongoing research direction.
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
                        Have additional research questions or suggestions? Reach out via the{" "}
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
