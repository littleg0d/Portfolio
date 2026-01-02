"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Settings2, Type, MousePointer2, Waves, ScrollText } from "lucide-react";

export interface DevFeatures {
    stickyScroll: boolean;
    textReveal: boolean;
    magneticButtons: boolean;
    noiseGrain: boolean;
}

export const DevModeToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [features, setFeatures] = useState<DevFeatures>({
        stickyScroll: false,
        textReveal: true,
        magneticButtons: true,
        noiseGrain: true,
    });

    useEffect(() => {
        // Dispatch event for components to react
        window.dispatchEvent(new CustomEvent("dev-features-change", { detail: features }));

        // Toggle classes on body for global CSS effects if needed
        if (features.noiseGrain) document.body.classList.add("noise-enabled");
        else document.body.classList.remove("noise-enabled");

    }, [features]);

    const toggleFeature = (key: keyof DevFeatures) => {
        setFeatures(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="fixed bottom-4 right-4 z-[10000] flex flex-col items-end gap-2">
            {isOpen && (
                <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-2xl flex flex-col gap-2 mb-2 w-48">
                    <div className="text-xs font-semibold text-neutral-400 mb-1 uppercase tracking-wider">Experimental Features</div>

                    <Button
                        variant={features.stickyScroll ? "default" : "secondary"}
                        size="sm"
                        onClick={() => toggleFeature("stickyScroll")}
                        className="justify-start h-8 text-xs w-full"
                    >
                        <ScrollText className="w-3 h-3 mr-2" /> Sticky Scroll
                    </Button>

                    <Button
                        variant={features.textReveal ? "default" : "secondary"}
                        size="sm"
                        onClick={() => toggleFeature("textReveal")}
                        className="justify-start h-8 text-xs w-full"
                    >
                        <Type className="w-3 h-3 mr-2" /> Text Reveal
                    </Button>

                    <Button
                        variant={features.magneticButtons ? "default" : "secondary"}
                        size="sm"
                        onClick={() => toggleFeature("magneticButtons")}
                        className="justify-start h-8 text-xs w-full"
                    >
                        <MousePointer2 className="w-3 h-3 mr-2" /> Magnetic btns
                    </Button>

                    <Button
                        variant={features.noiseGrain ? "default" : "secondary"}
                        size="sm"
                        onClick={() => toggleFeature("noiseGrain")}
                        className="justify-start h-8 text-xs w-full"
                    >
                        <Waves className="w-3 h-3 mr-2" /> Noise Grain
                    </Button>
                </div>
            )}

            <Button
                variant="outline"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full h-10 w-10 bg-neutral-900 border-white/20 text-white shadow-xl hover:bg-neutral-800"
            >
                <Settings2 className="h-5 w-5" />
            </Button>
        </div>
    );
};
