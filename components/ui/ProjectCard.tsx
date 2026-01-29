"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
    title: string;
    description: string[];
    tech: string[];
    featured?: boolean;
};

export default function ProjectCard({
    title,
    description,
    tech,
    featured = false,
}: ProjectCardProps) {
    const isRevive = title.toLowerCase().includes("revive");

    const Wrapper = isRevive ? motion.a : motion.div;

    return (
        <Wrapper
            {...(isRevive
                ? {
                    href: "https://revives.in",
                    target: "_blank",
                    rel: "noopener noreferrer",
                }
                : {})}
            whileTap={isRevive ? { scale: 0.97 } : undefined}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`
        group
        relative
        block
        overflow-hidden
        rounded-3xl
        border border-white/15
        bg-white/5
        p-5 sm:p-6
        transition
        ${isRevive
                    ? "cursor-pointer hover:bg-white/10"
                    : "cursor-default opacity-[0.95]"
                }
      `}
        >
            {/* 🔮 Creative glow layer */}
            <div
                className={`
          pointer-events-none
          absolute inset-0
          opacity-0
          transition-opacity duration-500
          ${isRevive
                        ? "group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(124,124,255,0.25),transparent_70%)]"
                        : "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_70%)] opacity-100"
                    }
        `}
            />

            {/* Featured badge */}
            {featured && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-[var(--accent)]/20 px-3 py-1 text-xs font-medium text-[var(--accent)]">
                    Featured
                </span>
            )}

            <div className="relative z-10">
                {/* Title */}
                <h3
                    className={`text-lg sm:text-xl font-semibold tracking-tight ${isRevive ? "text-white" : "text-white/90"
                        }`}
                >
                    {title}
                </h3>

                {/* Divider */}
                <div className="mt-2 h-px w-12 bg-[var(--accent)]/60" />

                {/* Description */}
                <ul className="mt-4 space-y-2 text-sm sm:text-base text-[var(--text-secondary)]">
                    {description.map((point, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="
                rounded-full
                border border-white/15
                bg-white/10
                px-2.5 py-1
                text-xs
                text-[var(--text-secondary)]
              "
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* CTA ONLY FOR REVIVE */}
                {isRevive ? (
                    <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-black shadow-lg transition group-hover:translate-x-1">
                        Visit live site
                        <span>↗</span>
                    </div>
                ) : (
                    <p className="mt-5 text-xs text-[var(--text-secondary)] italic">
                        Private projects ~
                    </p>
                )}
            </div>
        </Wrapper>
    );
}
