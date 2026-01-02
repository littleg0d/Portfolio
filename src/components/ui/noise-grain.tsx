"use client";
import { useEffect, useState } from "react";

export const NoiseGrain = () => {
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        const handleFeatures = (e: any) => {
            if (e.detail?.noiseGrain !== undefined) {
                setEnabled(e.detail.noiseGrain);
            }
        };
        window.addEventListener("dev-features-change", handleFeatures);
        return () => window.removeEventListener("dev-features-change", handleFeatures);
    }, []);

    if (!enabled) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03] text-transparent"
            style={{
                backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
                filter: "contrast(170%) brightness(100%)",
                backgroundRepeat: "repeat",
                mixBlendMode: "overlay"
            }}
        >
        </div>
    );
};
