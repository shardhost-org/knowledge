import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Support Hub",
  titleTemplate: ":title | ShardHost",
  description: "Server tips, guides & tutorials — powered by VitePress.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Account Help", link: "/account-help/" },
      { text: "Minecraft Tutorials", link: "/minecraft-tutorials/" },
    ],

    sidebar: [
      {
        text: 'Account Help',
        collapsed: false,
        items: [
          { text: 'How do I reset my account password', link: '/account-help/how-do-i-reset-my-password' },
        ]
      },
      {
        text: 'Minecraft Tutorials',
        collapsed: false,
        items: [
          { text: 'How to change my minecraft version', link: '/minecraft-tutorials/how-to-change-my-minecraft-version' },
          { text: "How to lower ram usage", link: '/minecraft-tutorials/lower-ram-usage'}
        ]
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
      copyright: "© 2025 ShardHost Inc. All rights reserved.",
    },
  },
});
