import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// --- Config GitHub Pages -----------------------------------------------------
// Project page : https://<user>.github.io/<repo>
// Remplacer SITE_USER et REPO ci-dessous (ou via variables d'env au build).
const SITE_USER = process.env.SITE_USER || 'willie-leroux';
const REPO = process.env.REPO || 'site-willie';

export default defineConfig({
  site: `https://${SITE_USER}.github.io`,
  base: `/${REPO}`,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
