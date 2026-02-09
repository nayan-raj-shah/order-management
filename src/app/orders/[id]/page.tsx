import OrderDetail from '@/components/OrderDetail';

const getOrder = async (id: string) => {
    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/${id}`, { cache: "no-store" });
    return res.json();
    } catch (error) {
        console.error("Failed to fetch order:", error);
        return null;
    }
}

export default async function OrderStatusPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await getOrder(id);
    return (
        <OrderDetail data={data} id={id} />
    )
}
