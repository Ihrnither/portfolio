import { useState } from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Button, CircularProgress } from "@material-ui/core";

const CustomButton = ({
  arrowIcon,
  text,
  borderColor,
  textColor,
  hoverBg,
  fontSize,
  onClick,
  marginTop,
  backgroundColor,
  startIcon,
  href,
  disabled,
  loading,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Button
      href={href && href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        textTransform: "unset",
        color: textColor ? textColor : "white",
        fontSize: fontSize ? fontSize : 24,
        borderColor: borderColor ? borderColor : "white",
        marginTop: marginTop ? marginTop : 0,
        transition: "all 0.3s ease-in-out",
        backgroundColor: backgroundColor && backgroundColor,
        padding: (theme) => `${theme.spacing(1)} ${theme.spacing(3)}`,
        ":hover": {
          backgroundColor: hoverBg ? hoverBg : "info.main",
          color: "white",
        },
      }}
      onClick={onClick && onClick}
      variant="outlined"
      startIcon={startIcon}
      endIcon={
        arrowIcon && (
          <ArrowForwardIcon
            component={motion.svg}
            initial={{ scale: 1.2 }}
            animate={{
              rotate: hovered ? 90 : 0,
              translateY: hovered ? 1 : 0,
            }}
            transition={{ type: "tween", duration: 0.3 }}
          />
        )
      }
      disabled={disabled}
    >
      {text}
      {loading && (
        <CircularProgress
          size={15}
          sx={{ color: "white", position: "absolute" }}
        />
      )}
    </Button>
  );
};

export default CustomButton;
