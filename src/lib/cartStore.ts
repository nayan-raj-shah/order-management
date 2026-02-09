import { MenuItem } from "./types";

export type CartItem = {
    menuItem: MenuItem;
    quantity: number;
};

let cart: CartItem[] = [];

export const getCart = () => cart;

export const addToCart = (item: MenuItem) => {
    const existing = cart.find(
        (c) => c.menuItem.id === item.id
    );

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ menuItem: item, quantity: 1 });
    }
};

export const clearCart = () => {
    cart = [];
};