"use client";

import { useEffect, useState } from "react";

export default function TypewriterName() {
    const name = "Sayandeep";

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting && index < name.length) {

            timeout = setTimeout(() => {
                setText(name.slice(0, index + 1));
                setIndex((i) => i + 1);
            }, 120);
        }

        if (!isDeleting && index === name.length) {
            // Pause before deleting
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1000);
        }

        if (isDeleting && index > 0) {
            // Deleting
            timeout = setTimeout(() => {
                setText(name.slice(0, index - 1));
                setIndex((i) => i - 1);
            }, 70);
        }

        if (isDeleting && index === 0) {
            // Pause before typing again
            timeout = setTimeout(() => {
                setIsDeleting(false);
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [index, isDeleting]);

    return (
        <span className="text-[var(--accent)]">
            {text}
            <span className="ml-1 animate-pulse">|</span>
        </span>
    );
}
