import { icons } from "@/app/constants/icons";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const BudgetSummary = () => {
  const { money: MoneyIcon } = icons;
  return (
    <Paper sx={{ padding: 2, backgroundColor: "#ECF4E8" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          gap: "5px",
        }}
      >
        <MoneyIcon sx={{ color: "#67C090" }} />
        <Typography variant="body1" sx={{ display: "block" }}>
          Budget
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        Income : ₱35,000.00
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        Expenses : ₱35,000.00
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        Remaining Money : ₱35,000.00
      </Typography>
    </Paper>
  );
};

export default BudgetSummary;
