"use client";

import Section from "@/components/ui/Section";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";

const skills = [
    "Java",
    "Python",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Firebase",
];

export default function About() {
    return (
        <Section id="about" className="mt-32">
            <div className="grid gap-16 md:grid-cols-2 items-start">

                {/* LEFT — ABOUT TEXT */}
                <Stagger>
                    <motion.h2
                        variants={staggerItem}
                        className="text-4xl font-bold mb-6"
                    >
                        About <span className="text-[var(--accent)]">Me</span>
                    </motion.h2>

                    <motion.p
                        variants={staggerItem}
                        className="text-[var(--text-secondary)] leading-relaxed"
                    >
                        I’m a developer who enjoys building fast, reliable, and visually
                        refined web applications. I care deeply about performance, clean
                        architecture, and thoughtful UI — not just making things work,
                        but making them feel right.
                    </motion.p>

                    <motion.p
                        variants={staggerItem}
                        className="mt-4 text-[var(--text-secondary)] leading-relaxed"
                    >
                        My focus is on modern web technologies and crafting experiences
                        that are scalable, maintainable, and user-friendly.
                    </motion.p>
                </Stagger>

                {/* RIGHT — SKILLS */}
                <Stagger delay={0.2}>
                    <motion.h3
                        variants={staggerItem}
                        className="text-2xl font-semibold mb-6"
                    >
                        Skills & Tools
                    </motion.h3>

                    <motion.div
                        variants={staggerItem}
                        className="flex flex-wrap gap-3"
                    >
                        {skills.map((skill) => (
                            <motion.span
                                key={skill}
                                variants={staggerItem}
                                className="
                  rounded-full
                  border border-white/20
                  bg-white/10 backdrop-blur
                  px-4 py-2
                  text-sm
                  text-[var(--text-secondary)]
                  hover:text-white
                  hover:bg-white/20
                  transition
                "
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </Stagger>

            </div>
        </Section>
    );
}
