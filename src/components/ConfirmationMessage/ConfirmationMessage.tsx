import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GreenCheckCircleSVG from "../../assets/img/solar-check-circle-bold.svg";
import CustomContainerBox from "../CustomContainerBox/CustomContainerBox";
import CustomButton from "../CustomButton/CustomButton";

type IConfirmationMessageProps = {
  title: string;
  description: string;
  button: string;
  onClick: () => void;
};

function ConfirmationMessage({
  title,
  description,
  button,
  onClick,
}: IConfirmationMessageProps) {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <CustomContainerBox>
      <Box
        component="img"
        display="flex"
        margin="auto"
        src={GreenCheckCircleSVG}
        alt="green-check-circle-icon"
      />
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography
          variant="title3Bold"
          textAlign="center"
          color="text.primary"
        >
          {title}
        </Typography>
        <Typography
          variant="bodyRegular"
          textAlign="center"
          color="text.secondary"
        >
          {description}
        </Typography>
      </Box>
      <CustomButton
        variant="contained"
        color="primary"
        onClick={handleOnClick}
        padding="12px 32px"
      >
        {button}
      </CustomButton>
    </CustomContainerBox>
  );
}

export default ConfirmationMessage;
