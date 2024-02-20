import { defineConfig, defineGlobalStyles } from '@pandacss/dev';
import * as tokens from './token';
import { globalStyle } from './global';

const globalCss = defineGlobalStyles(globalStyle);

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: tokens.breakpoints,
      tokens: {
        fontSizes: tokens.fontSizes,
        colors: tokens.colors,
      },
    },
  },

  patterns: {
    extend: {
      container: {
        defaultValues: {
          position: 'relative',
        },
        // Containerのデフォルト値を全てリセットする
        transform(props) {
          return props;
        },
      },
    },
  },

  jsxFramework: 'react',

  globalCss,

  // The output directory for your css system
  outdir: 'src/styled-system',
});
