import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import Header from "./Header";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

type PropTypes = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

const variants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  final: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

const HeroMain: React.FC<PropTypes> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: PropTypes) => {
  return (
    <Box>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <Header />
      </div>

      <motion.div
        variants={variants}
        initial="initial"
        animate="final"
        style={{
          color: "#fff",
          position: "absolute",
          bottom: "0",
          left: "0",
          paddingLeft: "52px",
          paddingBottom: "52px",
        }}
      >
        <Typography
          component="h2"
          sx={{ fontSize: "32px", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          component="p"
          sx={{ fontSize: "18px", maxWidth: "500px", marginY: "4px" }}
        >
          {subtitle}
        </Typography>
        <Link to={buttonLink}>
          <Button
            variant="contained"
            endIcon={<ArrowRightAlt />}
            sx={{
              bgcolor: "#CFFF00",
              color: "#0D324A",
              "&:hover": {
                bgcolor: "#DBF373",
              },
              marginTop: "32px",
            }}
          >
            {buttonText}
          </Button>
        </Link>
      </motion.div>
    </Box>
  );
};

export default HeroMain;
