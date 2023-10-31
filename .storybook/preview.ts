import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/globals";
import { themes } from "../src/constants/themes";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    defaultTheme: "light",
    themes: themes,
    Provider: ThemeProvider, GlobalStyles
  }),
];

export default preview;
