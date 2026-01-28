import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
    return (
        <Section className="mt-40 text-center">
            <Reveal>
                <h2 className="mb-6 text-4xl font-bold">
                    Let’s <span className="text-[var(--accent)]">Build</span> Something
                </h2>
            </Reveal>

            <Reveal delay={0.1}>
                <p className="mx-auto mb-12 max-w-xl text-[var(--text-secondary)]">
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
            bg-white/10 backdrop-blur-xl
            px-8 py-4
            text-lg
            font-medium
            hover:bg-white/20
            transition
          "
                >
                    Send me an email →
                </a>
            </Reveal>
        </Section>
    );
}
