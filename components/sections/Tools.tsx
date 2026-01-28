import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const tools = [
    "VS Code",
    "Git & GitHub",
    "Figma",
    "Postman",
    "Firebase",
    "Vercel",
    "Docker (basic)",
];

export default function Tools() {
    return (
        <Section className="mt-32">
            <Reveal>
                <h2 className="mb-10 text-4xl font-bold">
                    Tools <span className="text-[var(--accent)]">I Use</span>
                </h2>
            </Reveal>

            <div className="flex flex-wrap gap-4">
                {tools.map((tool, i) => (
                    <Reveal key={tool} delay={i * 0.05}>
                        <span className="rounded-xl border border-white/20 bg-white/10 px-5 py-3">
                            {tool}
                        </span>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
