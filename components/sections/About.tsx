"use client";

import Section from "@/components/ui/Section";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";

const SKILLS = [
    // Core
    "Java",
    "Python",

    // Frontend
    "React",
    "Next.js",
    "Tailwind CSS",

    // Backend & Infra
    "Node.js",
    "Firebase",
    "Vercel",
    "Render",
    "GoDaddy",

    // AI Tools
    "ChatGPT",
    "ChatGPT Go",
    "Gemini Pro",
] as const;

export default function About() {
    return (
        <Section id="about" className="mt-32 md:mt-48 relative">
            <div className="mx-auto max-w-7xl grid gap-14 md:gap-20 md:grid-cols-2 items-start px-4 sm:px-6">

                {/* LEFT — ABOUT TEXT */}
                <Stagger>
                    <motion.h2
                        variants={staggerItem}
                        className="
              relative inline-block
              text-4xl sm:text-5xl md:text-6xl
              font-extrabold tracking-tight

              after:absolute after:left-0 after:-bottom-2
              after:h-[3px] after:w-0
              after:bg-[var(--accent)]
              after:transition-all after:duration-300
              hover:after:w-full
            "
                    >
                        About <span className="text-[var(--accent)]">Me</span>
                    </motion.h2>

                    <motion.p
                        variants={staggerItem}
                        className="
              mt-6
              text-base sm:text-lg md:text-xl
              text-[var(--text-secondary)]
              leading-relaxed
              relative
              group
            "
                    >
                        I’m a freelance frontend developer who builds fast, clean, and
                        good-looking websites that actually work in real life — not just demos.

                        {/* subtle underline on hover */}
                        <span
                            className="
                pointer-events-none
                absolute left-0 -bottom-2
                h-[2px] w-0
                bg-[var(--accent)]
                opacity-60
                transition-all duration-300
                group-hover:w-24
              "
                        />
                    </motion.p>

                    <motion.p
                        variants={staggerItem}
                        className="
              mt-4
              text-base sm:text-lg md:text-xl
              text-[var(--text-secondary)]
              leading-relaxed
              relative
              group
            "
                    >
                        I care a lot about performance, clean code, and smooth UI. I also use
                        AI tools daily to speed up development, debug faster, and ship better
                        quality work within tight deadlines.

                        <span
                            className="
                pointer-events-none
                absolute left-0 -bottom-2
                h-[2px] w-0
                bg-[var(--accent)]
                opacity-60
                transition-all duration-300
                group-hover:w-32
              "
                        />
                    </motion.p>
                </Stagger>

                {/* RIGHT — SKILLS */}
                <Stagger delay={0.15}>
                    <motion.h3
                        variants={staggerItem}
                        className="
              relative inline-block
              text-2xl sm:text-3xl md:text-4xl
              font-semibold

              after:absolute after:left-0 after:-bottom-2
              after:h-[3px] after:w-0
              after:bg-[var(--accent)]
              after:transition-all after:duration-300
              hover:after:w-full
            "
                    >
                        Skills, Tools & AI
                    </motion.h3>

                    <motion.ul
                        variants={staggerItem}
                        className="mt-6 flex flex-wrap gap-3"
                    >
                        {SKILLS.map((skill) => (
                            <motion.li
                                key={skill}
                                variants={staggerItem}
                                className="
                  relative
                  rounded-full
                  border border-white/20
                  bg-white/10
                  px-4 py-2
                  text-sm sm:text-base
                  font-medium
                  text-[var(--text-secondary)]
                  transition-colors
                  hover:text-white
                  hover:bg-white/20

                  after:absolute after:left-1/2 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:-translate-x-1/2
                  after:bg-[var(--accent)]
                  after:transition-all after:duration-300
                  hover:after:w-1/2
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
