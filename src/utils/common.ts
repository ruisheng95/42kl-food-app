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

export const TITLE = "FoodPanda Demo";

export const BASE_PATH = "/42kl-food-app";

export const PINK_COLOR = "#ff2ba5";

export const DATA: FoodCardProps[] = [
  {
    name: "Nasi Lemak",
    img: `${BASE_PATH}/images/nasi-lemak.jpg`,
    price: 10,
    quantity: 0,
  },
  {
    name: "Satay",
    img: `${BASE_PATH}/images/satay.jpg`,
    price: 5,
    quantity: 0,
  },
  {
    name: "Roti Canai",
    img: `${BASE_PATH}/images/roti-canai.jpg`,
    price: 2,
    quantity: 0,
  },
];
