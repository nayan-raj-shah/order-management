"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { cart, increment, decrement } = useCart();

    const total = cart.reduce(
        (sum, item) =>
            sum + item.menuItem.price * item.quantity,
        0
    );

    return (
        <main className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">
                🛒 Your Cart
            </h1>

            {cart.length === 0 && (
                <div className="text-center mt-10">
                    <p className="text-lg mb-4">
                        Your cart is empty 🛒
                    </p>
                    <Link
                        href="/"
                        className="text-blue-600 underline"
                    >
                        Browse menu
                    </Link>
                </div>
            )}

            {cart.map((item) => (
                <div key={item.menuItem.id}>
                    <div
                        className="flex justify-between items-center mb-3"
                    >
                        <span>{item.menuItem.name}</span>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() =>
                                    decrement(item.menuItem.id)
                                }
                                className="px-3 py-1 border rounded"
                            >
                                −
                            </button>

                            <span>{item.quantity}</span>

                            <button
                                onClick={() =>
                                    increment(item.menuItem.id)
                                }
                                className="px-3 py-1 border rounded"
                            >
                                +
                            </button>
                        </div>

                        <span>
                            ₹{item.menuItem.price * item.quantity}
                        </span>
                    </div>
                    <hr className="my-2" />
                </div>
            ))}

            {cart.length > 0 && (
                <>
                    <div className="mt-4 font-bold">
                        Total: ₹{total}
                    </div>

                    <Link
                        href="/checkout"
                        className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Proceed to Checkout
                    </Link>
                </>
            )}
        </main>
    );
}