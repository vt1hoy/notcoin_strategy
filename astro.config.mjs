// @ts-check
import node from '@astrojs/node';
import { defineConfig } from 'astro/config';

// Server output so ?lang=ru|fr is read per request (static prerender always saw EN).
// Preview: npm run build && npm run preview
export default defineConfig({
	output: 'server',
	adapter: node({ mode: 'standalone' }),
});
