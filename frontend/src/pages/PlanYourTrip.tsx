import Hero from "../components/Hero";
import { THINGS_TO_DO } from "../constants/routes";
import backgroundImageUrl from "../assets/chilika_banner.jpg";
import { Box, MenuItem, TextField } from "@mui/material";

const title: string = "PLAN YOUR TRIP";
const subtitle: string =
  "Craft your perfect Bhubaneswar adventure with local tips, itineraries, and must-see attractions for an unforgettable journey.";
const buttonText: string = "things to do";

const PlanYourTrip: React.FC = () => {
  return (
    <>
      <Hero
        title={title}
        subtitle={subtitle}
        buttonText={buttonText}
        buttonLink={THINGS_TO_DO}
        backgroundImageUrl={backgroundImageUrl}
      />

      <Box sx={{ padding: "48px" }}>
        <TextField
          id="choose-starting-point"
          variant="standard"
          label="select"
          helperText="Choose starting point"
        >
          <MenuItem></MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default PlanYourTrip;
