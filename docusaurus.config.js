const remarkExternalLinks = require("remark-external-links");

module.exports = {
  title: "CODER HACKERS",
  tagline: "stock and share what I've learned.",
  url: "https://www.coderhackers.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "kohheepeace", // Usually your GitHub org/user name.
  projectName: "coderhackers", // Usually your repo name.
  plugins: [
    "@docusaurus/plugin-google-analytics",
    "@docusaurus/plugin-google-gtag",
    "docusaurus-lunr-search",
  ],
  themeConfig: {
    // sidebarCollapsible: false,
    prism: {
      additionalLanguages: ["powershell", "dart"],
    },
    googleAnalytics: {
      trackingID: "UA-128556070-3",
    },
    gtag: {
      trackingID: "UA-128556070-3",
    },
    navbar: {
      title: "Home",
      logo: {
        alt: "Logo",
        src: "img/logo.png",
      },
      links: [
        // {to: 'docs/doc1', label: 'Docs', position: 'left'},
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/kohheepeace/coderhackers",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "About",
          items: [
            {
              label: "About this site",
              to: "docs/about-this-site",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/kohheepeace/coderhackers",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @kohheepeace`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: null,
          remarkPlugins: [[remarkExternalLinks, { target: "_blank" }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
