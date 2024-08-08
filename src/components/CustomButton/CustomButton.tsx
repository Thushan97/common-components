import LoadingButton from "@mui/lab/LoadingButton";
import { styled as materialStyled } from "@mui/material/styles";

const CustomButton = materialStyled(LoadingButton)(({ theme }) => ({
  borderRadius: "50px",
  padding: "100px",
  textAlign: "center",
  textTransform: "none",
  fontFamily: "Satoshi",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  height: "50px",
  "&:disabled": {
    backgroundColor: theme.palette.action.disabledBackground, // Disabled button color
    color: theme.palette.white.main, // Disabled text color
  },
}));

export default CustomButton;
