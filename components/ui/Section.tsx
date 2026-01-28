"use client";

import { motion } from "framer-motion";

export default function Section({
    id,
    children,
    className = "",
}: {
    id?: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.section
            id={id}
            className={`relative ${className}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-120px" }}
        >
            {children}
        </motion.section>
    );
}
