"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const MagneticButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        const handleFeatures = (e: any) => {
            if (e.detail?.magneticButtons !== undefined) {
                setEnabled(e.detail.magneticButtons);
            }
        };
        window.addEventListener("dev-features-change", handleFeatures);
        return () => window.removeEventListener("dev-features-change", handleFeatures);
    }, []);

    const handleMouse = (e: React.MouseEvent) => {
        if (!enabled || !ref.current) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        setPosition({ x, y });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    if (!enabled) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x * 0.5, y: position.y * 0.5 }} // Strength of magnet
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
