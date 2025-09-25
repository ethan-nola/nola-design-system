import type { Preview } from "@storybook/nextjs-vite";
import { withThemeByClassName } from '@storybook/addon-themes';

import "../app/globals.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',                    // Default shadcn/ui (no class)
        dark: 'dark',                // Default shadcn/ui dark mode
        foundation: 'foundation',     // Ages 11-14
        pathways: 'pathways',        // Ages 14-18
        professional: 'professional' // Ages 18+
      },
      defaultTheme: 'light',
      classTarget: 'html'  // Apply theme class to preview iframe html element
    }),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on.*" },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },

  tags: ["autodocs"],
};

export default preview;
