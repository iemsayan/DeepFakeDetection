"use client";

import { motion } from "framer-motion";

export default function MotionDiv({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
