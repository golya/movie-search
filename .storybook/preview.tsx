import React from 'react';
import type { Preview } from "@storybook/react";

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { CssBaseline, GlobalStyles } from '@mui/material';

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
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ body: { height: '100vh' }, html: { height: '100vh' }, '#__next': { height: '100vh' } }} />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
