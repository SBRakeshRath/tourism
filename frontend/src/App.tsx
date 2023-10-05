import React from "react";
import { ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import {
  EXPLORE,
  HOME,
  PLAN_YOUR_TRIP,
  THINGS_TO_DO,
} from "./constants/routes";
import theme from "./theme/theme";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ThingsToDo from "./pages/ThingsToDo";
import PlanYourTrip from "./pages/PlanYourTrip";
import PageNotFound from "./pages/PageNotFound";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path={HOME} element={<Home />} />
          <Route path={EXPLORE} element={<Explore />} />
          <Route path={THINGS_TO_DO} element={<ThingsToDo />} />
          <Route path={PLAN_YOUR_TRIP} element={<PlanYourTrip />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
