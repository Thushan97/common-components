import React, { ChangeEvent, FocusEvent } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CustomTextField from "../CustomTextField/CustomTextField";
import { theme } from "../../theme/theme";
import VisibilitySvg from "../../assets/img/visibility.svg";
import VisibilityOffSvg from "../../assets/img/visibility-off.svg";

type ICustomPasswordFieldProps = {
  showPassword: boolean;
  setShowPassword: (_showPassword: boolean) => void;
  value: string;
  onChange: (
    _event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onBlur: (_event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error: boolean | undefined;
  helperText: string | undefined | boolean;
  name: string;
  id: string;
};

function CustomPasswordField({
  showPassword,
  setShowPassword,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  name,
  id,
}: ICustomPasswordFieldProps) {
  const passwordFieldType = showPassword ? "text" : "password";
  return (
    <CustomTextField
      id={id}
      type={passwordFieldType}
      name={name}
      fullWidth
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      variant="outlined"
      FormHelperTextProps={{
        style: { ...theme.typography.meta, marginLeft: 0 },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseLeave={(event: React.MouseEvent<HTMLButtonElement>) =>
                event.preventDefault()
              }
              role="button"
            >
              {showPassword ? (
                <Box component="img" src={VisibilityOffSvg} />
              ) : (
                <Box component="img" src={VisibilitySvg} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default CustomPasswordField;
