import "styled-components";
import { TypeOf } from "yup";
import theme from "./theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
