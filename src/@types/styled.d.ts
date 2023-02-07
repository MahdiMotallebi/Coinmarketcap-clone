import 'styled-components';
import { DefaultTheme } from 'styled-components';
import { customTheme } from '../../styles/themeConfig';

const theme = customTheme('light');
type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
