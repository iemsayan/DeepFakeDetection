import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const TOOLS = [
    "VS Code",
    "Git & GitHub",
    "Figma",
    "Postman",
    "Firebase",
    "Vercel",
    "Docker (Basic)",
];

export default function Tools() {
    return (
        <Section id="tools" className="mt-48">
            <Reveal>
                <h2 className="mb-6 text-5xl md:text-6xl font-extrabold tracking-tight">
                    Tools <span className="text-[var(--accent)]">I Use</span>
                </h2>
            </Reveal>

            <Reveal delay={0.1}>
                <p className="mb-14 max-w-2xl text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                    A modern, reliable toolchain that helps me build, test, and deploy
                    production-ready applications efficiently and with confidence.
                </p>
            </Reveal>

            <div className="flex flex-wrap gap-5">
                {TOOLS.map((tool, i) => (
                    <Reveal key={tool} delay={0.15 + i * 0.05}>
                        <span
                            className="
                rounded-2xl
                border border-white/20
                bg-white/10 backdrop-blur
                px-6 py-4
                text-base md:text-lg
                font-medium
                text-[var(--text-secondary)]
                hover:text-white
                hover:bg-white/25
                transition-colors
              "
                        >
                            {tool}
                        </span>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
