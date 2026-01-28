"use client";

import { motion, type Variants } from "framer-motion";

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Stagger({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.12,
                        delayChildren: delay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
