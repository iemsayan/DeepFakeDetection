import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
    return (
        <Section
            id="contact"
            className="mt-48 text-center"
        >
            <Reveal>
                <h2 className="mb-8 text-5xl md:text-6xl font-extrabold tracking-tight">
                    Let’s <span className="text-[var(--accent)]">Build</span> Something
                </h2>
            </Reveal>

            <Reveal delay={0.1}>
                <p className="mx-auto mb-14 max-w-2xl text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                    Have an idea, project, or opportunity in mind?
                    I’m always open to meaningful conversations and serious work.
                </p>
            </Reveal>

            <Reveal delay={0.2}>
                <a
                    href="mailto:sayan.techy@gmail.com"
                    className="
            inline-flex
            items-center
            justify-center
            rounded-2xl
            border border-white/20
            bg-white/15 backdrop-blur-xl
            px-10 py-5
            text-lg md:text-xl
            font-semibold
            hover:bg-white/25
            transition-colors
          "
                >
                    Send me an email →
                </a>
            </Reveal>
        </Section>
    );
}
