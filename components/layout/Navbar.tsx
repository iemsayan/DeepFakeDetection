"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const links = [
    { name: "Home", id: "home" },
    { name: "Models", id: "products" }, // ✅ FIXED
    { name: "Pipeline", id: "process" },
    { name: "FAQ", id: "qna" },
    { name: "Contact", id: "contact" },
];

export default function Navbar() {
    const navRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
    const [active, setActive] = useState("home");
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });

    /* ---------- SCROLL TO SECTION ---------- */
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActive(id);
    };

    /* ---------- MOVE INDICATOR ---------- */
    const moveIndicator = (id: string) => {
        const el = itemRefs.current[id];
        const container = navRef.current;
        if (!el || !container) return;

        const r1 = el.getBoundingClientRect();
        const r2 = container.getBoundingClientRect();

        setIndicator({
            left: r1.left - r2.left,
            width: r1.width,
        });
    };

    /* ---------- SCROLL SPY ---------- */
    useEffect(() => {
        const sections = links
            .map((l) => document.getElementById(l.id))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        setActive(id);
                        moveIndicator(id);
                    }
                });
            },
            {
                rootMargin: "-35% 0px -35% 0px",
            }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    /* ---------- INIT & RESIZE ---------- */
    useEffect(() => {
        requestAnimationFrame(() => moveIndicator(active));

        const onResize = () => moveIndicator(active);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [active]);

    return (
        <header className="sticky top-4 z-50">
            <div className="mx-auto max-w-7xl px-4">
                <nav className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-3 shadow-lg">
                    <div className="flex items-center justify-between gap-4">

                        {/* Brand */}
                        <span className="text-sm sm:text-lg font-semibold text-[var(--accent)] whitespace-nowrap">
                            Deepfake Detection using CNN & Transfer Learning
                        </span>

                        {/* Navigation */}
                        <ul
                            ref={navRef}
                            className="relative flex gap-1 overflow-x-auto scrollbar-none"
                        >
                            {/* Sliding indicator */}
                            <motion.li
                                className="absolute inset-y-0 rounded-xl bg-white/20 pointer-events-none"
                                animate={indicator}
                                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                            />

                            {links.map((link) => (
                                <li
                                    key={link.id}
                                    ref={(el) => {
                                        itemRefs.current[link.id] = el;
                                    }}
                                    className="relative z-10"
                                >
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className={`
                                          relative px-3 sm:px-4 py-2
                                          text-sm font-medium whitespace-nowrap
                                          transition
                                          ${active === link.id
                                                ? "text-white"
                                                : "text-[var(--accent)]"}
                                          after:absolute after:left-0 after:-bottom-1
                                          after:h-[2px] after:w-0
                                          after:bg-[var(--accent)]
                                          after:transition-all after:duration-300
                                          hover:after:w-full
                                          ${active === link.id ? "after:w-full" : ""}
                                        `}
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                    </div>
                </nav>
            </div>
        </header>
    );
}
