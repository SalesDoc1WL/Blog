import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = (await getCollection('veille', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return rss({
    title: 'Veille — Willie Leroux · Flux documentaires',
    description: "Veille sur les flux documentaires : réglementation, archivage à valeur probante, courrier & BPO, signature et confiance numérique.",
    site: context.site,
    items: articles.map((a) => ({
      title: a.data.titre,
      description: a.data.description,
      pubDate: a.data.pubDate,
      categories: [a.data.categorie, ...a.data.tags],
      link: `${base}/veille/${a.slug}/`,
    })),
    customData: '<language>fr-fr</language>',
  });
}
