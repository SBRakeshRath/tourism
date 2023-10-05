import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import { fake } from "../data/fake";
import Hero from "../components/Hero";
import data from "../data/thingsToDo";
import { PLAN_YOUR_TRIP } from "../constants/routes";
import SiteCategorySection from "../components/SiteCategorySection";
import backgroundImageUrl from "../assets/brazil-topno-Nyk0ewtHLZc-unsplash.jpg";

const title: string = "THINGS TO DO";
const subtitle: string =
  "From ancient temples to thriving markets, explore diverse activities that define Bhubaneswar's charm and culture.";
const buttonText: string = "plan your trip";

const ThingsToDo: React.FC = () => {
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

      {/* Select Category Section */}
      <Box sx={{ padding: "48px" }}>
        <Typography
          sx={{
            color: "#050540",
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "24px",
            textTransform: "uppercase",
          }}
        >
          {data.title}
        </Typography>
        <Typography>{data.desc}</Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "24px",
          }}
        >
          {data.categories.map((category, index) => {
            return (
              <Box
                key={index}
                sx={{
                  marginY: "16px",
                }}
              >
                <Box
                  sx={{
                    width: "350px",
                    height: "200px",
                    background: `url(${category.imageUrl})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    transition: "transform 300ms ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
                <a href={`#${category.id}`}>
                  <Typography
                    sx={{
                      marginTop: "16px",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      fontSize: "24px",
                      color: "#050540",
                    }}
                  >
                    {category.title}
                  </Typography>
                </a>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Destination Categories  */}
      <Box
        sx={{ bgcolor: "#C4EEE1", height: `calc(70vh + ${destCardHeight}px)` }}
        id={data.categories[0].id}
      >
        <SiteCategorySection
          backgroundImgUrl={data.categories[0].imageUrl}
          categoryTitle={data.categories[0].title}
          categoryDesc={data.desc}
          destinationData={fake}
        />
      </Box>

      <Box
        sx={{ bgcolor: "#DDE5ED", height: `calc(70vh + ${destCardHeight}px)` }}
        id={data.categories[1].id}
      >
        <SiteCategorySection
          backgroundImgUrl={data.categories[1].imageUrl}
          categoryTitle={data.categories[1].title}
          categoryDesc={data.desc}
          destinationData={fake}
        />
      </Box>
      <Box
        sx={{ bgcolor: "#DCD7C9", height: `calc(70vh + ${destCardHeight}px)` }}
        id={data.categories[2].id}
      >
        <SiteCategorySection
          backgroundImgUrl={data.categories[2].imageUrl}
          categoryTitle={data.categories[2].title}
          categoryDesc={data.desc}
          destinationData={fake}
        />
      </Box>
      <Box
        sx={{ bgcolor: "#D8D8D8", height: `calc(70vh + ${destCardHeight}px)` }}
        id={data.categories[3].id}
      >
        <SiteCategorySection
          backgroundImgUrl={data.categories[3].imageUrl}
          categoryTitle={data.categories[3].title}
          categoryDesc={data.desc}
          destinationData={fake}
        />
      </Box>
      <Box
        sx={{ bgcolor: "#E7F6F2", height: `calc(70vh + ${destCardHeight}px)` }}
        id={data.categories[4].id}
      >
        <SiteCategorySection
          backgroundImgUrl={data.categories[4].imageUrl}
          categoryTitle={data.categories[4].title}
          categoryDesc={data.desc}
          destinationData={fake}
        />
      </Box>
      <Box
        sx={{ bgcolor: "#EDEDED", height: `calc(70vh + ${destCardHeight}px)` }}
        id={data.categories[5].id}
      >
        <SiteCategorySection
          backgroundImgUrl={data.categories[5].imageUrl}
          categoryTitle={data.categories[5].title}
          categoryDesc={data.desc}
          destinationData={fake}
        />
      </Box>
    </>
  );
};

export default ThingsToDo;
