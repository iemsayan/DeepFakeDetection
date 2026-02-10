export default function Footer() {
  return (
    <footer className="relative mt-32 md:mt-48 overflow-hidden">
      {/* Ambient forensic glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-[260px]
          bg-[radial-gradient(circle_at_center,var(--accent-soft),transparent_70%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl px-8 py-12 shadow-2xl">

          {/* Top row */}
          <div className="grid gap-10 md:grid-cols-2 items-start">

            {/* LEFT — Identity */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Deepfake Detection Lab
              </h2>

              <p className="mt-3 max-w-md text-sm sm:text-base text-[var(--text-secondary)]">
                A research-driven initiative focused on detecting AI-generated
                facial content using modern deep learning architectures,
                transparent evaluation, and open-source principles.
              </p>
            </div>

            {/* RIGHT — Team */}
            <div className="md:text-right">
              <p className="text-sm font-medium text-white/70">
                Project Contributors
              </p>

              <ul className="mt-4 space-y-2 text-sm sm:text-base text-[var(--text-secondary)]">
                <li>
                  <span className="text-white">Sayandeep Ghosh</span> · Model &
                  System Design
                </li>
                <li>
                  <span className="text-white">Ajay</span> · Research & Analysis
                </li>
                <li>
                  <span className="text-white">Harsh</span> · Data Engineering
                </li>
                <li>
                  <span className="text-white">Naveen</span> · Backend & API
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Bottom row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Left */}
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              © {new Date().getFullYear()} Deepfake Detection Lab · Open Research Project
            </p>

            {/* Right */}
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Built with{" "}
              <span className="text-white">Next.js</span>,{" "}
              <span className="text-white">PyTorch</span> &{" "}
              <span className="text-white">FastAPI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
