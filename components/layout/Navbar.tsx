"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const desktopLinks = [
    { name: "Myself", id: "home" },
    { name: "My works", id: "projects" },
    { name: "Tools", id: "about" },
    { name: "Workflow", id: "process" },
    { name: "Services", id: "pricing" },
    { name: "FAQ", id: "qna" },
    { name: "Connect with me", id: "contact" },
];

const mobileLinks = [
    { name: "Myself", id: "home" },
    { name: "Services", id: "pricing" },
    { name: "Connect", id: "contact" },
];

export default function Navbar() {
    const containerRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
    const [active, setActive] = useState("home");
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });

    const setItemRef = useCallback(
        (id: string) => (el: HTMLLIElement | null) => {
            itemRefs.current[id] = el;
        },
        []
    );

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

    useEffect(() => {
        moveIndicator(active);
        const onResize = () => moveIndicator(active);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [active]);

    return (
        <header className="sticky top-4 z-50">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <nav className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-3 shadow-lg">
                    {/* Glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_70%)]" />

                    <div className="relative flex items-center justify-between">
                        <span className="text-lg font-semibold text-[var(--accent)]">
                            It&apos;s official
                        </span>

                        {/* ---------------- DESKTOP NAV ---------------- */}
                        <ul
                            ref={containerRef}
                            className="relative hidden md:flex gap-1"
                        >
                            <motion.li
                                className="pointer-events-none absolute inset-y-0 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30"
                                animate={{
                                    left: indicator.left,
                                    width: indicator.width,
                                }}
                                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                            />

                            {desktopLinks.map((link) => {
                                const isActive = active === link.id;

                                return (
                                    <li
                                        key={link.id}
                                        ref={setItemRef(link.id)}
                                        className="relative z-10"
                                    >
                                        <a
                                            href={`#${link.id}`}
                                            onClick={() => setActive(link.id)}
                                            className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${isActive
                                                    ? "text-white"
                                                    : "text-[var(--accent)] hover:text-white"
                                                }`}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* ---------------- MOBILE NAV (INLINE, SIMPLE) ---------------- */}
                        <ul className="flex md:hidden gap-3">
                            {mobileLinks.map((link) => {
                                const isActive = active === link.id;

                                return (
                                    <li key={link.id}>
                                        <a
                                            href={`#${link.id}`}
                                            onClick={() => setActive(link.id)}
                                            className={`
                        rounded-xl
                        px-3 py-2
                        text-sm font-medium
                        transition
                        ${isActive
                                                    ? "bg-white/20 text-white"
                                                    : "text-[var(--accent)] hover:text-white"
                                                }
                      `}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
