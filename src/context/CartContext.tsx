"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";
import { MenuItem } from "@/lib/types";

export type CartItem = {
    menuItem: MenuItem;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addItem: (item: MenuItem) => void;
    increment: (id: string) => void;
    decrement: (id: string) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(
    null
);

export function CartProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addItem = (item: MenuItem) => {
        setCart((prev) => {
            const existing = prev.find(
                (c) => c.menuItem.id === item.id
            );

            if (existing) {
                return prev.map((c) =>
                    c.menuItem.id === item.id
                        ? { ...c, quantity: c.quantity + 1 }
                        : c
                );
            }

            return [...prev, { menuItem: item, quantity: 1 }];
        });
    };

    const increment = (id: string) => {
        setCart((prev) =>
            prev.map((c) =>
                c.menuItem.id === id
                    ? { ...c, quantity: c.quantity + 1 }
                    : c
            )
        );
    };

    const decrement = (id: string) => {
        setCart((prev) =>
            prev
                .map((c) =>
                    c.menuItem.id === id
                        ? { ...c, quantity: c.quantity - 1 }
                        : c
                )
                .filter((c) => c.quantity > 0)
        );
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                increment,
                decrement,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx)
        throw new Error(
            "useCart must be used within CartProvider"
        );
    return ctx;
};

export { CartContext };