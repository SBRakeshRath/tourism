import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

import { fake } from "../data/fake";
import Hero from "../components/Hero";
import DestinationSlideshow from "../components/DestinationSlideshow";
import { EXPLORE, PLAN_YOUR_TRIP, THINGS_TO_DO } from "../constants/routes";
import backgroundImageUrl from "../assets/kamalesh-2fC4gwuyfeM-unsplash.jpg";
import exploreSectionImg1 from "../assets/abhijit-pattnaik-oDi02VoDPEs-unsplash.jpg";
import exploreSectionImg2 from "../assets/Home_page_explore_section_collage.png";
import activitySectionImg1 from "../assets/bishnu-prasad-mohanty-ZPfcCwbsZdY-unsplash.jpg";
import activitySectionImg2 from "../assets/subhadeep-dishant-G60KoqQb5eU-unsplash.jpg";
import planATripSectionImg1 from "../assets/ashish-kumar-senapati-uk5f9UsFTMw-unsplash.jpg";

const title: string = "BHUBANESWAR UNVEILED";
const subtitle: string =
  "Journey through ancient heritage and modern marvels in the City of Temples";
const buttonText: string = "explore";

const Home: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [progress, setProgress] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "1.25 end"], // Initialize the animation when start of the target
    // meets the end of the container(viewport) and end the animation when 25% of the
    // target meets the end of the container(viewport).
  });

  scrollYProgress.on("change", () => {
    /*
      Using scrollYProgress.get() in JSX will always give the initial value.
      This updates the current value everytimg it changes into a state which
      can then be used for calculation.
    */
    setProgress(scrollYProgress.get());
  });

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={title}
        subtitle={subtitle}
        buttonText={buttonText}
        buttonLink={EXPLORE}
        backgroundImageUrl={backgroundImageUrl}
      />

      {/* Explore Section */}
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={{
            fontFamily: "Sahitya sans-serif",
            paddingLeft: "calc(100vw/12)",
            marginTop: "48px",
          }}
        >
          Explore
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.img
            ref={imgRef}
            src={exploreSectionImg1}
            style={{
              width: "400px",
              position: "absolute",
              top: `${progress * -30}vh`, // This moves the 0vh - 20vh according to scrollYProgress
              right: "calc(100vw/12)", // This aligns image with the width of the right overlay
            }}
          />
          <Typography
            sx={{
              fontFamily: "Sahitya sans-serif",
              fontWeight: "bold",
              fontSize: "32px",
              maxWidth: "400px",
            }}
          >
            Hidden deep in nature's heart, an enchanting beauty thrives, echoing
            a child's dreams, untouched and secret.
          </Typography>

          <div style={{ width: "200px", height: "400px" }}>
            {/* This element here emulates the above image since it is removed
        from the document css flow as its position is set to absolute   */}
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "calc(100vw/12)",
            gap: "56px",
          }}
        >
          <img src={exploreSectionImg2} style={{ width: "400px" }} />
          <div>
            <Typography sx={{ marginBottom: "32px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eu dapibus tellus, maximus consequat quam. Fusce consectetur ex
              enim, sed lobortis tortor luctus in. Curabitur ut augue faucibus,
              lacinia purus non, condimentum dui. Maecenas efficitur suscipit
              urna sit amet varius. Phasellus ut purus felis. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Autem, quae qui? Earum,
              commodi accusantium. Maiores pariatur, dolore rerum, et neque modi
              temporibus necessitatibus labore doloribus numquam itaque?
            </Typography>
            <Link to={EXPLORE}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF5828",
                  transition: "all 300ms ease",
                  "&:hover": {
                    bgcolor: "#FF744D",
                  },
                }}
                endIcon={<ArrowRightAlt />}
              >
                Explore
              </Button>
            </Link>
          </div>
        </Box>
      </Box>

      {/* Activites Section */}
      <Box
        sx={{
          backgroundColor: "black",
          padding: "calc(100vw/12)",
          color: "white",
        }}
      >
        <Typography sx={{ fontFamily: "Sahitya sans-serif" }}>
          Activities
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sahitya sans-serif",
            fontSize: "32px",
            margin: "48px",
          }}
        >
          The temples and shrines will open up to you in marvelous ways,
          inviting profound spiritual exploration.
        </Typography>

        <div
          style={{
            display: "flex",
            position: "relative",
          }}
        >
          <img
            src={activitySectionImg1}
            style={{
              width: "800px",
            }}
          />
          <motion.img
            src={activitySectionImg2}
            style={{
              width: "400px",
              position: "absolute",
              right: "0",
            }}
            initial={{
              top: "100%",
            }}
            whileInView={{
              top: "50%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <div>
            <Typography sx={{ marginBottom: "48px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eu dapibus tellus, maximus consequat quam. Fusce consectetur ex
              enim, sed lobortis tortor luctus in. Curabitur ut augue faucibus,
              lacinia purus non, condimentum dui. Maecenas efficitur suscipit
              urna sit amet varius. Phasellus ut purus felis. Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </Typography>
            <Link to={THINGS_TO_DO}>
              <Button
                variant="contained"
                endIcon={<ArrowRightAlt />}
                sx={{
                  backgroundColor: "#FF5828",
                  transition: "all 300ms ease",
                  "&:hover": {
                    bgcolor: "#FF744D",
                  },
                }}
              >
                Things to do
              </Button>
            </Link>
          </div>
          <div>
            <div style={{ width: "400px", height: "400px" }}></div>
          </div>
        </div>
      </Box>

      {/* Plan a Trip Section */}
      <Box
        sx={{
          padding: "calc(100vw/12)",
        }}
      >
        <Typography sx={{ fontFamily: "Sahitya sans-serif" }}>
          Plan a Trip
        </Typography>

        <Typography
          component="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "32px",
            marginY: "32px",
          }}
        >
          TOP DESTINATIONS
        </Typography>

        <DestinationSlideshow destinationData={fake} />
      </Box>

      <Box
        sx={{
          paddingX: "calc(100vw/12)",
          marginBottom: "100px",
          bgcolor: "#eeeeee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={planATripSectionImg1} style={{ width: "50%", flex: 1 }} />
        <Box sx={{ flex: 1, paddingLeft: "32px" }}>
          <Typography
            component="h5"
            sx={{ fontSize: "32px", fontWeight: "semibold" }}
          >
            The finest experiences waiting to be embraced.
          </Typography>
          <Typography
            component="article"
            sx={{ color: "#A5A5A5", paddingTop: "24px", paddingBottom: "36px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
            dapibus tellus, maximus consequat quam. Fusce consectetur ex enim,
            sed.
          </Typography>
          <Link to={PLAN_YOUR_TRIP}>
            <Button
              variant="contained"
              endIcon={<ArrowRightAlt />}
              sx={{
                backgroundColor: "#FF5828",
                transition: "all 300ms ease",
                "&:hover": {
                  bgcolor: "#FF744D",
                },
              }}
            >
              Plan a trip
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Home;
