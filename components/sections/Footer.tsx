export default function Footer() {
    return (
        <footer className="relative mt-24 sm:mt-32 md:mt-48 overflow-hidden">
            {/* Accent glow */}
            <div
                className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[220px] sm:h-[260px] md:h-[320px]
          bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_70%)]
        "
            />

            <div className="relative mx-auto max-w-7xl px-4 md:px-8">
                <div className="border-t border-white/10 py-16 sm:py-20 md:py-28 text-center">

                    {/* Name */}
                    <h2
                        className="
              text-[clamp(2.2rem,8vw,6.5rem)]
              font-extrabold
              leading-none
              tracking-tight
              text-white/90
            "
                    >
                        SAYANDEEP&nbsp;GHOSH
                    </h2>

                    {/* Footer text */}
                    <p className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-base text-white/40">
                        © 2026 · Created &amp; Owned by Sayandeep Ghosh
                    </p>

                </div>
            </div>
        </footer>
    );
}
