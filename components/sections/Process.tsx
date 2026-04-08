"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Problem Formulation",
    desc: "Formulated deepfake detection as a binary classification problem (REAL vs FAKE), focusing on detecting subtle facial manipulation artifacts and ensuring generalization to unseen forgeries.",
  },
  {
    title: "Benchmark Dataset (FaceForensics++)",
    desc: "Utilized the FaceForensics++ dataset containing real and manipulated videos. Extracted frames, ensured label correctness, and balanced real vs fake samples for robust training.",
  },
  {
    title: "Frame Extraction Pipeline",
    desc: "Extracted frames from videos using OpenCV, removed redundant frames, and created a structured dataset pipeline suitable for deep learning workflows.",
  },
  {
    title: "Dual Face Detection Strategy",
    desc: "Implemented RetinaFace for high-accuracy face localization and Haar Cascade for lightweight, real-time detection, enabling both performance and deployment flexibility.",
  },
  {
    title: "Face-Centric Preprocessing",
    desc: "Cropped detected faces, resized to 224×224, normalized pixel values, and organized into train/validation/test splits (70/15/15).",
  },
  {
    title: "Data Augmentation",
    desc: "Applied augmentations such as horizontal flips, rotations, and brightness variations to improve model robustness against real-world variations.",
  },
  {
    title: "Spatial Feature Learning (ConvNeXt)",
    desc: "Fine-tuned a pretrained ConvNeXt-Base model on ImageNet to learn spatial inconsistencies like texture artifacts, blending errors, and facial distortions.",
  },
  {
    title: "Frequency Feature Extraction (FFT)",
    desc: "Applied Fast Fourier Transform (FFT) to convert images into frequency domain, capturing hidden periodic patterns and compression artifacts invisible in pixel space.",
  },
  {
    title: "Hybrid Model Design",
    desc: "Designed a hybrid architecture combining spatial features (ConvNeXt) with frequency-domain features (FFT-based CNN) to improve detection of high-quality deepfakes.",
  },
  {
    title: "Training Strategy",
    desc: "Trained using AdamW optimizer (LR = 3e-5), partial layer unfreezing, and regularization techniques to stabilize learning and prevent overfitting.",
  },
  {
    title: "Evaluation & Insights",
    desc: "Observed ~60–70% accuracy with spatial-only model, highlighting limitations. Hybrid approach improves robustness against unseen and high-quality deepfakes.",
  },
  {
    title: "Deployment (FastAPI + Hugging Face)",
    desc: "Deployed models using FastAPI backend and integrated with a web interface. Lightweight Haar-based pipeline deployed on Hugging Face for real-time inference.",
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
          End-to-end pipeline covering dataset engineering, dual-domain learning
          (spatial + frequency), hybrid modeling, and real-time deployment.
        </p>
      </Reveal>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl px-4 md:px-8">
        {/* Center line */}
        <div className="
          pointer-events-none
          absolute left-1/2 top-0 bottom-0
          hidden md:block
          w-px -translate-x-1/2
          bg-gradient-to-b
          from-transparent via-white/15 to-transparent
        " />

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
                  rounded-2xl border border-white/15 bg-white/10
                  p-5 sm:p-6 transition-all duration-300
                  active:scale-[0.98]
                  focus-visible:ring-2 focus-visible:ring-[var(--accent)]
                  md:mx-0
                  ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                `}
              >
                {/* Glow */}
                <div className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-100 transition
                  shadow-[0_0_26px_var(--accent-soft)]
                " />

                {/* Dot */}
                <span className={`
                  absolute top-1/2 hidden md:block -translate-y-1/2
                  h-3 w-3 rounded-full bg-[var(--accent)]
                  shadow-[0_0_12px_var(--accent)]
                  ${i % 2 === 0 ? "-right-6" : "-left-6"}
                `} />

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
