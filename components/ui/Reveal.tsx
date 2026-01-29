"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    y?: number;
};

export default function Reveal({
    children,
    delay = 0,
    className = "",
    y = 24,
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-80px",
    });
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            ref={ref}
            initial={
                shouldReduceMotion
                    ? false
                    : { opacity: 0, y }
            }
            animate={
                shouldReduceMotion || !isInView
                    ? false
                    : { opacity: 1, y: 0 }
            }
            transition={{
                duration: 0.6,
                ease: "easeOut",
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
