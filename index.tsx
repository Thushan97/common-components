import React from "react";
import ConfirmationMessage, {
  IConfirmationMessageProps,
} from "./src/components/ConfirmationMessage/ConfirmationMessage";
import CustomButton from "./src/components/CustomButton/CustomButton";
import CustomContainerBox from "./src/components/CustomContainerBox/CustomContainerBox";
import CustomMenuItem from "./src/components/CustomMenuItem/CustomMenuItem";
import CustomPasswordField, {
  ICustomPasswordFieldProps,
} from "./src/components/CustomPasswordField/CustomPasswordField";
import CustomTextField from "./src/components/CustomTextField/CustomTextField";
import ToggleButtons from "./src/components/ToggleButton/ToggleButton";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./src/theme/theme";

const withThemeProvider =
  <P extends object>(Component: React.ComponentType<P>) =>
  (props: P) =>
    (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );

export const CommonConfirmationMessage =
  withThemeProvider<IConfirmationMessageProps>(ConfirmationMessage);
export const CommonButton = withThemeProvider(CustomButton);
export const CommonContainerBox = withThemeProvider(CustomContainerBox);
export const CommonMenuItem = withThemeProvider(CustomMenuItem);
export const CommonPasswordField =
  withThemeProvider<ICustomPasswordFieldProps>(CustomPasswordField);
export const CommonTextField = withThemeProvider(CustomTextField);
export const CommonToggleButtons = withThemeProvider(ToggleButtons);
