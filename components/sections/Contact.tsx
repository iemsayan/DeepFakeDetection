import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const TEAM = [
  {
    name: "Sayandeep Ghosh",
    role: "Deep Learning Engineer",
    type: "email",
    value: "sayan.techy@gmail.com",
  },
  {
    name: "Ajay",
    role: "Backend & Deployment",
    type: "phone",
    value: "+91 97812 79999",
  },
];

export default function Contact() {
  return (
    <Section id="contact" className="mt-32 md:mt-48">
      <div className="mx-auto max-w-5xl px-4 text-center">

        {/* Heading */}
        <Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Contact the{" "}
            <span className="text-[var(--accent)]">Research Team</span>
          </h2>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            For research discussions, system integration, deployment help,
            or collaboration opportunities — reach the people behind the model.
          </p>
        </Reveal>

        {/* Contact Card */}
        <Reveal delay={0.2}>
          <div
            className="
              relative
              mx-auto
              mt-16
              rounded-3xl
              border border-white/15
              bg-white/10
              backdrop-blur-xl
              p-6 sm:p-10
              shadow-2xl
            "
          >
            {/* Forensic glow */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute inset-0
                rounded-3xl
                shadow-[0_0_40px_var(--accent-soft)]
              "
            />

            <div className="relative z-10 divide-y divide-white/10 text-left">
              {TEAM.map((member) => {
                const isEmail = member.type === "email";
                const href = isEmail
                  ? `mailto:${member.value}`
                  : `tel:${member.value.replace(/\s+/g, "")}`;

                return (
                  <a
                    key={member.name}
                    href={href}
                    className="
                      group
                      flex flex-col sm:flex-row
                      sm:items-center sm:justify-between
                      gap-4
                      py-6
                      transition
                    "
                  >
                    {/* Left */}
                    <div>
                      <span
                        className="
                          block text-lg sm:text-xl font-semibold
                          relative
                          after:absolute after:left-0 after:-bottom-1
                          after:h-[2px] after:w-0
                          after:bg-[var(--accent)]
                          after:transition-all after:duration-300
                          group-hover:after:w-full
                        "
                      >
                        {member.name}
                      </span>

                      <span className="block mt-1 text-sm sm:text-base text-[var(--text-secondary)]">
                        {member.role}
                      </span>
                    </div>

                    {/* Right */}
                    <span className="text-sm sm:text-base text-[var(--text-secondary)] group-hover:text-white transition">
                      {member.type === "email" ? member.value : `📞 ${member.value}`} →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Footer note */}
        <Reveal delay={0.35}>
          <p className="mt-10 text-sm text-[var(--text-secondary)]">
            We respond to serious research and integration queries only.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
