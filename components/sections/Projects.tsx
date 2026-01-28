"use client";

import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <Section id="projects" className="mt-32">
            <motion.h2
                variants={staggerItem}
                className="mb-12 text-4xl font-bold"
            >
                Selected <span className="text-[var(--accent)]">Projects</span>
            </motion.h2>

            <Stagger>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={staggerItem}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </Stagger>
        </Section>
    );
}
