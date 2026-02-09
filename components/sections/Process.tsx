"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Problem Definition",
        desc: "Define the deepfake detection objective, scope (image vs video), and known challenges such as subtle facial artifacts and generalization issues.",
    },
    {
        title: "Dataset Collection & Verification",
        desc: "Collect REAL and FAKE samples, verify labels, remove corrupted data, and analyze class distribution to prevent hidden dataset bias.",
    },
    {
        title: "Data Standardization",
        desc: "Reorganize raw datasets into a consistent structure compatible with deep learning frameworks, ensuring correct class mapping.",
    },
    {
        title: "Face Detection & Cropping",
        desc: "Detect and isolate facial regions using RetinaFace, removing background noise and focusing the model on manipulation-prone areas.",
    },
    {
        title: "Model Architecture Selection",
        desc: "Select ConvNeXt-Base as the spatial backbone due to its ability to capture fine-grained texture inconsistencies in facial images.",
    },
    {
        title: "Fine-Tuning Strategy",
        desc: "Apply transfer learning by freezing and selectively unfreezing layers, optimizing with AdamW at a low learning rate for stability.",
    },
    {
        title: "Training & Validation",
        desc: "Train the model on face-centric data, monitor validation behavior, and identify overfitting or saturation in spatial performance.",
    },
    {
        title: "Evaluation & Analysis",
        desc: "Evaluate on unseen test data, analyze failure cases, and document limitations of purely spatial deepfake detection.",
    },
    {
        title: "Deployment",
        desc: "Export trained weights and deploy the model via a FastAPI backend for real-time inference through a web interface.",
    },
    {
        title: "Iterative Improvement",
        desc: "Extend the pipeline with frequency-domain and temporal modeling, leading toward hybrid image and video deepfake detection systems.",
    },
];

export default function Process() {
    return (
        <Section id="process" className="mt-24 sm:mt-32 md:mt-44 overflow-hidden">
            {/* Heading */}
            <Reveal>
                <h2 className="mb-6 sm:mb-8 md:mb-12 text-center text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
                    Research →
                    <span className="text-[var(--accent)]"> Deployment</span>
                </h2>
            </Reveal>

            {/* Subtext */}
            <Reveal delay={0.1}>
                <p className="mx-auto mb-12 max-w-2xl text-center text-sm sm:text-base md:text-lg text-[var(--text-secondary)]">
                    A transparent, step-by-step overview of how the deepfake
                    detection system is designed, trained, evaluated, and
                    continuously improved.
                </p>
            </Reveal>

            {/* Timeline */}
            <div className="relative mx-auto max-w-5xl px-4 md:px-8">
                {/* Center line (desktop) */}
                <div
                    className="
                      pointer-events-none
                      absolute left-1/2 top-0 bottom-0
                      hidden md:block
                      w-px -translate-x-1/2
                      bg-gradient-to-b
                      from-transparent
                      via-white/15
                      to-transparent
                    "
                />

                {/* Steps */}
                <div className="relative space-y-6 sm:space-y-8 md:space-y-20">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <div
                                tabIndex={0}
                                className={`
                                  group relative mx-auto w-full
                                  max-w-[92%] sm:max-w-[440px] md:max-w-[380px]
                                  rounded-2xl
                                  border border-white/15
                                  bg-white/10
                                  p-5 sm:p-6
                                  transition-all duration-300
                                  active:scale-[0.98]
                                  focus-visible:ring-2
                                  focus-visible:ring-[var(--accent)]
                                  md:mx-0
                                  ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                                `}
                            >
                                {/* Accent glow */}
                                <div
                                    className="
                                      pointer-events-none
                                      absolute inset-0
                                      rounded-2xl
                                      opacity-0
                                      group-hover:opacity-100
                                      transition
                                      shadow-[0_0_26px_var(--accent-soft)]
                                    "
                                />

                                {/* Connector dot */}
                                <span
                                    className={`
                                      absolute top-1/2 hidden md:block
                                      -translate-y-1/2
                                      h-3 w-3 rounded-full
                                      bg-[var(--accent)]
                                      shadow-[0_0_12px_var(--accent)]
                                      ${i % 2 === 0 ? "-right-6" : "-left-6"}
                                    `}
                                />

                                {/* Content */}
                                <div className="relative z-10 space-y-2 text-left">
                                    {/* Step number */}
                                    <span className="text-xs font-medium tracking-wide text-[var(--accent)]">
                                        STEP {String(i + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                                        {step.title}
                                    </h3>

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
