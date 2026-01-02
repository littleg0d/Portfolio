"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const TechRadar = ({
    items,
}: {
    items: { name: string; level: "Expert" | "Proficient" | "Learning"; icon: React.ReactNode }[];
}) => {
    const categories = ["Expert", "Proficient", "Learning"];

    return (
        <div className="relative flex items-center justify-center w-full h-[500px] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-800">
            {/* Radar Rings */}
            <div className="absolute inset-0 m-auto w-[90%] h-[90%] border border-neutral-300 dark:border-neutral-700 rounded-full opacity-50"></div>
            <div className="absolute inset-0 m-auto w-[60%] h-[60%] border border-neutral-300 dark:border-neutral-700 rounded-full opacity-50"></div>
            <div className="absolute inset-0 m-auto w-[30%] h-[30%] border border-neutral-300 dark:border-neutral-700 rounded-full opacity-50"></div>

            {/* Crosshairs */}
            <div className="absolute inset-0 m-auto w-full h-[1px] bg-neutral-300 dark:bg-neutral-700 opacity-30"></div>
            <div className="absolute inset-0 m-auto h-full w-[1px] bg-neutral-300 dark:bg-neutral-700 opacity-30"></div>

            {/* Items */}
            {items.map((item, idx) => {
                // Random placement within rings based on level (simulated for visual effect)
                let radius = 0;
                if (item.level === "Expert") radius = 15; // Inner ring
                if (item.level === "Proficient") radius = 45; // Middle ring
                if (item.level === "Learning") radius = 75; // Outer ring

                // Random angle distribution
                const angle = (idx / items.length) * 360;
                const rad = (angle * Math.PI) / 180;

                // Convert polar to cartesian (approximate for CSS percent)
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);

                return (
                    <div
                        key={item.name}
                        className="absolute flex flex-col items-center justify-center group"
                        style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                    >
                        <div className="p-2 bg-white dark:bg-black rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm z-10 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <span className="absolute mt-10 text-xs font-bold bg-white/80 dark:bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                            {item.name} ({item.level})
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
