"use client";
import { FoodCardProps } from "@/app/components/FoodCard";
import { useEffect, useState } from "react";

// Fix hydration error https://nextjs.org/docs/messages/react-hydration-error
export const useIsMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};

export const TITLE = "ABC";

export const DATA: FoodCardProps[] = [
  {
    name: "Nasi Lemak",
    img: "/42kl-food-app/images/nasi-lemak.jpg",
    price: 10,
    quantity: 0,
  },
  {
    name: "Satay",
    img: "/42kl-food-app/images/satay.jpg",
    price: 5,
    quantity: 0,
  },
  {
    name: "Roti Canai",
    img: "/42kl-food-app/images/roti-canai.jpg",
    price: 2,
    quantity: 0,
  },
];
