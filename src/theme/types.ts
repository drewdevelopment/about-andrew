export interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface Backgrounds {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface GlobalColors {
  colors: Colors;
  backgrounds: Backgrounds;
}

export interface DefaultTheme {
  name: "primary" | "secondary";
  globalcolors: GlobalColors;
}
