import { defineConfig } from 'vitepress';
import footnote from 'markdown-it-footnote';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(footnote);
    },
  },
  title: 'saferinsulin.org',
  description:
    "Bolton Critical Care 'Control of Glucose in Critical Care' Guideline",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Education', link: '/' },
      { text: 'Calculator', link: 'https://saferinsulin.org' },
    ],
    // this is the sidebar section
    sidebar: [
      {
        text: 'Safer Insulin in Critical Care',
        link: '/',
        items: [
          { text: 'Guidelines and QRG', link: '/guidelines' },
          { text: 'Glucose in ICU Key Principles', link: '/key-principles' },
          { text: 'Hypoglycaemia', link: '/hypoglycaemia' },
          { text: 'Insulins', link: '/insulins' },
          { text: 'Metformin', link: '/metformin' },
          { text: 'Training and FAQs', link: '/FAQs' },
          // { text: 'COVID-19', link: '/covid' },
        ],
      },
    ],

    socialLinks: [],

    footer: {
      message:
        'Educational purposes only.  Please see <a href="/disclaimer">disclaimer</a>.<br><a href="license">MIT licensed</a>.',
      copyright: 'Copyright © 2025',
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
      externalLinkIcon: true,
    },
  },
});
