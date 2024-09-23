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
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Normal Checkout" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
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
