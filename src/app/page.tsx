"use client";
import { TITLE } from "@/utils/common";
import { Container, Grid2, Typography } from "@mui/material";
import FoodCard from "./components/FoodCard";
import { useContext } from "react";
import { CartContext } from "@/utils/CartContext";

const Home = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h4" component="h2" sx={{ my: 2 }}>
        Welcome to {TITLE}
      </Typography>
      <Grid2 container spacing={1}>
        {cart?.map((data, i) => (
          <Grid2 key={i} size={{ xs: 12, sm: 4 }}>
            <FoodCard
              name={data.name}
              img={data.img}
              price={data.price}
              quantity={data.quantity}
              onQuantityChange={(name, quantity) => {
                if (setCart) {
                  setCart((prevState) => {
                    let newState = [...prevState];
                    newState = newState.map((data) => {
                      if (data.name === name) {
                        data.quantity += quantity;
                      }
                      return { ...data };
                    });
                    return newState;
                  });
                }
              }}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};
export default Home;
