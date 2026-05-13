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
        title: 'My Docs',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
            {
                label: 'ADRs',
                autogenerate: { directory: 'adr' },
            }
        ],
		}), react()],
});