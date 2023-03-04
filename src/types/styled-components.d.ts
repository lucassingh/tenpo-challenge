import theme from "../theme";

type Theme = typeof theme.light;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}