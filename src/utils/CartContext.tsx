"use client";
import { FoodCardProps } from "@/app/components/FoodCard";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { DATA } from "./common";

interface CartContextType {
  cart?: FoodCardProps[];
  setCart?: Dispatch<SetStateAction<FoodCardProps[]>>;
}

export const CartContext = createContext<CartContextType>({});

const CartContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [cart, setCart] = useState<FoodCardProps[]>(DATA);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
