"use client";

import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";

const cardAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <Section id="projects" className="mt-28 md:mt-44">
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">

                {/* Heading + intro (aligned block) */}
                <div className="max-w-3xl">
                    <h2 className="mb-4 text-left text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                        My Freelance{" "}
                        <span className="text-[var(--accent)]">Work</span>
                    </h2>

                    <p className="mb-14 text-left text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                        I build modern, high-performance web experiences — from landing pages
                        to full production-ready applications. I use AI to build faster, catch
                        issues early, and deliver clean, high-quality results.
                    </p>
                </div>

                {/* Projects list */}
                <div className="space-y-10 sm:space-y-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            variants={cardAnim}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.45,
                                ease: "easeOut",
                                delay: i * 0.06,
                            }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
