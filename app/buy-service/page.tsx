"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import Footer from "@/components/sections/Footer";

export default function BuyServicePage() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    function scrollToPricing() {
        router.push("/");

        setTimeout(() => {
            const el = document.getElementById("pricing");
            if (!el) return;

            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 350);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setError("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbx2peyPPzF-4-5REAJVqO5c23fiQvvSG07vJvVmZZ_MTSeRWY-JbRyn7UzojJhn1oFm/exec",
                {
                    method: "POST",
                    mode: "no-cors", // 🔥 REQUIRED
                    body: formData,
                }
            );

            // no-cors = assume success
            setSuccess(true);
            form.reset();
        } catch {
            setError("Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* Intentional gap from Services */}
            <Section className="mt-12 sm:mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
            relative
            mx-auto
            max-w-xl
            rounded-3xl
            border border-white/20
            bg-white/10
            backdrop-blur-xl
            shadow-xl
          "
                >
                    {/* Glow */}
                    <div
                        className="
              pointer-events-none
              absolute inset-0
              z-0
              rounded-3xl
              shadow-[0_0_40px_rgba(124,124,255,0.3)]
            "
                    />

                    {/* Back Button */}
                    <button
                        type="button"
                        onClick={scrollToPricing}
                        className="
              absolute z-20
              left-4 top-3
              sm:left-6 sm:top-6
              inline-flex items-center gap-1
              rounded-lg
              bg-[var(--accent)]
              px-3 py-1.5
              text-xs sm:text-sm
              font-semibold text-black
              shadow-md cursor-pointer
              transition-all duration-300
              hover:-translate-x-1 hover:shadow-lg
              active:scale-95
            "
                    >
                        ← Services
                    </button>

                    {/* CONTENT */}
                    <div className="relative z-10 px-5 py-6 sm:px-8 sm:py-10 pt-12 sm:pt-14">
                        {!success ? (
                            <>
                                <h1 className="mb-2 text-2xl sm:text-4xl font-extrabold">
                                    Get Your{" "}
                                    <span className="text-[var(--accent)]">
                                        Free Portfolio
                                    </span>
                                </h1>

                                <p className="mb-6 text-sm sm:text-base text-[var(--text-secondary)]">
                                    Share a few details. I’ll personally reach out via Gmail.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <input name="firstName" placeholder="First Name" required className="input" />
                                        <input name="lastName" placeholder="Last Name" required className="input" />
                                    </div>

                                    <input name="occupation" placeholder="Occupation" required className="input" />
                                    <input name="email" type="email" placeholder="Email address" required className="input" />

                                    <textarea
                                        name="description"
                                        placeholder="Describe your portfolio needs"
                                        rows={4}
                                        required
                                        className="input resize-none"
                                    />

                                    <div className="space-y-1.5">
                                        <p className="text-xs text-[var(--text-secondary)]">
                                            📅 Deadline helps me plan your delivery timeline
                                        </p>
                                        <input name="deadline" type="date" required className="input" />
                                    </div>

                                    {error && <p className="text-sm text-red-400">{error}</p>}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="
                      mt-2 w-full
                      rounded-2xl
                      bg-[var(--accent)]
                      py-3.5
                      font-semibold text-black
                      shadow-lg cursor-pointer
                      transition
                      hover:scale-[1.03]
                      active:scale-[0.97]
                      disabled:opacity-60
                    "
                                    >
                                        {loading ? "Submitting…" : "Submit Request"}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center">
                                <h2 className="mb-3 text-3xl font-extrabold text-[var(--accent)]">
                                    🎉 Thank You!
                                </h2>

                                <p className="mb-6 text-sm sm:text-base text-[var(--text-secondary)]">
                                    Your request is received.
                                    <br />
                                    I’ll contact you shortly via Gmail.
                                </p>

                                <button
                                    onClick={scrollToPricing}
                                    className="
                    inline-flex items-center justify-center
                    rounded-2xl
                    bg-[var(--accent)]
                    px-6 py-3
                    font-semibold text-black
                    shadow-lg cursor-pointer
                    transition
                    hover:scale-[1.05]
                    active:scale-[0.97]
                  "
                                >
                                    Back to Services
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </Section>

            <Footer />
        </>
    );
}
