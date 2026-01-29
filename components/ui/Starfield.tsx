"use client";

import { useEffect, useRef } from "react";

type Star = {
    x: number;
    y: number;
    r: number;
    speed: number;
    alpha: number;
    color: string;
};

type ShootingStar = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
};

type Rocket = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
};

type OrbitSystem = {
    x: number;
    y: number;
    angle: number;
    speed: number;
    radius: number;
};

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scrollFactor = useRef(0);

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

        // Scroll intensity
        const onScroll = () => {
            const max =
                document.documentElement.scrollHeight - window.innerHeight;
            scrollFactor.current = max > 0 ? window.scrollY / max : 0;
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        const AREA = canvas.width * canvas.height;

        const STAR_COUNT = Math.floor(AREA / 14000);

        const colors = [
            "255,255,255",
            "180,200,255",
            "200,180,255",
            "255,200,180",
        ];

        const stars: Star[] = Array.from({ length: STAR_COUNT }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.4 + 0.3,
            speed: Math.random() * 0.4 + 0.15,
            alpha: Math.random() * 0.6 + 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        }));

        let shootingStars: ShootingStar[] = [];
        let rockets: Rocket[] = [];

        const orbitSystems: OrbitSystem[] = Array.from({ length: 4 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.7,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.01 + 0.006,
            radius: Math.random() * 18 + 14,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 🌌 Stars
            for (const s of stars) {
                ctx.beginPath();
                ctx.fillStyle = `rgba(${s.color},${s.alpha})`;
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();

                s.y += s.speed * (1 + scrollFactor.current * 2);
                if (s.y > canvas.height) {
                    s.y = 0;
                    s.x = Math.random() * canvas.width;
                }
            }

            // 🪐 Orbit systems
            orbitSystems.forEach((o) => {
                o.angle += o.speed * (1 + scrollFactor.current);

                // core
                ctx.beginPath();
                ctx.fillStyle = "rgba(255,255,255,0.8)";
                ctx.arc(o.x, o.y, 2.5, 0, Math.PI * 2);
                ctx.fill();

                // orbiting planet
                const px = o.x + Math.cos(o.angle) * o.radius;
                const py = o.y + Math.sin(o.angle) * o.radius;

                ctx.beginPath();
                ctx.fillStyle = "rgba(180,200,255,0.8)";
                ctx.arc(px, py, 1.8, 0, Math.PI * 2);
                ctx.fill();
            });

            // ☄️ Shooting stars
            const shootChance = 0.02 + scrollFactor.current * 0.04;
            if (Math.random() < shootChance) {
                shootingStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height * 0.5,
                    vx: 14 + scrollFactor.current * 12,
                    vy: 8 + scrollFactor.current * 8,
                    life: 30,
                });
            }

            shootingStars = shootingStars.filter((s) => {
                ctx.strokeStyle = "rgba(255,255,255,0.7)";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x - s.vx * 4, s.y - s.vy * 4);
                ctx.stroke();

                s.x += s.vx;
                s.y += s.vy;
                s.life--;
                return s.life > 0;
            });

            // 🚀 Rockets / satellites
            if (Math.random() < 0.01) {
                rockets.push({
                    x: -50,
                    y: Math.random() * canvas.height * 0.6,
                    vx: 6 + scrollFactor.current * 6,
                    vy: 2 + Math.random() * 1.5,
                    life: 160,
                });
            }

            rockets = rockets.filter((r) => {
                ctx.fillStyle = "rgba(255,255,255,0.8)";
                ctx.fillRect(r.x, r.y, 8, 2);

                ctx.fillStyle = "rgba(99,102,241,0.5)";
                ctx.fillRect(r.x - 6, r.y + 1, 6, 1);

                r.x += r.vx;
                r.y += r.vy;
                r.life--;
                return r.life > 0;
            });

            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
}
