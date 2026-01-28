"use client";

import Section from "@/components/ui/Section";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <Section id="pricing" className="mt-32">
            <Stagger>
                <motion.h2
                    variants={staggerItem}
                    className="mb-12 text-4xl font-bold"
                >
                    Pricing <span className="text-[var(--accent)]">Model</span>
                </motion.h2>

                <motion.div
                    variants={staggerItem}
                    className="
            max-w-xl
            rounded-3xl
            border border-white/20
            bg-white/10 backdrop-blur-xl
            p-8
          "
                >
                    <h3 className="text-2xl font-semibold mb-2">
                        MVP Launch Plan
                    </h3>

                    <p className="text-5xl font-bold mb-4">
                        ₹0
                    </p>

                    <p className="text-[var(--text-secondary)] mb-6">
                        Yes — zero upfront cost for the right project.
                    </p>

                    <ul className="space-y-3 text-sm">
                        <li>✔ Project ready in <strong>2 weeks</strong></li>
                        <li>✔ MVP-focused, production-ready code</li>
                        <li>✔ Clean architecture & scalability</li>
                        <li>✔ AI-assisted efficiency + human judgment</li>
                        <li>✔ Transparent communication</li>
                    </ul>

                    <p className="mt-6 text-[var(--text-secondary)] text-sm">
                        Ideal for founders, early-stage startups, or anyone
                        looking to validate an idea quickly — without cutting
                        corners.
                    </p>
                </motion.div>
            </Stagger>
        </Section>
    );
}
