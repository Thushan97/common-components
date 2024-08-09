import LoadingButton from "@mui/lab/LoadingButton";
import { styled as materialStyled } from "@mui/material/styles";
import { theme } from "../../theme/theme";

interface ICustomButtonProps {
  padding?: string;
  radius?: string;
  height?: string;
}

const CustomButton = materialStyled(LoadingButton)<ICustomButtonProps>(
  ({ padding = "12px", radius = "4px", height = "38px" }) => ({
    borderRadius: radius,
    padding,
    textAlign: "center",
    textTransform: "none",
    fontFamily: "Satoshi",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    height,
    "&:disabled": {
      backgroundColor: theme.palette.action.disabledBackground, // Disabled button color
      color: theme.palette.white.main, // Disabled text color
    },
  })
);

export default CustomButton;
