import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Digital Trust Toolkit',
  tagline: 'This toolkit will guide you on implementing secure and user-friendly digital and in-person interactions. Whether you are a service owner, developer or somewhere in between; use it to navigate your adoption journey with practical workshops, templates and guides.',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bcgov.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bc-vcpedia',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bcgov', // Usually your GitHub org/user name.
  projectName: 'bc-vcpedia', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],

  themeConfig: {
    navbar: {
      title: 'DTT',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/bcgov/bc-vcpedia',
          label: 'About',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
    },
    colorMode: {
      disableSwitch: true,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
