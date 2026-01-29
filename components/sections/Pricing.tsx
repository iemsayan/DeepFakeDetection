"use client";

import Section from "@/components/ui/Section";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <Section id="pricing" className="mt-48">
            <Stagger>
                <motion.h2
                    variants={staggerItem}
                    className="mb-16 text-5xl md:text-6xl font-extrabold tracking-tight"
                >
                    Pricing <span className="text-[var(--accent)]">Model</span>
                </motion.h2>

                <motion.div
                    variants={staggerItem}
                    className="
            mx-auto
            max-w-2xl
            rounded-3xl
            border border-white/20
            bg-white/10 backdrop-blur-xl
            p-10 md:p-12
          "
                >
                    <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                        MVP Launch Plan
                    </h3>

                    <p className="text-6xl md:text-7xl font-extrabold mb-4">
                        ₹0
                    </p>

                    <p className="text-base md:text-lg text-[var(--text-secondary)] mb-8">
                        Zero upfront cost for the <strong>right project</strong>.
                    </p>

                    <ul className="space-y-4 text-base md:text-lg">
                        <li>✔ Project ready in <strong>2 weeks</strong></li>
                        <li>✔ MVP-focused, production-ready code</li>
                        <li>✔ Clean architecture & future scalability</li>
                        <li>✔ AI-assisted speed with human judgment</li>
                        <li>✔ Clear timelines & transparent communication</li>
                    </ul>

                    <p className="mt-8 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                        Ideal for founders and early-stage startups who want to validate
                        an idea quickly — without cutting corners or committing to heavy
                        upfront costs.
                    </p>
                </motion.div>

                <p className="mt-8 text-center text-sm md:text-base text-[var(--text-secondary)]">
                    Limited availability · Working with select founders and teams
                </p>
            </Stagger>
        </Section>
    );
}
