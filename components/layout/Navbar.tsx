"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "About", href: "#about", id: "about" },
    { name: "Process", href: "#process", id: "process" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Q&A", href: "#qna", id: "qna" },
    { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
    const containerRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
    const [active, setActive] = useState("home");
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });

    // 🔹 Move indicator safely
    const moveIndicator = (id: string) => {
        const el = itemRefs.current[id];
        const container = containerRef.current;
        if (!el || !container) return;

        const elRect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setIndicator({
            left: elRect.left - containerRect.left,
            width: elRect.width,
        });
    };

    // 🔹 IntersectionObserver scroll spy (correct way)
    useEffect(() => {
        const sections = links
            .map((l) => document.getElementById(l.id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                        moveIndicator(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // 🔹 Initial + resize-safe indicator positioning
    useEffect(() => {
        moveIndicator(active);

        const handleResize = () => moveIndicator(active);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [active]);

    return (
        <header className="sticky top-4 z-50">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <nav
                    className="
            relative
            overflow-hidden
            rounded-2xl
            border border-white/20
            bg-white/10 backdrop-blur-xl
            px-6 py-4
            shadow-lg
          "
                >
                    {/* ✨ Inner glow */}
                    <div
                        className="
              pointer-events-none
              absolute inset-0
              rounded-2xl
              bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_70%)]
            "
                    />

                    <div className="relative flex items-center justify-between">
                        {/* Logo */}
                        <span className="text-lg font-semibold">SG.</span>

                        {/* Nav */}
                        <ul
                            ref={containerRef}
                            className="
                relative
                flex gap-1
                overflow-x-auto
                scrollbar-hide
              "
                        >
                            {/* Indicator */}
                            <motion.div
                                className="
                  pointer-events-none
                  absolute inset-y-0
                  rounded-xl
                  bg-white/20 backdrop-blur-xl
                  border border-white/30
                "
                                animate={{
                                    left: indicator.left,
                                    width: indicator.width,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 24,
                                }}
                            />

                            {links.map((link) => (
                                <li
                                    key={link.id}
                                    ref={(el) => {
                                        itemRefs.current[link.id] = el;
                                    }}
                                    className="relative z-10"
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => {
                                            setActive(link.id);
                                            moveIndicator(link.id);
                                        }}
                                        className={`
                      block px-4 py-2 text-sm font-medium transition
                      ${active === link.id
                                                ? "text-white"
                                                : "text-[var(--text-secondary)] hover:text-white"
                                            }
                    `}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
