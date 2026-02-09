import { NextResponse } from "next/server";
import { orders } from "@/lib/data";
import { Order } from "@/lib/types";
import { randomUUID } from "crypto";
import { createOrderSchema } from "@/lib/schemas";

export async function POST(req: Request) {
    const body = await req.json();
    const result = createOrderSchema.safeParse(body);

    if (!result.success) {
        return NextResponse.json(
            {
                error: "Invalid order data",
                details: result.error.flatten(),
            },
            { status: 400 }
        );
    }
    const id = randomUUID();

    const order: Order = {
        id,
        items: result.data.items,
        customer: result.data.customer,
        status: "RECEIVED",
    };

    orders.set(id, order);

    setTimeout(() => {
        const currentOrder = orders.get(id);
        if (!currentOrder) return;

        currentOrder.status = "PREPARING";
        orders.set(id, currentOrder);
    }, 60000);

    setTimeout(() => {
        const currentOrder = orders.get(id);
        if (!currentOrder) return;

        currentOrder.status = "OUT_FOR_DELIVERY";
        orders.set(id, currentOrder);
    }, 60000 * 2);

    return NextResponse.json(order, { status: 201 });
}