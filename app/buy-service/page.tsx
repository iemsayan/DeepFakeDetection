"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/sections/Footer";

export default function BuyServicePage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);

        const payload = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            occupation: formData.get("occupation"),
            email: formData.get("email"),
            description: formData.get("description"),
            deadline: formData.get("deadline"),
        };

        try {
            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbxZSSTIr1z0DEmfZoiKLOlFxEmn_ZU_b8nmMfWmCpa1PWUXPtZ2r7dJfa339HuHEKSW/exec",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            if (!res.ok) throw new Error();

            setSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch {
            setError("Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Section className="mt-16 sm:mt-20">
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
            px-5 py-6
            sm:px-8 sm:py-10
            shadow-xl
          "
                >
                    {/* Back to Services */}
                    <Link
                        href="/#pricing"
                        className="
              absolute
              left-4 top-3
              sm:left-6 sm:top-6
              inline-flex
              items-center
              rounded-lg
              bg-[var(--accent)]
              px-3 py-1.5
              text-xs sm:text-sm
              font-semibold
              text-black
              shadow-md
              transition
              hover:scale-105
              active:scale-95
            "
                    >
                        ← Services
                    </Link>

                    {/* Glow */}
                    <div
                        className="
              pointer-events-none
              absolute inset-0
              rounded-3xl
              shadow-[0_0_40px_rgba(124,124,255,0.3)]
            "
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 pt-10 sm:pt-12">
                        {!success ? (
                            <>
                                <h1 className="mb-2 text-2xl sm:text-4xl font-extrabold">
                                    Get Your{" "}
                                    <span className="text-[var(--accent)]">Free Portfolio</span>
                                </h1>

                                <p className="mb-6 text-sm sm:text-base text-[var(--text-secondary)]">
                                    Share a few details. I’ll personally reach out via Gmail.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <input
                                            name="firstName"
                                            placeholder="First Name"
                                            required
                                            className="input text-sm sm:text-base"
                                        />
                                        <input
                                            name="lastName"
                                            placeholder="Last Name"
                                            required
                                            className="input text-sm sm:text-base"
                                        />
                                    </div>

                                    <input
                                        name="occupation"
                                        placeholder="Occupation"
                                        required
                                        className="input text-sm sm:text-base"
                                    />

                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email address"
                                        required
                                        className="input text-sm sm:text-base"
                                    />

                                    <textarea
                                        name="description"
                                        placeholder="Describe your portfolio needs"
                                        rows={4}
                                        required
                                        className="input resize-none text-sm sm:text-base"
                                    />

                                    {/* Deadline */}
                                    <div className="space-y-1.5">
                                        <p className="text-xs text-[var(--text-secondary)]">
                                            📅 Deadline helps me plan your delivery timeline
                                        </p>
                                        <input
                                            name="deadline"
                                            type="date"
                                            required
                                            className="input text-sm sm:text-base"
                                        />
                                    </div>

                                    {error && (
                                        <p className="text-sm text-red-400">{error}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="
                      mt-2
                      w-full
                      cursor-pointer
                      rounded-2xl
                      bg-[var(--accent)]
                      py-3.5
                      text-sm sm:text-base
                      font-semibold
                      text-black
                      shadow-lg
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
                            /* THANK YOU STATE */
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <h2 className="mb-3 text-3xl font-extrabold text-[var(--accent)]">
                                    🎉 Thank You!
                                </h2>

                                <p className="mb-6 text-sm sm:text-base text-[var(--text-secondary)]">
                                    Your request is received.
                                    <br />
                                    I’ll contact you shortly via Gmail.
                                </p>

                                <Link
                                    href="/#pricing"
                                    className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[var(--accent)]
                    px-6 py-3
                    text-sm sm:text-base
                    font-semibold
                    text-black
                    shadow-lg
                    transition
                    hover:scale-[1.05]
                    active:scale-[0.97]
                  "
                                >
                                    Back to Services
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </Section>

            <Footer />
        </>
    );
}