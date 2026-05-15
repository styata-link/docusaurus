/**
 * People who helped with this project (shown in the site footer under "Thanks").
 *
 * Add one object per person:
 *   { name: 'Jane Doe', href: 'https://github.com/janedoe' }  — optional link
 *   { name: 'Alex Smith' }                                   — name only, no link
 */

/** @type {{ name: string, href?: string }[]} */
const contributors = [
 { name: 'Styata', href: 'https://styata.link' },
 { name: 'Term', href: '#' },
];

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Footer link items for themeConfig.footer.links (Docusaurus classic). */
export function thanksFooterItems() {
  return contributors.map((c) =>
    c.href
      ? { label: c.name, href: c.href }
      : { html: `<span class="footer__thanks-name">${escapeHtml(c.name)}</span>` },
  );
}

export default contributors;
