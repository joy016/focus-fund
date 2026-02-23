import { Box, Typography } from "@mui/material";
import React from "react";
import { icons } from "../constants/icons";
import BudgetSummary from "./component/BudgetSummary";
import BottomNavigation from "../components/BottomNavigation";

const Dashboard = () => {
  const { sun: SunIcon } = icons;
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 3,
            marginTop: 3,
          }}
        >
          <SunIcon sx={{ color: "#F7EA36" }} />
          <Box>
            <Typography variant="body1" sx={{ fontFamily: "cursive" }}>
              Good Morning, Olivia
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              February 11, 2026
            </Typography>
          </Box>
        </Box>
        <BudgetSummary />
        <Box>Budget usage pie chart</Box>
        <Box>Today's Task preview list</Box>
      </Box>

      <Box sx={{ marginTop: "auto" }}>
        <BottomNavigation />
      </Box>
    </Box>
  );
};

export default Dashboard;
