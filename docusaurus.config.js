// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {thanksFooterItems} from './contributors.js';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const thanksItems = thanksFooterItems();
const footerThanksColumn =
  thanksItems.length > 0 ? [{title: 'Thanks', items: thanksItems}] : [];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sty\'s Unofficial FiveM/Cfx.re Documentation',
  tagline: 'Guides and troubleshooting',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  // v4: true sets fasterByDefault — Rspack can panic on some Prism language
  // chunks (see rspack #722). Use Webpack for bundling; keep other faster opts.
  future: {
    v4: true,
    faster: {
      rspackBundler: false,
      rspackPersistentCache: false,
    },
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'styata-link',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Repo root + branch; plugin appends "docs" (no trailing docs/ — avoids docs/docs/)
          editUrl: 'https://github.com/styata-link/docusaurus/tree/master/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/styata-link/docusaurus/tree/master/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        // Replace static/img/styata-navbar-logo.svg with your own file (SVG or PNG; update extension here if needed).
        logo: {
          alt: 'Styata Documentation',
          src: 'img/styata-navbar-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/styata-link/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/styata-link/docusaurus',
              },
            ],
          },
          ...footerThanksColumn,
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Styata. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.palenight,
      },
    }),
};

export default config;
