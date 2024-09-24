"use client";
import { BASE_PATH } from "@/utils/common";
import { Avatar, Box, Card, Container, Typography } from "@mui/material";
import PinkTypography from "../components/PinkTypography";
import Image from "next/image";
import ForwardIcon from "@mui/icons-material/Forward";

const StatisticsCard = ({
  title,
  imageUrl,
  quantity,
}: {
  title: string;
  imageUrl: string;
  quantity: number;
}) => {
  return (
    <Box>
      <Typography fontWeight={700} textAlign={"center"}>
        {title}
      </Typography>
      <Card
        sx={{
          p: 1,
          backgroundColor: "#f2f2f2",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
        }}
        variant={"outlined"}
      >
        <Image src={imageUrl} width={100} height={100} alt={title} />
        <PinkTypography variant="h5" fontWeight={700}>
          {quantity}
        </PinkTypography>
      </Card>
    </Box>
  );
};

const Statistics = () => {
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
          Statistics
        </Typography>
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pt: 8,
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PinkTypography variant="h5" fontWeight={700}>
            Contribution
          </PinkTypography>
          <Image
            src={`${BASE_PATH}/images/footprint.png`}
            width={100}
            height={100}
            alt="footprint"
          />
          <PinkTypography variant="h5" fontWeight={700}>
            0.04%
          </PinkTypography>
          <Typography fontWeight={700}>Carbon footprint reduction</Typography>
        </Box>
        <ForwardIcon sx={{ fontSize: 100 }} />
        <StatisticsCard
          title="Schedule order"
          imageUrl={`${BASE_PATH}/images/schedule_order.png`}
          quantity={8}
        />
        <StatisticsCard
          title="Eco ride"
          imageUrl={`${BASE_PATH}/images/electric-vehicle.png`}
          quantity={15}
        />
        <StatisticsCard
          title="Vegan food"
          imageUrl={`${BASE_PATH}/images/no-meat.png`}
          quantity={8}
        />
        <StatisticsCard
          title="No cutlery"
          imageUrl={`${BASE_PATH}/images/no_cutlery.png`}
          quantity={8}
        />
      </Box>
    </Container>
  );
};

export default Statistics;
