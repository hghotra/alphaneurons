// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Deploy target: GitHub Pages project site (repo named "alphaneurons").
	// Published at https://hghotra.github.io/alphaneurons/
	//
	// If you later create a repo named `hghotra.github.io` (user site),
	// change `base` to '/' and delete the trailing path.
	site: 'https://hghotra.github.io',
	base: '/alphaneurons/',
	integrations: [mdx(), sitemap()],
});
