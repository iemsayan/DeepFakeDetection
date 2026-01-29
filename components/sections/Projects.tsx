"use client";

import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";

const cardAnim = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <Section id="projects" className="mt-48">
            <div className="mx-auto max-w-6xl px-4 md:px-8 relative z-10">
                {/* Heading */}
                <h2 className="mb-6 text-5xl md:text-6xl font-extrabold tracking-tight">
                    Selected <span className="text-[var(--accent)]">Projects</span>
                </h2>

                <p className="mb-24 max-w-3xl text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                    Real-world projects where I focused on production quality,
                    performance, and long-term maintainability — not just visuals.
                </p>

                {/* Projects list */}
                <div className="space-y-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            variants={cardAnim}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
