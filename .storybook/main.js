const cssRe = /\.css$/;

const removeCssRule = (config) =>
  (config.module.rules = config.module.rules.filter(
    (rule) => String(rule.test) !== String(cssRe)
  ));

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    removeCssRule(config);
    config.module.rules.push({
      test: cssRe,
      sideEffects: true,
      use: ["style-loader", "css-loader", "postcss-loader"],
    });
    return config;
  },
};
