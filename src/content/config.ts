import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        titleKey: z.string(),
        descKey: z.string(),
        detailsKey: z.string(),
        technologies: z.array(z.string()),
        githubUrl: z.string().url().optional().nullable(),
        liveUrl: z.string().url().optional().nullable(),
    }),
});

const certifications = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        title: z.string(),
        issuer: z.string(),
        date: z.string(),
        credentialUrl: z.string().url().optional(),
        image: z.string().optional(),
    }),
});

export const collections = {
    projects,
    certifications,
};
