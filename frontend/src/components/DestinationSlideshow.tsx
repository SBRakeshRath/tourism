import { Box } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

import DestinationCard from "./DestinationCard";
import { SlideShowDataType } from "../@types/slideshowTypes";

type propTypes = {
  destinationData: SlideShowDataType[];
};

const DestinationSlideshow: React.FC<propTypes> = ({
  destinationData,
}: propTypes) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const { scrollXProgress } = useScroll({ container: ref });

  useEffect(() => {
    /* 
      If the top destination section is on the screen,
      show the scroll progress indicator. 
    */
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <svg
        id="progress"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style={{
          animation: isIntersecting
            ? "show 500ms ease forwards"
            : "hide 500ms ease forwards",
          zIndex: "9999",
        }}
      >
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{
            pathLength: scrollXProgress,
          }}
        />
      </svg>

      {/* Destinations Slideshow */}
      <Box
        ref={ref}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowX: "auto",
          whiteSpace: "nowrap",
          paddingY: "32px",

          "&::-webkit-scrollbar": {
            height: "5px",
            width: "5px",
            background: "#fff3",
          },
          "&::-webkit-scrollbar-track": {
            background: "#E4E4E4",
            WebkitBorderRadius: "1ex",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#FF5828",
            WebkitBorderRadius: "1ex",
          },
        }}
      >
        {destinationData.map((destData, index) => {
          return (
            <Box key={index} sx={{ marginRight: "16px", bgcolor: "white" }}>
              <DestinationCard
                imageUrls={destData.imageUrls}
                title={destData.title}
                desc={destData.desc}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default DestinationSlideshow;
