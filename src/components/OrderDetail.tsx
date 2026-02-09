"use client";

import { useEffect, useState } from "react";

import { Order, OrderItem } from "@/lib/types";

interface Props {
  data: Order;
  id: string;
}

export default function OrderDetail({ data, id }: Props) {
    const [order, setOrder] = useState<Order>(data);

    useEffect(() => {
        const fetchOrder = async () => {
            const res = await fetch(`/api/orders/${id}`, { cache: "no-store" });
            const resData = await res.json();
            setOrder(resData);
        };

        fetchOrder();
        const interval = setInterval(fetchOrder, 30000);

        return () => clearInterval(interval);
    }, [id]);

    if (!order) {
        return (
            <main className="p-6 max-w-xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">
                    Order Status
                </h1>
                <p className="text-lg mt-2">
                    Order not found 😢
                </p>
            </main>
        );
    }
    

    return (
        <main className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">
                Order Status
            </h1>

            <p className="text-lg mt-2">
                🚚 Current Status:{" "}
                <strong>{order.status}</strong>
            </p>
            <h2 className="text-xl font-semibold mt-6">
                Order Details
            </h2>
            <ul className="list-disc list-inside mt-2">
                {order.items?.map((item: OrderItem) => (
                    <li key={item.menuItemId}>
                        {item.quantity} x{" "}
                        <strong>{item.menuItemName}</strong>
                    </li>
                ))}
            </ul>
            <h2 className="text-xl font-semibold mt-6">
                Customer Details
            </h2>
            <p className="mt-2">
                <strong>Name:</strong> {order.customer?.name}
            </p>
            <p className="mt-2">
                <strong>Phone:</strong> {order.customer?.phone}
            </p>
            <p className="mt-2">
                <strong>Address:</strong> {order.customer?.address}
            </p>
        </main>
    );
}