import { Box, Typography } from "@mui/material";

import HeroOverlay from "./HeroOverlay";
import DestinationSlideshow from "./DestinationSlideshow";
import { SlideShowDataType } from "../@types/slideshowTypes";

type propTypes = {
  backgroundImgUrl: string;
  categoryTitle: string;
  categoryDesc: string;
  destinationData: SlideShowDataType[];
};

const SiteCategorySection = (prop: propTypes) => {
  return (
    <Box sx={{ padding: "50px" }}>
      <Box
        sx={{
          height: "70vh",
          width: "100%",
          background: `url(${prop.backgroundImgUrl})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <HeroOverlay opacity={0.5} />

        <Box
          sx={{
            padding: "24px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 999,
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            {prop.categoryTitle}
          </Typography>
          <Typography>{prop.categoryDesc}</Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "24px",
            width: "100%",
          }}
        >
          <DestinationSlideshow destinationData={prop.destinationData} />
        </Box>
      </Box>
    </Box>
  );
};

export default SiteCategorySection;
