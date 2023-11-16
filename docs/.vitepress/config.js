import { defineConfig } from 'vitepress';
import sidebar from './sidebar';

const tagline = 'Frappe LMS';

export default defineConfig({
  lang: 'en-US',
  title: tagline,
  description: tagline,
  titleTemplate: tagline,
  appearance: true,
  lastUpdated: true,
  outDir: "../dist",
  base: "/",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/lms-logo.png' }],
    ['link', { rel: 'stylesheet', href:'/style.css' }]
  ],
  themeConfig: {
    logo: '/lms-logo.png',
    siteTitle: false,
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern: 'https://github.com/pateljannat/lms_docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/frappe/lms' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Frappe Technologies Pvt. Ltd.',
    },
  },
});

function nav() {
  return [
        {
        text: 'Home',
        link: 'https://frappelms.com/',
        },
        {
            text: 'About Us',
            link: 'https://frappelms.com/about-us',
        },
        {
            text: 'Pricing',
            link: 'https://frappelms.com/pricing',
        }
  ];
}