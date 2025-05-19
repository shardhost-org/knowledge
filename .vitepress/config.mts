import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ShardHost Knowledge Base",
  description:
    "Guides, tutorials & tips for running your server at ShardHost — powered by VitePress. ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guides", link: "/guides/" },
      { text: "Tutorials", link: "/tutorials/" },
    ],

    sidebar: [
      {
        items: [
          { text: "Guides", link: "/guides/" },
          { text: "Tutorials", link: "/tutorials/" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/shardhost-org/knowledge" },
      { icon: "discord", link: "https://discord.com/" },
      { icon: "bluesky", link: "https://bsky.app/ShardHost" },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: "Released under the CC BY-NC-ND 4.0 License.",
      copyright: "© 2025 ShardHost Inc. All rights reserved. ",
    },
  },
});
