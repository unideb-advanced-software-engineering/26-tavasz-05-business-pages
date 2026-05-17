// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { LikeC4VitePlugin } from 'likec4/vite-plugin'
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
    site: "https://unideb-advanced-software-engineering.github.io",
    base: "/26-tavasz-05-business-pages/",
    vite: {
        plugins: [
            LikeC4VitePlugin({}),
        ],
    },
    integrations: [starlight({
        title: 'Business Pages',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Overview',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Overview', slug: 'overview/overview' },
                ],
            },
            {
                label: 'Case Study',
                autogenerate: { directory: 'case study' },
            },
            {
                label: 'Architectural Style',
                autogenerate: { directory: 'architectural style' },
            },
            {
                label: 'SRS',
                autogenerate: { directory: 'srs' }
            },
            {
                label: 'ADRs',
                autogenerate: { directory: 'adr' },
            }
        ],
		}), react()],
});