import { styled as materialStyled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { theme } from "../../theme/theme";

type ICustomContainerBoxProps = {
  width?: number | string;
  padding?: string;
  alignItems?: "center" | "left";
  noshadow?: string;
};

const CustomContainerBox = materialStyled(Box)<ICustomContainerBoxProps>(
  ({ width, padding = "36px", alignItems = "center", noshadow }) => ({
    backgroundColor: "white",
    width: width || 304,
    borderRadius: "4px",
    boxShadow:
      noshadow !== "true"
        ? `0px 4px 16px 0px ${theme.palette.shades.shadow}`
        : "none",
    border: `1px solid ${theme.palette.shades.whiteBorder1}`,
    display: "flex",
    alignItems,
    flexDirection: "column",
    gap: "36px",
    padding,
    [theme.breakpoints.down("sm")]: {
      width: "289px",
    },
  })
);

export default CustomContainerBox;
