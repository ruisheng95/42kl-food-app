"use client";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export interface FoodCardProps {
  name: string;
  img: string;
  price: number;
  quantity: number;
  onQuantityChange?: (name: string, quantity: number) => void;
}

const FoodCard = ({
  name,
  img,
  price,
  quantity,
  onQuantityChange,
}: FoodCardProps) => {
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={img} title={name} />
      <CardHeader title={name} />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>RM {price}</Typography>
          <CardActions>
            <IconButton
              onClick={() => {
                if (onQuantityChange && quantity) {
                  onQuantityChange(name, -1);
                }
              }}
            >
              <RemoveIcon />
            </IconButton>
            <Typography fontWeight={700}>{quantity}</Typography>
            <IconButton
              onClick={() => {
                if (onQuantityChange) {
                  onQuantityChange(name, 1);
                }
              }}
            >
              <AddIcon />
            </IconButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
