"use client";

import Section from "@/components/ui/Section";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";

const FOCUS_AREAS = [
    "Deepfake Detection",
    "Face Manipulation Analysis",
    "Spatial CNN Models",
    "Frequency-Domain Analysis (FFT)",
    "Hybrid Spatial–Frequency Models",
    "ConvNeXt Architectures",
    "PyTorch",
    "FastAPI Deployment",
    "Model Evaluation & Generalization",
    "FaceForensics++ (Planned)",
] as const;

export default function About() {
    return (
        <Section id="about" className="mt-32 md:mt-48 relative">
            <div className="mx-auto max-w-7xl grid gap-14 md:gap-20 md:grid-cols-2 items-start px-4 sm:px-6">

                {/* LEFT — ABOUT PROJECT */}
                <Stagger>
                    <motion.h2
                        variants={staggerItem}
                        className="
              relative inline-block
              text-4xl sm:text-5xl md:text-6xl
              font-extrabold tracking-tight

              after:absolute after:left-0 after:-bottom-2
              after:h-[3px] after:w-0
              after:bg-[var(--accent)]
              after:transition-all after:duration-300
              hover:after:w-full
            "
                    >
                        About the <span className="text-[var(--accent)]">Project</span>
                    </motion.h2>

                    <motion.p
                        variants={staggerItem}
                        className="
              mt-6
              text-base sm:text-lg md:text-xl
              text-[var(--text-secondary)]
              leading-relaxed
              relative
              group
            "
                    >
                        This project focuses on detecting AI-generated deepfakes using modern
                        deep learning techniques. The goal is to build robust, transparent,
                        and research-driven systems that can identify manipulated facial
                        content with high reliability.

                        <span
                            className="
                pointer-events-none
                absolute left-0 -bottom-2
                h-[2px] w-0
                bg-[var(--accent)]
                opacity-60
                transition-all duration-300
                group-hover:w-28
              "
                        />
                    </motion.p>

                    <motion.p
                        variants={staggerItem}
                        className="
              mt-4
              text-base sm:text-lg md:text-xl
              text-[var(--text-secondary)]
              leading-relaxed
              relative
              group
            "
                    >
                        The work emphasizes correct data preprocessing, face-centric analysis,
                        and carefully fine-tuned neural networks. Rather than chasing inflated
                        accuracy numbers, the focus is on understanding limitations and
                        systematically improving detection through spatial and frequency-domain
                        modeling.

                        <span
                            className="
                pointer-events-none
                absolute left-0 -bottom-2
                h-[2px] w-0
                bg-[var(--accent)]
                opacity-60
                transition-all duration-300
                group-hover:w-40
              "
                        />
                    </motion.p>
                </Stagger>

                {/* RIGHT — FOCUS AREAS / TECH */}
                <Stagger delay={0.15}>
                    <motion.h3
                        variants={staggerItem}
                        className="
              relative inline-block
              text-2xl sm:text-3xl md:text-4xl
              font-semibold

              after:absolute after:left-0 after:-bottom-2
              after:h-[3px] after:w-0
              after:bg-[var(--accent)]
              after:transition-all after:duration-300
              hover:after:w-full
            "
                    >
                        Research Focus & Stack
                    </motion.h3>

                    <motion.ul
                        variants={staggerItem}
                        className="mt-6 flex flex-wrap gap-3"
                    >
                        {FOCUS_AREAS.map((item) => (
                            <motion.li
                                key={item}
                                variants={staggerItem}
                                className="
                  relative
                  rounded-full
                  border border-white/20
                  bg-white/10
                  px-4 py-2
                  text-sm sm:text-base
                  font-medium
                  text-[var(--text-secondary)]
                  transition-colors
                  hover:text-white
                  hover:bg-white/20

                  after:absolute after:left-1/2 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:-translate-x-1/2
                  after:bg-[var(--accent)]
                  after:transition-all after:duration-300
                  hover:after:w-1/2
                "
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </Stagger>

            </div>
        </Section>
    );
}
