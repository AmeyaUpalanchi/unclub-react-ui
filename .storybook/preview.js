import customTheme from './customTheme';

export const parameters = {
  docs: {
    theme: customTheme,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}