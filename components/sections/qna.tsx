"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const QNA = [
  {
    q: "How many layers are there in ConvNeXt and EfficientNet?",
    a: "ConvNeXt-Base consists of multiple stages with a total of around 100+ layers when expanded (including convolution, normalization, and activation layers). It follows a modernized ResNet-like architecture. EfficientNet, on the other hand, uses compound scaling and typically has fewer but highly optimized layers (e.g., EfficientNet-B0 has ~237 layers including all operations). ConvNeXt focuses more on transformer-inspired design, while EfficientNet focuses on parameter efficiency.",
  },
  {
    q: "From which layer does feature selection take place?",
    a: "Feature selection primarily occurs in the deeper layers of the network. Early layers capture low-level features such as edges and textures, while middle layers detect patterns like shapes. The final layers (especially before the classifier) extract high-level semantic features, which are most useful for classification. In our project, features are taken from the final embedding layers of ConvNeXt before the classification head.",
  },
  {
    q: "What is Fourier Transform (FFT)? Why are we using it in this project and how does it work?",
    a: "Fourier Transform converts an image from the spatial domain (pixel values) into the frequency domain. Fast Fourier Transform (FFT) is an efficient algorithm to compute this transformation. In deepfake detection, spatial models often fail to detect subtle manipulations, but fake images introduce abnormal frequency patterns due to compression and generation artifacts. FFT helps expose these hidden patterns. Mathematically, it decomposes an image into sinusoidal components of different frequencies, allowing us to analyze periodic inconsistencies that are not visible in raw pixels.",
  },
  {
    q: "Can we use any other type of loss function?",
    a: "Yes. While Binary Cross Entropy (BCE) is commonly used for deepfake detection, other loss functions can improve performance. For example: Focal Loss helps handle class imbalance, Label Smoothing improves generalization, and Contrastive Loss can be used for feature separation. In advanced setups, hybrid loss functions combining BCE + regularization can also be used.",
  },
  {
    q: "Why do we need a CNN after FFT?",
    a: "FFT only transforms the image into frequency space but does not automatically extract meaningful features. A CNN is required to learn patterns from the frequency representation. It identifies abnormal frequency distributions, noise patterns, and periodic artifacts introduced by deepfake generation. Without CNN, FFT output is just raw data with no learned interpretation.",
  },
  {
    q: "What is convolution? Is it really used in our project?",
    a: "Convolution is a mathematical operation where a filter (kernel) slides over an image to extract features like edges, textures, and patterns. Yes, it is heavily used in our project. Both ConvNeXt and CNN layers use convolution operations to extract spatial features from images and frequency features from FFT outputs.",
  },
  {
    q: "After making a deepfake image, can we reconstruct the original image back?",
    a: "No, exact reconstruction of the original image is not possible. Deepfake generation modifies pixel values and introduces irreversible changes. While inverse operations like Inverse FFT exist, they only reconstruct from frequency data, not restore original content. Once a deepfake is generated, the original information is partially lost, making perfect recovery impossible.",
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
              Viva <span className="text-[var(--accent)]">Questions</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mb-14 text-left text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              Key technical questions and detailed explanations related to the deepfake detection system.
            </p>
          </Reveal>
        </div>

        {/* QnA */}
        <div className="mx-auto max-w-4xl space-y-4">
          {QNA.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <Reveal key={item.q} delay={0.1 + i * 0.05}>
                <div className="group overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl">

                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold">
                      {item.q}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-[var(--accent)]"
                    >
                      ▼
                    </motion.span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-5"
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
        <Reveal delay={0.4}>
          <p className="mt-14 text-center text-sm md:text-base text-[var(--text-secondary)]">
            These questions are based on real evaluation and viva discussions for deepfake detection systems.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
