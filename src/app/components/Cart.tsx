"use client";
import React, { useState } from 'react';
import { CartContext } from "@/utils/CartContext";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const button1 = {
  textTransform: 'none', 
  color: 'grey',
  borderColor: 'gray',
  '&:hover': {
    backgroundColor: 'gray', // Light forest green background on hover
    color: 'white',
  },
};

const button1_active = {
  textTransform: 'none',
  borderColor: 'gray',
  backgroundColor: 'gray', // Slightly darker forest green background on focus
  color: 'white',
}

const button2 = {
  textTransform: 'none', 
  color: '#56A679',
  borderColor: '#56A679',
  '&:hover': {
    backgroundColor: '#56A679', // Light forest green background on hover
    color: 'white',
  },
};

const button2_active =  {
  textTransform: 'none', 
  borderColor: '#008000',
  backgroundColor: '#008000', // Slightly darker forest green background on focus
  color: 'white'
}

const buttonGrouping = {
  paddingBottom: '30px', 
  flexWrap: 'wrap', 
  justifyContent: 'center', 
  gap: '10px'
}


const Cart = () => {
  const { cart } = useContext(CartContext);
  const [delivery, setDelivery] = useState(-1);
  const [time, setTime] = useState(-1);
  const [optout, setOptOut] = useState(-1);

  const isCartEmpty =
    cart?.map((data) => data.quantity).reduce((v1, v2) => v1 + v2, 0) || 0;
  return (
    <>
      <List>
        <ListItem>
          <ListItemText primary="Delivery" sx={{textAlign: 'center'}}/>
        </ListItem>
        <Stack spacing={1} direction="row" sx={buttonGrouping}>
          <Button variant="outlined" sx={delivery === 0 ? button1_active : button1} onClick={() => setDelivery(0)}>Normal</Button>
          <Button variant="outlined" sx={delivery === 1 ? button2_active : button2} onClick={() => setDelivery(1)}>Walker</Button>
          <Button variant="outlined" sx={delivery === 2 ? button2_active : button2} onClick={() => setDelivery(2)}>E-bike</Button>
          <Button variant="outlined" sx={delivery === 3 ? button2_active : button2} onClick={() => setDelivery(3)}>E-scooter</Button>
        </Stack>
        <Divider component="li" />


      <ListItem>
        <ListItemText primary="Time" sx={{textAlign: 'center'}}/>
      </ListItem>
      <Stack spacing={1} direction="row" sx={buttonGrouping}>
          <Button variant="outlined" sx={time === 0 ? button1_active : button1} onClick={() => setTime(0)}>Now</Button>
          <Button variant="outlined" sx={time === 1 ? button2_active : button2} onClick={() => setTime(1)}>Schedule</Button>
      </Stack>
      <Divider component="li" />


      <ListItem>
        <ListItemText primary="Opt out" sx={{textAlign: 'center'}}/>
      </ListItem>
      <Stack spacing={1} direction="row" sx={buttonGrouping}>
        <Button variant="outlined" sx={optout === 0 ? button1_active : button1} onClick={() => setOptOut(0)}>None</Button>
          <Button variant="outlined" sx={optout === 1 ? button2_active : button2} onClick={() => setOptOut(1)}>Cutlery</Button>
      </Stack>
      <Divider component="li" />



        {!isCartEmpty ? (
          <ListItem>
            <ListItemText primary="Empty Cart" />
          </ListItem>
        ) : (
          <>
            {cart?.map((data, i) =>
              data.quantity ? (
                <>
                <ListItem key={i}>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px', marginBottom: '0px'}}>
                        <Typography>
                          {data.quantity} x {data.name} (RM{data.price.toFixed(2)})
                        </Typography>
                        <Typography>
                          RM{(data.quantity * data.price).toFixed(2)}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>

                <ListItem key={i}>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '0px'}}>
                        <Typography>
                          Delivery charge
                        </Typography>
                        <Typography>
                          RM{(5).toFixed(2)}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
                
                <ListItem key={i}>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '0px'}}>
                        <Typography sx={{fontWeight: 'bold'}}>
                          Total
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}}>
                          RM{((data.quantity * data.price) + 5).toFixed(2)}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>

                <ListItem key={i}>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '0px'}}>
                        <Typography >
                          Bamboo points
                        </Typography>
                        <Typography>
                          {(delivery > 0 ? 1 : 0)+ (time > 0 ? 1 : 0) + (optout > 0 ? 1 : 0)} points
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
                
                <Stack spacing={1} direction="row" sx={{ display: 'flex', justifyContent: 'center', padding: '45px'}}>
                  <Button variant="contained" onClick={() => {
                    fetch('http://127.0.0.1:8000/database/receiveOrder/', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({"name": "EcoPioneer","contribution": ((delivery > 0 ? 1 : 0)+ (time > 0 ? 1 : 0) + (optout > 0 ? 1 : 0)).toString()}),
                    })
                    .then(response => response.json())
                    .then(data => {
                      console.log('Success:', data);
                      // Handle successful response here
                    })
                    .catch((error) => {
                      console.error('Error:', error);
                      // Handle errors here
                    });
                  }}>Checkout</Button>
                </Stack>
                </>
              ) : (
                <Box key={i}></Box>
              )
            )}
          </>
        )}

      </List>
    </>
  );
};

export default Cart;