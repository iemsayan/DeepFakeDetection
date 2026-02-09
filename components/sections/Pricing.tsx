"use client";

import Section from "@/components/ui/Section";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Products() {
    return (
        <Section className="mt-32 md:mt-48">
            <div id="products">
                <Stagger>
                    {/* Heading */}
                    <motion.h2
                        variants={staggerItem}
                        className="mb-12 md:mb-16 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
                    >
                        Our <span className="text-[var(--accent)]">Products</span>
                    </motion.h2>

                    <div className="grid gap-10 md:grid-cols-2">

                        {/* PRODUCT 1 — IMAGE DEEPFAKE */}
                        <motion.div
                            variants={staggerItem}
                            className="
                              relative
                              rounded-3xl
                              border border-white/20
                              bg-white/10
                              backdrop-blur-xl
                              p-6 sm:p-8 md:p-10
                              shadow-xl
                            "
                        >
                            {/* Glow */}
                            <div
                                className="
                                  pointer-events-none
                                  absolute inset-0
                                  rounded-3xl
                                  shadow-[0_0_35px_rgba(214,255,0,0.25)]
                                "
                            />

                            {/* Status badge */}
                            <span
                                className="
                                  absolute
                                  top-4 right-4
                                  z-20
                                  rounded-full
                                  bg-emerald-400
                                  px-4 py-1.5
                                  text-xs sm:text-sm
                                  font-semibold
                                  text-black
                                  shadow-lg
                                "
                            >
                                LIVE
                            </span>

                            <div className="relative z-10">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                                    Image Deepfake Detection
                                </h3>

                                <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] mb-8">
                                    Upload an image and detect whether the face is REAL or AI-generated
                                    using a ConvNeXt-based deep learning model trained on face-centric data.
                                </p>

                                <ul className="space-y-4 text-sm sm:text-base md:text-lg mb-10">
                                    {[
                                        "Face detection & cropping using RetinaFace",
                                        "Spatial CNN (ConvNeXt-Base)",
                                        "ImageNet pretrained weights",
                                        "Clean train / validation / test split",
                                        "FastAPI-powered inference backend",
                                    ].map((text) => (
                                        <li key={text} className="flex gap-3">
                                            <span className="text-[var(--accent)]">✔</span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="https://github.com/nvakumar/deepfake_detection_fastapi.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                      group
                                      relative
                                      inline-flex
                                      items-center
                                      justify-center
                                      rounded-2xl
                                      bg-[var(--accent)]
                                      px-8 py-4
                                      text-base sm:text-lg
                                      font-semibold
                                      text-black
                                      shadow-lg
                                      transition
                                      hover:scale-[1.02]
                                      active:scale-[0.98]
                                      overflow-hidden
                                    "
                                >
                                    <span
                                        className="
                                          absolute inset-0
                                          opacity-0
                                          group-hover:opacity-100
                                          transition
                                          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_70%)]
                                        "
                                    />
                                    <span className="relative">
                                        View Source & API →
                                    </span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* PRODUCT 2 — VIDEO DEEPFAKE */}
                        <motion.div
                            variants={staggerItem}
                            className="
                              relative
                              rounded-3xl
                              border border-white/20
                              bg-white/10
                              backdrop-blur-xl
                              p-6 sm:p-8 md:p-10
                              shadow-xl
                              opacity-90
                            "
                        >
                            {/* Glow */}
                            <div
                                className="
                                  pointer-events-none
                                  absolute inset-0
                                  rounded-3xl
                                  shadow-[0_0_25px_rgba(214,255,0,0.15)]
                                "
                            />

                            {/* Status badge */}
                            <span
                                className="
                                  absolute
                                  top-4 right-4
                                  z-20
                                  rounded-full
                                  bg-yellow-400
                                  px-4 py-1.5
                                  text-xs sm:text-sm
                                  font-semibold
                                  text-black
                                  shadow-lg
                                "
                            >
                                IN DEVELOPMENT
                            </span>

                            <div className="relative z-10">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                                    Video Deepfake Detection
                                </h3>

                                <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] mb-8">
                                    Detect manipulated videos using temporal consistency
                                    and frequency-domain artifacts across frames.
                                </p>

                                <ul className="space-y-4 text-sm sm:text-base md:text-lg mb-10">
                                    {[
                                        "Frame-level face extraction",
                                        "Spatial + frequency feature fusion",
                                        "FFT-based artifact analysis",
                                        "Sequence-aware modeling",
                                        "Improved generalization on real-world videos",
                                    ].map((text) => (
                                        <li key={text} className="flex gap-3">
                                            <span className="text-[var(--accent)]">✔</span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>

                                <span
                                    className="
                                      inline-block
                                      rounded-2xl
                                      border border-white/30
                                      bg-white/10
                                      px-8 py-4
                                      text-base sm:text-lg
                                      font-medium
                                      text-[var(--text-secondary)]
                                    "
                                >
                                    Coming Soon
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer note */}
                    <p className="mt-10 text-center text-xs sm:text-sm md:text-base text-[var(--text-secondary)]">
                        Research-driven systems · Transparent limitations · Continuous improvement
                    </p>
                </Stagger>
            </div>
        </Section>
    );
}
