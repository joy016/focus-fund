"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { icons } from "../constants/icons";

export default function SimpleBottomNavigation() {
  const {
    home: HomeIcon,
    money: MoneyIcon,
    add: AddIcon,
    todo: TodoIcon,
    profile: ProfileIcon,
  } = icons;
  const [value, setValue] = React.useState(0);

  const menus = [
    { label: "Home", icon: <HomeIcon /> },
    { label: "Budget", icon: <MoneyIcon /> },
    { label: "Add", icon: <AddIcon /> },
    { label: "Todo", icon: <TodoIcon /> },
    { label: "Profile", icon: <ProfileIcon /> },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {menus.map((menu) => (
          <BottomNavigationAction
            key={menu.label}
            label={menu.label}
            icon={menu.icon}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
