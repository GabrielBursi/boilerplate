import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: ['@storybook/addon-essentials', '@storybook/addon-styling', '@chakra-ui/storybook-addon'],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
