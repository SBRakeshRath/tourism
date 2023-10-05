import React from "react";
import { Box, Typography } from "@mui/material";

import Carousel from "./Carousel";

type propTypes = {
  imageUrls: string[];
  title: string;
  desc: string;
};

const DestinationCard: React.FC<propTypes> = ({
  imageUrls,
  title,
  desc,
}: propTypes) => {
  return (
    <Box
      className="destination-card"
      sx={{ width: "400px", overflow: "hidden" }}
    >
      {/* Render Carousel */}
      <Carousel imageUrls={imageUrls} />

      {/* Render Title */}
      <Typography
        component="h5"
        sx={{
          fontWeight: "bold",
          fontSize: "24",
          marginBottom: "10px",
          paddingX: "8px",
        }}
      >
        {title}
      </Typography>

      {/* Render Description */}
      <Typography
        component="article"
        sx={{ whiteSpace: "pre-wrap", paddingX: "8px", paddingBottom: "8px" }}
      >
        {desc}
      </Typography>
    </Box>
  );
};

export default DestinationCard;
