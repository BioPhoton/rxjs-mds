import {modularScale, transparentize} from 'polished';
import {DEFAULT_COLORS, Colors} from './modules/design-token/color/token-values';

interface FontSizes {
  base?: string;
  xxl: string;
  xl: string;
  l: string;
  m: string;
  s: string;
  xs: string;
}

interface FontWeights {
  normal: number;
  bold: number;
}

interface Fonts {
  base: string;
  heading: string;
}

interface ThemeTokens {
  fonts?: Fonts;
  fontSizes?: FontSizes;
  fontWeights?: FontWeights;
  colors?: Colors;
}

const scale = value =>
  modularScale(value, 1, 'perfectFifth').replace('em', 'rem');

// const fontSizes: FontSizes;

export const themeTokens: ThemeTokens = {
  colors: DEFAULT_COLORS
};
