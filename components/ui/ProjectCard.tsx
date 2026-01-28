"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
    title: string;
    description: string;
    tech: string[];
    link: string;
};

export default function ProjectCard({
    title,
    description,
    tech,
    link,
}: ProjectCardProps) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="
        group
        relative
        h-full
        min-h-[220px]
        rounded-2xl
        overflow-hidden
        border border-white/20
        bg-white/10 backdrop-blur-xl
        p-6
        shadow-lg
        transition
      "
        >
            {/* Glow */}
            <div
                className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition
          bg-[radial-gradient(circle_at_top,var(--accent),transparent_65%)]
        "
            />

            <div className="relative z-10 flex h-full flex-col">
                <h3 className="text-xl font-semibold">{title}</h3>

                <p className="mt-3 text-sm text-[var(--text-secondary)] flex-grow">
                    {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="
                rounded-full
                border border-white/20
                px-3 py-1
                text-xs
                text-[var(--text-secondary)]
              "
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.a>
    );
}
