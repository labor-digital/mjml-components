/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    "@storybook/addon-storysource",
    "@storybook/addon-mdx-gfm"
  ],

  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...(config.resolve || {}).fallback,
        http: false,
        https: false,
        os: false,
      },
    }

    // Return the altered config
    return config
  },

  docs: {}
}
export default config
