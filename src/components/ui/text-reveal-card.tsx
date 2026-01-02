"use client";
import React, { useEffect, useRef, memo, useState } from "react";
import { useScroll, useTransform, useMotionValue, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
    text,
    revealText,
    children,
    className,
}: {
    text: string;
    revealText: string;
    children?: React.ReactNode;
    className?: string;
}) => {
    const [widthPercentage, setWidthPercentage] = useState(0);
    const cardRef = useRef<HTMLDivElement | any>(null);
    const [left, setLeft] = useState(0);
    const [localWidth, setLocalWidth] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        const handleFeatures = (e: any) => {
            if (e.detail?.textReveal !== undefined) {
                setEnabled(e.detail.textReveal);
            }
        };
        window.addEventListener("dev-features-change", handleFeatures);
        return () => window.removeEventListener("dev-features-change", handleFeatures);
    }, []);

    useEffect(() => {
        if (cardRef.current) {
            const { left, width: localWidth } =
                cardRef.current.getBoundingClientRect();
            setLeft(left);
            setLocalWidth(localWidth);
        }
    }, []);

    function mouseMoveHandler(event: any) {
        event.preventDefault();

        const { clientX } = event;
        if (cardRef.current) {
            const relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }

    function mouseLeaveHandler() {
        setIsMouseOver(false);
        setWidthPercentage(0);
    }
    function mouseEnterHandler() {
        setIsMouseOver(true);
    }

    const rotateDeg = (widthPercentage - 50) * 0.1;

    if (!enabled) {
        return (
            <div className={cn("bg-[#1d1c20] w-full rounded-lg p-8", className)}>
                {children}
            </div>
        )
    }

    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onMouseMove={mouseMoveHandler}
            ref={cardRef}
            className={cn(
                "bg-[#1d1c20] border border-white/[0.08] w-full rounded-lg p-8 relative overflow-hidden",
                className
            )}
        >
            {children}

            <div className="h-40 relative flex items-center overflow-hidden">
                <motion.div
                    style={{
                        width: "100%",
                    }}
                    animate={
                        isMouseOver
                            ? {
                                opacity: widthPercentage > 0 ? 1 : 0,
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                            : {
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                    }
                    transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
                    className="absolute bg-[#1d1c20] z-20  will-change-transform"
                >
                    <p
                        style={{
                            textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
                        }}
                        className="text-base sm:text-[3rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
                    >
                        {revealText}
                    </p>
                </motion.div>
                <motion.div
                    animate={{
                        left: `${widthPercentage}%`,
                        rotate: `${rotateDeg}deg`,
                        opacity: widthPercentage > 0 ? 1 : 0,
                    }}
                    transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
                    className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
                ></motion.div>

                <div className=" overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
                    <p className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238]">
                        {text}
                    </p>
                    <MemoizedStars />
                </div>
            </div>
        </div>
    );
};

const MemoizedStars = memo(() => {
    return (
        // Simplified stars for specific component context, usually generic stars
        <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute bg-white rounded-full w-1 h-1" style={{ top: Math.random() * 100 + "%", left: Math.random() * 100 + "%", opacity: Math.random() }} ></div>
            ))}
        </div>
    )
})
