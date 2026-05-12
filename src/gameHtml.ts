const rawModules = import.meta.glob('../game-html/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const gameHtmlBySlug: Record<string, string> = {};

for (const [path, html] of Object.entries(rawModules)) {
  const match = path.match(/([^/]+)\.html$/);
  if (match) {
    gameHtmlBySlug[match[1]] = html;
  }
}

export const GAME_SLUGS = Object.keys(gameHtmlBySlug);

export function prepareGameMainHtml(slug: string): { pageTitle: string; mainHtml: string } | null {
  const html = gameHtmlBySlug[slug];
  if (!html) return null;

  const doc = new DOMParser().parseFromString(html, 'text/html');
  const pageTitle = doc.querySelector('title')?.textContent?.trim() ?? 'Trò Chơi Dân Gian';
  const main = doc.querySelector('main.game-detail');
  if (!main) return null;

  let mainHtml = main.outerHTML;
  mainHtml = mainHtml
    .replaceAll('../assets/', '/assets/')
    .replaceAll('../css/', '/css/')
    .replaceAll('../index.html', '/')
    .replaceAll('../js/', '/js/');

  return { pageTitle, mainHtml };
}
