import { MenuItem, Order } from "./types";

export const menu: MenuItem[] = [
    {
        id: "1",
        name: "Pizza",
        description: "Cheese burst pizza",
        price: 299,
        image: "/pizza.avif",
    },
    {
        id: "2",
        name: "Burger",
        description: "Crispy veg burger",
        price: 149,
        image: "/burger.jpg",
    },
    {
        id: "3",
        name: "Pasta",
        description: "Spaghetti with tomato sauce",
        price: 199,
        image: "/pasta.jpg",
    },
    {
        id: "4",
        name: "French Fries",
        description: "Crispy golden fries",
        price: 99,
        image: "/fries.jpg",
    },
];

export const orders = new Map<string, Order>();