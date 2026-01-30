"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { name: "Myself", id: "home" },
    { name: "My works", id: "projects" },
    { name: "Tools", id: "about" },
    { name: "Workflow", id: "process" },
    { name: "Services", id: "pricing" },
    { name: "FAQ", id: "qna" },
    { name: "Connect with me", id: "contact" },
];

export default function Navbar() {
    const containerRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
    const [active, setActive] = useState("home");
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });
    const [open, setOpen] = useState(false);

    /* ---------- Safe ref ---------- */
    const setItemRef = useCallback(
        (id: string) => (el: HTMLLIElement | null) => {
            itemRefs.current[id] = el;
        },
        []
    );

    /* ---------- Move indicator ---------- */
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

    /* ---------- Sync indicator ---------- */
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

                        {/* ---------------- Desktop Nav ---------------- */}
                        <ul
                            ref={containerRef}
                            className="relative hidden md:flex gap-1"
                        >
                            {/* Active indicator */}
                            <motion.li
                                className="pointer-events-none absolute inset-y-0 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30"
                                animate={{
                                    left: indicator.left,
                                    width: indicator.width,
                                }}
                                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                            />

                            {links.map((link) => {
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
                                            className={`block px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${isActive
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

                        {/* ---------------- Mobile Toggle ---------------- */}
                        <button
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                            className="md:hidden relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10"
                        >
                            <motion.span
                                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                                className="absolute h-0.5 w-5 bg-white"
                            />
                            <motion.span
                                animate={{ opacity: open ? 0 : 1 }}
                                className="absolute h-0.5 w-5 bg-white"
                            />
                            <motion.span
                                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                                className="absolute h-0.5 w-5 bg-white"
                            />
                        </button>
                    </div>

                    {/* ---------------- Mobile Menu ---------------- */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="md:hidden mt-4 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl"
                            >
                                <ul className="flex flex-col divide-y divide-white/10">
                                    {links.map((link) => (
                                        <li key={link.id}>
                                            <a
                                                href={`#${link.id}`}
                                                onClick={() => {
                                                    setActive(link.id);
                                                    setOpen(false);
                                                }}
                                                className={`block w-full px-5 py-4 text-base cursor-pointer transition ${active === link.id
                                                        ? "text-white"
                                                        : "text-[var(--accent)]"
                                                    }`}
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </header>
    );
}
