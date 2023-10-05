import { Grid } from "@mui/material";
import { motion } from "framer-motion";

import HeroMain from "./HeroMain";
import HeroOverlay from "./HeroOverlay";

type PropTypes = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImageUrl: string;
};

const variants = {
  initial: {
    scale: 0.8,
  },
  final: {
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.1,
    },
  },
};

const Hero: React.FC<PropTypes> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImageUrl,
}: PropTypes) => {
  return (
    <motion.div variants={variants} initial="initial" animate="final">
      <Grid
        container
        sx={{
          width: "100%",
          height: "100vh",
          background: `url(${backgroundImageUrl}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid item xs={12} sx={{ height: "10vh", width: "100%" }} gap={0}>
          <HeroOverlay opacity={0.6} />
        </Grid>
        <Grid item xs={1} sx={{ height: "80vh", width: "100%" }}>
          <HeroOverlay opacity={0.6} />
        </Grid>
        <Grid item xs={10}>
          <HeroOverlay opacity={0.25}>
            <HeroMain
              title={title}
              subtitle={subtitle}
              buttonText={buttonText}
              buttonLink={buttonLink}
            />
          </HeroOverlay>
        </Grid>
        <Grid item xs={1} sx={{ height: "80vh", width: "100%" }}>
          <HeroOverlay opacity={0.6} />
        </Grid>
        <Grid item xs={12} sx={{ height: "10vh", width: "100%" }}>
          <HeroOverlay opacity={0.6} />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Hero;
