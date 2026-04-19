// @ts-check
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

// Vercel sets VERCEL=1 during their build — use Vercel adapter there.
// Local: Node adapter so `npm run build && npm run preview` works.
const isVercel = Boolean(process.env.VERCEL);

export default defineConfig({
	output: 'server',
	adapter: isVercel ? vercel() : node({ mode: 'standalone' }),
});
