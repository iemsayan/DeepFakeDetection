"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type MotionDivProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    y?: number;
};

export default function MotionDiv({
    children,
    delay = 0,
    className = "",
    y = 20,
}: MotionDivProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={
                shouldReduceMotion
                    ? false
                    : { opacity: 0, y }
            }
            animate={
                shouldReduceMotion
                    ? false
                    : { opacity: 1, y: 0 }
            }
            transition={{
                duration: 0.6,
                ease: "easeOut",
                delay,
            }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
