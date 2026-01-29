"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
    title: string;
    description: string;
    tech: string[];
    link: string;
    featured?: boolean;
};

export default function ProjectCard({
    title,
    description,
    tech,
    link,
    featured = false,
}: ProjectCardProps) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="
        group
        relative
        isolate
        h-full
        min-h-[240px]
        rounded-3xl
        overflow-hidden
        border border-white/15
        bg-white/10
        p-7
        transition
        cursor-pointer
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--accent)]/60
      "
        >
            {featured && (
                <span
                    className="
            absolute
            top-5 right-5
            z-20
            rounded-full
            bg-[var(--accent)]/15
            px-3 py-1
            text-xs
            font-medium
            tracking-wide
            text-[var(--accent)]
          "
                >
                    Featured
                </span>
            )}

            {/* Top accent */}
            <div
                className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-1
          bg-gradient-to-r
          from-transparent
          via-[var(--accent)]
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
        "
            />

            {/* Border highlight */}
            <div
                className="
          pointer-events-none
          absolute inset-0
          rounded-3xl
          opacity-0
          group-hover:opacity-100
          transition
          ring-1 ring-white/20
        "
            />

            <div className="relative z-10 flex h-full flex-col">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed flex-grow">
                    {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="
                rounded-full
                border border-white/20
                bg-white/5
                px-3 py-1
                text-xs md:text-sm
                text-[var(--text-secondary)]
              "
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <span
                    className="
            mt-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-[var(--accent)]
            opacity-0
            group-hover:opacity-100
            transition
          "
                >
                    View project
                    <span className="transition-transform group-hover:translate-x-1">
                        →
                    </span>
                </span>
            </div>
        </motion.a>
    );
}
