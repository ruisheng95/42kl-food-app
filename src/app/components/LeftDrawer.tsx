import React from "react";
import { Drawer, List } from "@mui/material";
import Link from "next/link";

const LeftDrawer = () => {

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <Link style={{ padding: "10px", cursor: "pointer" }} href="/statistics">
          Statistics
        </Link>
        <Link
          style={{ padding: "10px", cursor: "pointer" }}
          href="/leaderboard"
        >
          Leaderboard
        </Link>
      </List>
    </Drawer>
  );
};

export default LeftDrawer;
