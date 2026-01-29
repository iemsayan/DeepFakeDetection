"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
    title: string;
    description: string[]; // 👈 bullet points
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
            whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
        group
        relative
        block
        rounded-2xl
        border border-white/15
        bg-white/5
        backdrop-blur-md
        px-4 py-4
        sm:px-5 sm:py-5
        md:px-6 md:py-6
        transition-colors
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--accent)]/60
      "
        >
            {/* Left accent line */}
            <span
                className="
          pointer-events-none
          absolute left-0 top-0 h-full w-[2px]
          bg-[var(--accent)]
          opacity-0
          group-hover:opacity-60
          transition-opacity
        "
            />

            <div className="flex flex-row items-start justify-between gap-4">

                {/* LEFT — CONTENT */}
                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight truncate">
                            {title}
                        </h3>

                        {featured && (
                            <span className="shrink-0 rounded-full bg-[var(--accent)]/15 px-2.5 py-1 text-[11px] font-medium text-[var(--accent)]">
                                Featured
                            </span>
                        )}
                    </div>

                    {/* Bullet points */}
                    <ul className="mt-2 space-y-1 text-sm sm:text-base text-[var(--text-secondary)]">
                        {description.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                                <span className="leading-relaxed">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT — TECH + CTA */}
                <div className="flex shrink-0 flex-col items-end gap-3 text-right">

                    {/* Tech stack */}
                    <div className="flex flex-wrap justify-end gap-2 max-w-[160px] sm:max-w-[220px]">
                        {tech.map((t) => (
                            <span
                                key={t}
                                className="
                  rounded-full
                  border border-white/15
                  bg-white/10
                  px-2.5 py-1
                  text-[11px] sm:text-xs
                  text-[var(--text-secondary)]
                "
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <span
                        className="
              relative
              inline-flex items-center gap-1
              text-sm font-medium
              text-[var(--accent)]

              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0
              after:bg-[var(--accent)]
              after:transition-all after:duration-300

              group-hover:after:w-full
              focus-visible:after:w-full
            "
                    >
                        View project
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </span>
                </div>
            </div>
        </motion.a>
    );
}
