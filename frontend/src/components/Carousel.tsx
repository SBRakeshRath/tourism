import { Box } from "@mui/material";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Circle } from "@mui/icons-material";

type propTypes = {
  imageUrls: string[];
};

const buttonOverlayStyle = {
  width: "10%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: `rgba(0, 0, 0, 0.7)`,
  opacity: 0,
  transition: "opacity 500ms ease",
  "&:hover": {
    opacity: 1,
  },
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 400 : -400,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 400 : -400,
      opacity: 0,
    };
  },
};

const Carousel: React.FC<propTypes> = ({ imageUrls }: propTypes) => {
  const [direction, setDirection] = useState<1 | -1>(-1);
  const [currImgIdx, setCurrImgIdx] = useState<number>(0);

  const handleNext = () => {
    setDirection(1);
    setCurrImgIdx((prev) => {
      if (prev + 1 >= imageUrls.length) {
        return 0;
      }

      return prev + 1;
    });
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrImgIdx((prev) => {
      if (prev - 1 < 0) {
        return imageUrls.length - 1;
      }

      return prev - 1;
    });
  };

  const handleDotClick = (index: number) => {
    if (index < currImgIdx) {
      setDirection(-1);
    } else {
      setDirection(1);
    }

    setCurrImgIdx(index);
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Render Images */}
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "275px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={imageUrls[currImgIdx]}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
              src={imageUrls[currImgIdx]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            />
          </AnimatePresence>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }}
        >
          <Box sx={buttonOverlayStyle} onClick={handlePrevious}>
            <ArrowLeft sx={{ color: "#fff" }} />
          </Box>
          <Box sx={buttonOverlayStyle} onClick={handleNext}>
            <ArrowRight sx={{ color: "#fff" }} />
          </Box>
        </Box>
      </Box>

      {/* Render Dots */}
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {imageUrls.map((imageUrl: string, index: number) => {
          return (
            <Circle
              key={`${imageUrl.substring(imageUrl.length - 5)}${index}`}
              sx={{
                width: "5px",
                color: currImgIdx === index ? "black" : "#A8A8A8",
                scale: currImgIdx === index ? "1.5" : 1,
                paddingX: "2px",
                cursor: "pointer",
              }}
              onClick={() => handleDotClick(index)}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Carousel;
