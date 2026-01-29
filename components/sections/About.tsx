"use client";

import Section from "@/components/ui/Section";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";

const SKILLS = [
    "Java",
    "Python",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Firebase",
] as const;

export default function About() {
    return (
        <Section id="about" className="mt-48">
            <div className="mx-auto max-w-7xl grid gap-20 md:grid-cols-2 items-start">

                {/* LEFT — ABOUT TEXT */}
                <Stagger>
                    <motion.h2
                        variants={staggerItem}
                        className="text-5xl md:text-6xl font-extrabold tracking-tight"
                    >
                        About <span className="text-[var(--accent)]">Me</span>
                    </motion.h2>

                    <motion.p
                        variants={staggerItem}
                        className="mt-8 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed"
                    >
                        I’m a freelance frontend developer focused on building fast,
                        reliable, and visually refined web applications that solve real
                        business problems — not just ship features.
                    </motion.p>

                    <motion.p
                        variants={staggerItem}
                        className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed"
                    >
                        I care deeply about performance, clean architecture, and thoughtful
                        UI/UX, ensuring every product I work on is scalable, maintainable,
                        and ready for real users.
                    </motion.p>
                </Stagger>

                {/* RIGHT — SKILLS */}
                <Stagger delay={0.2}>
                    <motion.h3
                        variants={staggerItem}
                        className="text-3xl md:text-4xl font-semibold"
                    >
                        Skills & Tools
                    </motion.h3>

                    <motion.ul
                        variants={staggerItem}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        {SKILLS.map((skill) => (
                            <motion.li
                                key={skill}
                                variants={staggerItem}
                                className="
                  rounded-full
                  border border-white/20
                  bg-white/10 backdrop-blur
                  px-6 py-3
                  text-base md:text-lg
                  font-medium
                  text-[var(--text-secondary)]
                  hover:text-white
                  hover:bg-white/25
                  transition-colors
                "
                            >
                                {skill}
                            </motion.li>
                        ))}
                    </motion.ul>
                </Stagger>

            </div>
        </Section>
    );
}
