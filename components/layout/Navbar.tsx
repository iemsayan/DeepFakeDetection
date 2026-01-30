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

const NAV_OFFSET = 96;

export default function Navbar() {
    const desktopRef = useRef<HTMLUListElement>(null);
    const mobileRef = useRef<HTMLUListElement>(null);

    const desktopItemRefs = useRef<Record<string, HTMLLIElement | null>>({});
    const mobileItemRefs = useRef<Record<string, HTMLLIElement | null>>({});

    const [active, setActive] = useState("home");
    const [desktopIndicator, setDesktopIndicator] = useState({ left: 0, width: 0 });
    const [mobileIndicator, setMobileIndicator] = useState({ left: 0, width: 0 });

    const setItemRef = useCallback(
        (id: string, mobile = false) =>
            (el: HTMLLIElement | null) => {
                if (mobile) mobileItemRefs.current[id] = el;
                else desktopItemRefs.current[id] = el;
            },
        []
    );

    /* ---------------- SCROLL ---------------- */
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        const y =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            NAV_OFFSET;

        window.scrollTo({ top: y, behavior: "smooth" });
        setActive(id);
    };

    /* ---------------- MOVE DESKTOP ---------------- */
    const moveDesktopIndicator = (id: string) => {
        const el = desktopItemRefs.current[id];
        const container = desktopRef.current;
        if (!el || !container) return;

        const r1 = el.getBoundingClientRect();
        const r2 = container.getBoundingClientRect();

        setDesktopIndicator({
            left: r1.left - r2.left,
            width: r1.width,
        });
    };

    /* ---------------- MOVE MOBILE ---------------- */
    const moveMobileIndicator = (id: string) => {
        const el = mobileItemRefs.current[id];
        const container = mobileRef.current;
        if (!el || !container) return;

        const r1 = el.getBoundingClientRect();
        const r2 = container.getBoundingClientRect();

        setMobileIndicator({
            left: r1.left - r2.left,
            width: r1.width,
        });
    };

    /* ---------------- SCROLL SPY ---------------- */
    useEffect(() => {
        const sections = desktopLinks
            .map((l) => document.getElementById(l.id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        setActive(id);
                        moveDesktopIndicator(id);

                        // 🔥 MAP DESKTOP SECTION → MOBILE TAB
                        if (id === "pricing") moveMobileIndicator("pricing");
                        else if (id === "contact") moveMobileIndicator("contact");
                        else moveMobileIndicator("home");
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px" }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    /* ---------------- INIT ---------------- */
    useEffect(() => {
        moveDesktopIndicator(active);
        moveMobileIndicator("home");

        window.addEventListener("resize", () => {
            moveDesktopIndicator(active);
            moveMobileIndicator("home");
        });
    }, []);

    return (
        <header className="sticky top-4 z-50">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <nav className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-3 shadow-lg">

                    <div className="relative flex items-center justify-between">
                        <span className="text-lg font-semibold text-[var(--accent)]">
                            It&apos;s official
                        </span>

                        {/* ---------------- DESKTOP ---------------- */}
                        <ul ref={desktopRef} className="relative hidden md:flex gap-1">
                            <motion.li
                                className="absolute inset-y-0 rounded-xl bg-white/20 pointer-events-none"
                                animate={desktopIndicator}
                                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                            />

                            {desktopLinks.map((link) => (
                                <li
                                    key={link.id}
                                    ref={setItemRef(link.id)}
                                    className="relative z-10"
                                >
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className={`px-4 py-2 text-sm font-medium text-[var(--accent)] transition ${active === link.id ? "text-white" : ""
                                            }`}
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* ---------------- MOBILE ---------------- */}
                        <ul ref={mobileRef} className="relative flex md:hidden gap-2">
                            <motion.li
                                className="absolute inset-y-0 rounded-xl bg-white/20 pointer-events-none"
                                animate={mobileIndicator}
                                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                            />

                            {mobileLinks.map((link) => (
                                <li
                                    key={link.id}
                                    ref={setItemRef(link.id, true)}
                                    className="relative z-10"
                                >
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className={`px-3 py-2 text-sm font-medium text-[var(--accent)] transition ${active === link.id ? "text-white" : ""
                                            }`}
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
