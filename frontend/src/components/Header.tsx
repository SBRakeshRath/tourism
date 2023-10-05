import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import {
  EXPLORE,
  HOME,
  THINGS_TO_DO,
  PLAN_YOUR_TRIP,
} from "../constants/routes";

const style = {
  paddingY: "5px",
  display: "block",
  color: "white",
  fontWeight: "bold",
  letterSpacing: "0.05rem",
  transition: "box-shadow 300ms ease",
  "&:hover": {
    boxShadow: "inset 0 -3px 0 0 #DBF373",
  },
};

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: {
          sx: 2,
          sm: 4,
          md: 8,
        },
        zIndex: 999,
        paddingX: 4,
        paddingY: 2,
      }}
    >
      <NavLink to={HOME}>
        <Typography component="p" sx={style}>
          Home
        </Typography>
      </NavLink>
      <NavLink to={EXPLORE}>
        <Typography component="p" sx={style}>
          Explore
        </Typography>
      </NavLink>
      <NavLink to={THINGS_TO_DO}>
        <Typography component="p" sx={style}>
          Things To Do
        </Typography>
      </NavLink>
      <NavLink to={PLAN_YOUR_TRIP}>
        <Typography component="p" sx={style}>
          Plan Your Trip
        </Typography>
      </NavLink>
    </Box>
  );
};

export default Header;
