import { type } from "os";
import "styled-components";
import { ThemeProps } from "./themes/types";

export type Theme = ThemeProps;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
