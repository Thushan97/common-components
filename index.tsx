import React from "react";
import ConfirmationMessage from "./src/components/ConfirmationMessage/ConfirmationMessage";
import CustomButton from "./src/components/CustomButton/CustomButton";
import CustomContainerBox from "./src/components/CustomContainerBox/CustomContainerBox";
import CustomMenuItem from "./src/components/CustomMenuItem/CustomMenuItem";
import CustomPasswordField from "./src/components/CustomPasswordField/CustomPasswordField";
import CustomTextField from "./src/components/CustomTextField/CustomTextField";
import ToggleButtons from "./src/components/ToggleButton/ToggleButton";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./src/theme/theme";

const withThemeProvider = (Component: React.ComponentType) => (props: any) =>
  (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );

// export const ThemedConfirmationMessage = withThemeProvider(ConfirmationMessage);
export const CommonButton = withThemeProvider(CustomButton);
export const CommonContainerBox = withThemeProvider(CustomContainerBox);
export const CommonMenuItem = withThemeProvider(CustomMenuItem);
// export const CommonPasswordField = withThemeProvider(CustomPasswordField);
export const CommonTextField = withThemeProvider(CustomTextField);
export const commonToggleButtons = withThemeProvider(ToggleButtons);
