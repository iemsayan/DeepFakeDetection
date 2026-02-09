"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const items = [
    {
        title: "Image Deepfake Detection (Deployed)",
        desc: "A ConvNeXt-based spatial deepfake detection model operating on face-cropped images. Designed as a transparent baseline system with documented limitations.",
        tag: "LIVE",
    },
    {
        title: "Model Architecture & Training Pipeline",
        desc: "Detailed breakdown of dataset preprocessing, face detection using RetinaFace, model selection, fine-tuning strategy, and evaluation methodology.",
        tag: "DOCUMENTED",
    },
    {
        title: "FastAPI Inference Backend",
        desc: "Production-ready inference service exposing the trained model through REST APIs for real-time image analysis and integration.",
        tag: "OPEN SOURCE",
    },
    {
        title: "Frequency-Domain Research (FFT)",
        desc: "Ongoing research focused on capturing GAN-induced artifacts invisible in RGB space using frequency analysis.",
        tag: "IN PROGRESS",
    },
    {
        title: "Video Deepfake Detection",
        desc: "Temporal and frequency-aware deepfake detection for videos. Currently under active research and not yet publicly released.",
        tag: "LOCKED",
    },
];

const cardAnim = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

export default function Research() {
    return (
        <Section id="research" className="mt-28 md:mt-44">
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">

                {/* Heading */}
                <div className="max-w-3xl">
                    <h2 className="mb-4 text-left text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                        Research &{" "}
                        <span className="text-[var(--accent)]">Resources</span>
                    </h2>

                    <p className="mb-14 text-left text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                        An overview of the systems, experiments, and research components
                        that form the foundation of the deepfake detection framework.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            variants={cardAnim}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.45,
                                ease: "easeOut",
                                delay: i * 0.05,
                            }}
                            className="
                relative
                rounded-2xl
                border border-white/15
                bg-white/10
                backdrop-blur-xl
                p-6
                shadow-lg
              "
                        >
                            {/* Glow */}
                            <div
                                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-2xl
                  shadow-[0_0_22px_rgba(99,102,241,0.22)]
                "
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="mb-3 flex items-center justify-between">
                                    <h3 className="text-lg sm:text-xl font-semibold">
                                        {item.title}
                                    </h3>

                                    <span
                                        className="
                      rounded-full
                      bg-white/20
                      px-3 py-1
                      text-xs
                      font-medium
                      text-[var(--accent)]
                    "
                                    >
                                        {item.tag}
                                    </span>
                                </div>

                                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
