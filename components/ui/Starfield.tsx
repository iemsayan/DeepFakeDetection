"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        // ⭐ REDUCED STAR COUNT (key change)
        const STAR_COUNT = Math.floor(
            (window.innerWidth * window.innerHeight) / 18000
        );

        const stars = Array.from({ length: STAR_COUNT }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.2 + 0.3,
            speed: Math.random() * 0.15 + 0.05,
            alpha: Math.random() * 0.6 + 0.2,
        }));

        // ☄️ VERY RARE SHOOTING STARS
        let shootingStar: null | {
            x: number;
            y: number;
            vx: number;
            vy: number;
            life: number;
        } = null;

        const draw = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 🌌 Background stars
            for (const star of stars) {
                ctx.beginPath();
                ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            }

            // ☄️ Shooting star (rare + subtle)
            if (!shootingStar && Math.random() < 0.002) {
                shootingStar = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height * 0.4,
                    vx: 8,
                    vy: 4,
                    life: 30,
                };
            }

            if (shootingStar) {
                ctx.strokeStyle = "rgba(255,255,255,0.6)";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(shootingStar.x, shootingStar.y);
                ctx.lineTo(
                    shootingStar.x - shootingStar.vx * 3,
                    shootingStar.y - shootingStar.vy * 3
                );
                ctx.stroke();

                shootingStar.x += shootingStar.vx;
                shootingStar.y += shootingStar.vy;
                shootingStar.life--;

                if (shootingStar.life <= 0) {
                    shootingStar = null;
                }
            }

            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
}
