"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Problem Definition",
    desc: "Formulated deepfake detection as a binary classification task (REAL vs FAKE) with focus on face-centric manipulation artifacts and generalization to unseen samples.",
  },
  {
    title: "Dataset Collection (Kaggle)",
    desc: "Collected publicly available real and deepfake face datasets. Verified labels, removed corrupted samples, and ensured balanced class distribution.",
  },
  {
    title: "Face-Centric Preprocessing",
    desc: "Applied RetinaFace for face detection and cropping. Standardized images to 224×224 resolution and organized into 70/15/15 train-validation-test splits.",
  },
  {
    title: "Data Normalization & Augmentation",
    desc: "Performed resizing, tensor conversion, normalization, and applied augmentation techniques (flip, rotation, brightness shifts) to improve robustness.",
  },
  {
    title: "Spatial Model (ConvNeXt-Base)",
    desc: "Fine-tuned a pretrained ConvNeXt-Base model (ImageNet) using transfer learning to capture spatial texture inconsistencies introduced by deepfakes.",
  },
  {
    title: "Fine-Tuning Strategy",
    desc: "Used AdamW optimizer (LR = 3e-5), partial layer unfreezing, and regularization techniques to stabilize training and prevent overfitting.",
  },
  {
    title: "Baseline Evaluation",
    desc: "Achieved ~60–70% accuracy using spatial features alone, revealing limitations in detecting high-quality and unseen deepfake samples.",
  },
  {
    title: "Frequency-Domain Feature Extraction",
    desc: "Applied Fast Fourier Transform (FFT) to extract frequency magnitude spectra, capturing hidden manipulation patterns not visible in pixel space.",
  },
  {
    title: "Hybrid Feature Fusion",
    desc: "Designed a spatial + frequency hybrid architecture to combine ConvNeXt spatial embeddings with FFT-based features for improved robustness.",
  },
  {
    title: "Deployment (FastAPI + Web UI)",
    desc: "Exported trained weights and deployed the model via FastAPI backend, enabling real-time image-based deepfake detection through a web interface.",
  },
];


export default function Process() {
  return (
    <Section id="process" className="mt-24 sm:mt-32 md:mt-44 overflow-hidden">
      {/* Heading */}
      <Reveal>
        <h2 className="
          mb-6 sm:mb-8 md:mb-12
          text-center
          text-3xl sm:text-4xl md:text-6xl
          font-extrabold tracking-tight
        ">
          Research to{" "}
          <span className="text-[var(--accent)]">Deployment</span>
        </h2>
      </Reveal>

      {/* Subtext */}
      <Reveal delay={0.1}>
        <p className="
          mx-auto mb-12
          max-w-2xl
          text-center
          text-sm sm:text-base md:text-lg
          text-[var(--text-secondary)]
        ">
          A clear, end-to-end view of how the deepfake detection system is
          designed, trained, evaluated, and incrementally improved.
        </p>
      </Reveal>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl px-4 md:px-8">
        {/* Center line (desktop only) */}
        <div
          className="
            pointer-events-none
            absolute left-1/2 top-0 bottom-0
            hidden md:block
            w-px -translate-x-1/2
            bg-gradient-to-b
            from-transparent via-white/15 to-transparent
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
