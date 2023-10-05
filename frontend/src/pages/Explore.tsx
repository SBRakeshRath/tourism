import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

import { fake } from "../data/fake";
import Hero from "../components/Hero";
import { PLAN_YOUR_TRIP } from "../constants/routes";
import SiteCategorySection from "../components/SiteCategorySection";
import backgroundImageUrl from "../assets/Odisha-Sea-Morning-320311-pixahive.jpg";
import culturalSiteBgImg from "../assets/culture-and-heritage.jpg";
import historicalSiteBgImg from "../assets/Banner.jpg";
import religiousSiteBgImg from "../assets/lingaraj-temple-best-place-to-visit-in-bhubaneswar.jpg";
import zoosAndMuseumsBgImg from "../assets/mystery-cat-MjUdFS49Ox0-unsplash.jpg";

const title: string = "EXPLORE BHUBANESWAR";
const subtitle: string =
  "Uncover the rich cultural heritage, modern marvels, and hidden gems of Bhubaneswar, the soul of Odisha.";
const buttonText: string = "plan your trip";

const categoryDesc =
  "Ut id mauris nec nisi lacinia feugiat. Sed varius ipsum pretium, vulputate velit eu, tincidunt tortor. Pellentesque ultrices nisi eget enim euismod faucibus. Nullam placerat fermentum aliquam. Donec pulvinar velit fringilla, blandit ipsum a, ullamcorper nunc. Suspendisse elementum.Ut id mauris nec nisi lacinia feugiat. Sed varius ipsum pretium, vulputate velit eu, tincidunt tortor.";

const Explore: React.FC = () => {
  const [destCardHeight, setDestCardHeight] = useState<number>(0);

  useEffect(() => {
    // Calculate the max height of the all DestinationCards rendered in the DOM
    let maxHeight: number = 0;

    const destinationCards = document.querySelectorAll(".destination-card");

    if (destinationCards.length > 0) {
      destinationCards.forEach((card) => {
        maxHeight = Math.max(maxHeight, card.clientHeight);
      });
    }

    setDestCardHeight(maxHeight);
  }, []);

  return (
    <>
      <Hero
        title={title}
        subtitle={subtitle}
        buttonText={buttonText}
        buttonLink={PLAN_YOUR_TRIP}
        backgroundImageUrl={backgroundImageUrl}
      />

      <Box
        sx={{
          height: `calc(70vh + ${destCardHeight}px)`,
        }}
      >
        <SiteCategorySection
          backgroundImgUrl={culturalSiteBgImg}
          categoryTitle="Cultural Sites"
          categoryDesc={categoryDesc}
          destinationData={fake}
        />
      </Box>

      <Box
        sx={{
          height: `calc(70vh + ${destCardHeight}px)`,
          bgcolor: "#C4EEE1",
        }}
      >
        <SiteCategorySection
          backgroundImgUrl={historicalSiteBgImg}
          categoryTitle="Historical Sites"
          categoryDesc={categoryDesc}
          destinationData={fake}
        />
      </Box>

      <Box
        sx={{
          height: `calc(70vh + ${destCardHeight}px)`,
          bgcolor: "#DDE5ED",
        }}
      >
        <SiteCategorySection
          backgroundImgUrl={religiousSiteBgImg}
          categoryTitle="Relgious Sites"
          categoryDesc={categoryDesc}
          destinationData={fake}
        />
      </Box>

      <Box
        sx={{
          height: `calc(70vh + ${destCardHeight}px)`,
          bgcolor: "#DCD7C9",
        }}
      >
        <SiteCategorySection
          backgroundImgUrl={zoosAndMuseumsBgImg}
          categoryTitle="Zoos and Museums"
          categoryDesc={categoryDesc}
          destinationData={fake}
        />
      </Box>
    </>
  );
};

export default Explore;
