import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
    return (
        <Section id="contact" className="mt-28 md:mt-48">
            <div className="mx-auto max-w-3xl px-4 text-center">

                {/* Heading */}
                <Reveal>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                        Connect <span className="text-[var(--accent)]">with me</span>
                    </h2>
                </Reveal>

                {/* Sub text */}
                <Reveal delay={0.1}>
                    <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                        Freelance work, collaborations or serious projects —
                        reach out directly.
                    </p>
                </Reveal>

                {/* Contact Card */}
                <Reveal delay={0.2}>
                    <div
                        className="
              relative
              mx-auto
              mt-14
              rounded-3xl
              border border-white/15
              bg-white/10 backdrop-blur-xl
              p-6 sm:p-8
              shadow-xl
            "
                    >
                        {/* Glow */}
                        <div
                            className="
                pointer-events-none
                absolute inset-0
                rounded-3xl
                shadow-[0_0_30px_rgba(99,102,241,0.22)]
              "
                        />

                        <div className="relative z-10 flex flex-col divide-y divide-white/10 text-left">

                            {/* Email */}
                            <a
                                href="mailto:sayan.techy@gmail.com"
                                className="
                  group
                  flex items-center justify-between
                  py-5
                  text-base sm:text-lg
                  font-medium
                  transition
                "
                            >
                                <div className="flex items-center gap-4">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">
                                        ✉
                                    </span>

                                    <span
                                        className="
                        relative
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0
                        after:bg-[var(--accent)]
                        after:transition-all after:duration-300
                        group-hover:after:w-full
                      "
                                    >
                                        sayan.techy@gmail.com
                                    </span>
                                </div>

                                <span className="text-[var(--text-secondary)] group-hover:text-white transition">
                                    →
                                </span>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/sayandeep24/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  group
                  flex items-center justify-between
                  py-5
                  text-base sm:text-lg
                  font-medium
                  transition
                "
                            >
                                <div className="flex items-center gap-4">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">
                                        in
                                    </span>

                                    <span
                                        className="
                        relative
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0
                        after:bg-[var(--accent)]
                        after:transition-all after:duration-300
                        group-hover:after:w-full
                      "
                                    >
                                        LinkedIn profile
                                    </span>
                                </div>

                                <span className="text-[var(--text-secondary)] group-hover:text-white transition">
                                    →
                                </span>
                            </a>

                        </div>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
