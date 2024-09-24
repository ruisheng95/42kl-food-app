"use client";
import { BASE_PATH, PINK_COLOR } from "@/utils/common";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import PinkTypography from "../components/PinkTypography";
import { useState } from "react";
import RewardDisplay from "../components/RewardDisplay";

const Leaderboard = () => {
  const [endSeason, setEndSeason] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            alt="user_profile"
            src={`${BASE_PATH}/images/user_profile.png`}
            sx={{ width: 50, height: 50 }}
          />
          <Typography fontWeight={700}>42KL</Typography>
        </Box>
        <Typography variant="h4" fontWeight={700}>
          Leaderboard
        </Typography>
        <Button
          variant="contained"
          color="success"
          disabled={endSeason}
          onClick={() => setEndSeason(true)}
        >
          End of season
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box>
          <Card
            sx={{
              p: 1,
              backgroundColor: "#f2f2f2",
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
            variant={"outlined"}
          >
            <Avatar alt="ranking" src={`${BASE_PATH}/images/ranking.png`} />
            <Box>
              <Typography fontWeight={700}>Ranking</Typography>
              <PinkTypography fontWeight={700}>#1</PinkTypography>
            </Box>
          </Card>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              width: "10em",
              height: "10em",
              borderRadius: "50%",
              border: `10px solid ${PINK_COLOR}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RewardDisplay />
          </Box>
          <Button
            variant="contained"
            disabled={!endSeason}
            onClick={() => {
              setOpen(true);
              setEndSeason(false);
            }}
          >
            Claim
          </Button>
        </Box>
        <Box>
          <Card
            sx={{
              p: 1,
              backgroundColor: "#f2f2f2",
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
            variant={"outlined"}
          >
            <Avatar
              alt="bamboo_coin"
              src={`${BASE_PATH}/images/bamboo_coin.png`}
            />
            <Box>
              <Typography fontWeight={700}>Points</Typography>
              <PinkTypography fontWeight={700}>33</PinkTypography>
            </Box>
          </Card>
        </Box>
      </Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Typography textAlign={"center"} fontWeight={700}>
            Hooray!
          </Typography>
          <Typography textAlign={"center"} fontWeight={700}>
            You have successfully claimed
            <RewardDisplay />
            reward points
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Leaderboard;
