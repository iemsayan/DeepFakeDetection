"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "About", href: "#about", id: "about" },
    { name: "Process", href: "#process", id: "process" },
    { name: "Q&A", href: "#qna", id: "qna" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
    const containerRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
    const [active, setActive] = useState("home");
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });

    // 🔹 Move glass indicator
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

    // 🔹 Scroll spy
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 200;

            links.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (!section) return;

                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPos >= top && scrollPos < top + height) {
                    setActive(id);
                    moveIndicator(id);
                }
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", () => moveIndicator(active));

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [active]);

    // 🔹 Initial indicator position
    useEffect(() => {
        moveIndicator(active);
    }, []);

    return (
        <header className="sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <nav
                    className="
            mt-4
            relative
            overflow-hidden
            rounded-2xl
            border border-white/20
            bg-white/10 backdrop-blur-xl
            px-6 py-4
            shadow-lg
          "
                >
                    {/* ✨ Subtle inner glow */}
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

                        {/* Navigation */}
                        <ul ref={containerRef} className="relative flex gap-1">
                            {/* 🧊 Moving glass indicator (FIXED) */}
                            <motion.div
                                className="
                  pointer-events-none
                  absolute top-0 bottom-0
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
                                    stiffness: 280,
                                    damping: 26,
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
                      block px-4 py-2 text-sm transition
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
