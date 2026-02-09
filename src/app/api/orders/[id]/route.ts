import { NextResponse } from "next/server";
import { orders } from "@/lib/data";

export async function GET(
    _: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const order = orders.get(id);

    if (!order) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(order);
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const order = orders.get(id);

    if (!order) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    order.status = "PREPARING";
    orders.set(id, order);

    return NextResponse.json(order);
}