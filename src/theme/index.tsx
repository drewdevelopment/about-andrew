import { ThemeProvider } from "styled-components";

import SecondaryTheme from "./secondary";
import PrimaryTheme from "./primary";

interface ICustomThemeProps {
  theme?: "secondary" | "primary";
  children: JSX.Element;
}

const CustomProvider: React.FC<ICustomThemeProps> = ({
  theme = "primary",
  children,
}) => {
  const themes = {
    secondary: SecondaryTheme,
    primary: PrimaryTheme,
  };

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default CustomProvider;
