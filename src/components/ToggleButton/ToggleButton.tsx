import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import { styled as materialStyled } from "@mui/material/styles";
import { ReactComponent as GridViewBoldSvg } from "../../assets/grid-view-bold.svg";
import { ReactComponent as GridViewLinearSvg } from "../../assets/grid-view-linear.svg";
import { ReactComponent as LeftToRightListDashBoldSvg } from "../../assets/left-to-right-list-dash-bold.svg";
import { ReactComponent as LeftToRightListDashLinearSvg } from "../../assets/left-to-right-list-dash-linear.svg";
import { ViewType } from "../../enums/view-type.enum";
import { theme } from "../../theme/theme";

const StyledToggleButtonGroup = materialStyled(ToggleButtonGroup)(() => ({
  backgroundColor: theme.palette.secondary.light,
  padding: "4px",
  height: "32px",
  gap: "4px",
}));

const StyledToggleButton = materialStyled(ToggleButton)(() => ({
  border: "none",
  width: "24px",
  borderRadius: "4px !important",
  "&.Mui-selected": {
    border: "none",
    backgroundColor: theme.palette.primary.dark,
  },
  "&:hover": {
    "&.Mui-selected": { backgroundColor: theme.palette.primary.dark },
  },
}));

export default function ToggleButtons() {
  const [view, setView] = React.useState<string | null>("list");

  const handleView = (
    event: React.MouseEvent<HTMLElement>,
    newView: string | null
  ) => {
    setView(newView);
  };

  return (
    <StyledToggleButtonGroup
      value={view}
      exclusive
      onChange={handleView}
      aria-label="text alignment"
    >
      <StyledToggleButton value="list" aria-label="left aligned">
        {view === ViewType.LIST ? (
          <Box component={LeftToRightListDashBoldSvg} />
        ) : (
          <Box component={LeftToRightListDashLinearSvg} />
        )}
      </StyledToggleButton>
      <StyledToggleButton value="grid" aria-label="centered">
        {view === ViewType.GRID ? (
          <Box component={GridViewBoldSvg} />
        ) : (
          <Box component={GridViewLinearSvg} />
        )}
      </StyledToggleButton>
    </StyledToggleButtonGroup>
  );
}
