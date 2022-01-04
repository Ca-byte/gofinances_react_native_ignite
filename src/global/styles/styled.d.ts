import "styled-components";
import { TypeOf } from "yup";
import theme from "./theme";
import dark from "./dark";

declare module "styled-components" {
  type ThemeType = typeof theme;
  type DarkType = typeof dark;

  export interface DefaultTheme extends ThemeType, DarkType {}
}
