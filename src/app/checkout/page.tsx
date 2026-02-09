"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Alert from "@/components/Alert";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { checkoutFormSchema, CheckoutFormValues } from "@/lib/schemas";

export default function CheckoutPage() {
    const { cart, clearCart } = useCart();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
    });

    const onSubmit = async (data: CheckoutFormValues) => {
        if (cart.length === 0) return;

        const res = await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: cart.map((c) => ({
                    menuItemId: c.menuItem.id,
                    menuItemName: c.menuItem.name,
                    quantity: c.quantity,
                })),
                customer: data,
            }),
        });

        const order = await res.json();
        clearCart();

        setTimeout(() => {
            router.push(`/orders/${order.id}`);
        }, 800);
    };

    return (
        <main className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">
                Checkout
            </h1>

            {cart.length === 0 && (
                <Alert
                    type="error"
                    message="Your cart is empty"
                />
            )}

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-3"
            >
                <div>
                    <input
                        placeholder="Name"
                        {...register("name")}
                        className="border rounded-md p-2 w-full"
                    />
                    {errors.name && (
                        <p className="text-red-600 text-sm">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        placeholder="Address"
                        {...register("address")}
                        className="border rounded-md p-2 w-full"
                    />
                    {errors.address && (
                        <p className="text-red-600 text-sm">
                            {errors.address.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        placeholder="Phone"
                        {...register("phone")}
                        className="border rounded-md p-2 w-full"
                    />
                    {errors.phone && (
                        <p className="text-red-600 text-sm">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                <button
                    disabled={cart.length === 0 || isSubmitting}
                    className="bg-black text-white px-4 py-2 rounded w-full disabled:opacity-50"
                >
                    {isSubmitting ? "Placing Order..." : "Place Order"}
                </button>
            </form>
        </main>
    );
}