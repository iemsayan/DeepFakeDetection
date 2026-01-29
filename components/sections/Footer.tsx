export default function Footer() {
    return (
        <footer className="relative mt-48 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="border-t border-white/10 py-28 text-center">

                    <h2
                        className="
              text-[clamp(3.5rem,10vw,8rem)]
              font-extrabold
              leading-none
              tracking-tight
              text-white/90
            "
                    >
                        SAYANDEEP&nbsp;GHOSH
                    </h2>

                    <p className="mt-8 text-sm md:text-base text-white/40">
                        © {new Date().getFullYear()} · Freelance Web Developer
                    </p>

                </div>
            </div>
        </footer>
    );
}
