"use client";

import React, { useEffect, useRef } from 'react';

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w: number, h: number;
        let p: Pt[] = [];
        const cnt = window.innerWidth < 768 ? 30 : 60;
        const cols = ['#ef4444', '#f87171', '#333'];
        let mouse = { x: null as number | null, y: null as number | null };

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize, { passive: true });
        resize();

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        class Pt {
            x: number = 0;
            y: number = 0;
            vx: number = 0;
            vy: number = 0;
            c: string = '';

            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - .5) * .4;
                this.vy = (Math.random() - .5) * .4;
                this.c = cols[Math.floor(Math.random() * 3)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x, dy = mouse.y - this.y, d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 150) {
                        this.x -= dx / d;
                        this.y -= dy / d;
                    }
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, Math.random() * 2, 0, Math.PI * 2);
                ctx.fillStyle = this.c;
                ctx.fill();
            }
        }

        for (let i = 0; i < cnt; i++) p.push(new Pt());

        let animationFrameId: number;

        const loop = () => {
            ctx.clearRect(0, 0, w, h);
            p.forEach(n => {
                n.update();
                n.draw();
            });
            for (let a = 0; a < p.length; a++) {
                for (let b = a; b < p.length; b++) {
                    let dx = p[a].x - p[b].x, dy = p[a].y - p[b].y, d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 120) {
                        ctx.strokeStyle = `rgba(239, 68, 68, ${1 - d / 120 * .15})`;
                        ctx.lineWidth = .5;
                        ctx.beginPath();
                        ctx.moveTo(p[a].x, p[a].y);
                        ctx.lineTo(p[b].x, p[b].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-[#0e0e0e]">
            <canvas
                ref={canvasRef}
                className="w-full h-full pointer-events-none"
            />
        </div>
    );
}
