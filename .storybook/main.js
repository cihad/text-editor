module.exports = {
  core: {
    builder: "@storybook/builder-vite",
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials", "@nrwl/react/plugins/storybook"],
  viteFinal: async (config) => {
    return config;
  },
};
