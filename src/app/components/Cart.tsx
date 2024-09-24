"use client";
import { CartContext } from "@/utils/CartContext";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const isCartEmpty =
    cart?.map((data) => data.quantity).reduce((v1, v2) => v1 + v2, 0) || 0;
  const handleClick = async (name: string,
      quantity: number, total_price: number) => {
    const response = await fetch('/domain/database/orderReceived', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_name: name, quantity: quantity, total_price: total_price
      }),
    });

    if (response.ok) {
      alert('File saved successfully!');
    } else {
      alert('Error saving the file');
    }
  };
    return (
    <>
      <List>
        {!isCartEmpty ? (
          <ListItem>
            <ListItemText primary="Empty Cart" />
          </ListItem>
        ) : (
          <>
            {cart?.map((data, i) =>
              data.quantity ? (
                <ListItem key={i}>
                  <ListItemText
                    primary={data.name}
                    secondaryTypographyProps={{ component: "div" }}
                    secondary={
                      <Box>
                        <Typography>
                          {data.quantity} x RM {data.price} = RM{" "}
                          {data.quantity * data.price}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              ) : (
                <Box key={i}></Box>
              )
            )}
            <ListItem>
              <ListItemButton onClick={() => handleClick("test", 1, 1)}>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Normal Checkout" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => handleClick("eco-test", 1, 1)}>
                <ListItemIcon>
                  <EnergySavingsLeafIcon />
                </ListItemIcon>
                <ListItemText primary="Eco Checkout" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </>
  );
};

export default Cart;
