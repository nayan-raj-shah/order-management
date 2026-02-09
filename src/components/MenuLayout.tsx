"use client";

import { useState } from "react";
import { MenuItem } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import Alert from "@/components/Alert";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MenuLayout({ menu }: { menu: MenuItem[] }) {
    const [alert, setAlert] = useState("");
    const router = useRouter();

    const { addItem } = useCart();

    const handleAddToCart = (item: MenuItem) => {
        addItem(item);
        setAlert(`${item.name} added to cart`);
        setTimeout(() => router.push("/cart"), 1000);
    };

    return (
        <main className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">
                🍕 Food Menu
            </h1>

            <Alert message={alert} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menu.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-lg p-4 shadow justify-between flex flex-col"
                    >
                        <div className="flex items-center gap-4">
                            <Image className="rounded-md" src={item.image} alt={item.name} width={150} height={150} />
                            <div>
                                <h2 className="text-xl font-semibold">
                                    {item.name}
                                </h2>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                                <p className="font-bold mt-2">
                                    ₹{item.price}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleAddToCart(item)}
                            className="mt-3 bg-black text-white px-4 py-2 rounded"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}