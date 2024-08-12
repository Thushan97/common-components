import React, { MouseEventHandler, ReactNode } from "react";
import { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import { styled as materialStyled } from "@mui/material/styles";
import CustomContainerBox from "../CustomContainerBox/CustomContainerBox";
import { ReactComponent as CloseCircleBoldSVG } from "../../assets/close-circle-bold.svg";

type CustomModalProps = {
  modal?: boolean;
  open?: boolean;
  handleClose?: (
    _event: {},
    _reason: "backdropClick" | "escapeKeyDown"
  ) => void;
  handleButtonOnClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  title?: string;
  subTitle?: string;
  children?: ReactNode;
  btnText?: string;
  btnVariant?: "contained" | "outlined" | "text";
  align?: "left" | "center" | "right";
  topCloseBtn?: () => void;
  btnDisabled?: boolean;
  isHistoryModal?: boolean;
};

const CustomButton = materialStyled(Button)(({ theme }: { theme: Theme }) => ({
  borderRadius: "10px",
  height: "43px",
  gap: "10px",
  textAlign: "center",
  textTransform: "none",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "297px",
    width: "75vw",
  },
}));

export function CustomModal({
  modal,
  open,
  handleClose,
  handleButtonOnClick,
  icon,
  title,
  subTitle,
  children,
  btnText,
  btnVariant,
  align = "center",
  topCloseBtn,
  btnDisabled,
  isHistoryModal = false,
}: CustomModalProps) {
  const renderModalContent = () => (
    <CustomContainerBox width={376}>
      {icon && (
        <Box
          component="img"
          width="56px"
          display="flex"
          marginX="auto"
          src={icon}
        />
      )}
      <Box display="flex" flexDirection="column" gap={2}>
        {title && !topCloseBtn && (
          <Typography variant="title3Bold" textAlign={align} color="text">
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography
            variant="title3Bold"
            textAlign={align}
            fontWeight={400}
            color="text.secondary"
          >
            {subTitle}
          </Typography>
        )}
      </Box>

      {title && topCloseBtn && !isHistoryModal && (
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5" textAlign={align}>
            {title}
          </Typography>
          <IconButton size="small" aria-label="close" onClick={topCloseBtn}>
            <Box component={CloseCircleBoldSVG} />
          </IconButton>
        </Box>
      )}
      {title && topCloseBtn && isHistoryModal && (
        <Box
          display="flex"
          padding="32px 32px 0"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4" textAlign={align}>
            {title}
          </Typography>
          <IconButton size="small" aria-label="close" onClick={topCloseBtn}>
            <Box component={CloseCircleBoldSVG} />
          </IconButton>
        </Box>
      )}

      <Box width="100%">
        {children}
        {!!btnText && (
          <Box mt={4} display="flex" justifyContent="center">
            <CustomButton
              variant={btnVariant ?? "contained"}
              color="primary"
              fullWidth
              disabled={btnDisabled}
              onClick={handleButtonOnClick}
            >
              {btnText}
            </CustomButton>
          </Box>
        )}
      </Box>
    </CustomContainerBox>
  );

  if (modal) {
    return (
      <Dialog
        open={!!open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ "& .MuiPaper-root": { maxWidth: "fit-content" } }}
      >
        {renderModalContent()}
      </Dialog>
    );
  }
  return renderModalContent();
}

export default CustomModal;
