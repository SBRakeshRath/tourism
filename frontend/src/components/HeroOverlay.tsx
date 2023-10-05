import React from "react";
import { Box } from "@mui/material";

type PropTypes = {
  opacity: number;
  children?: React.ReactNode;
};

const HeroOverlay: React.FC<PropTypes> = ({ opacity, children }: PropTypes) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          bgcolor: `rgba(0, 0, 0, ${opacity})`,
        }}
      >
        {children ? children : ""}
      </Box>
    </Box>
  );
};

export default HeroOverlay;
