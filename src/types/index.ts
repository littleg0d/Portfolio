import type { ReactNode } from "react";

export interface Skill {
    name: string;
    descKey: string;
    icon: ReactNode;
}

export interface ProjectData {
    id: string; // Content collection ID
    titleKey: string;
    descKey: string;
    detailsKey: string;
    technologies: string[];
    githubUrl?: string | null;
    liveUrl?: string | null;
}

export interface CertificationData {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
    image?: string;
}

export interface EducationItem {
    titleKey: string;
    schoolKey: string;
    locationKey: string;
    badgeKey?: string;
}
