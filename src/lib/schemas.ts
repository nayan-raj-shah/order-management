import { z } from "zod";

export const orderItemSchema = z.object({
    menuItemId: z.string(),
    menuItemName: z.string(),
    quantity: z.number().min(1),
});

export const customerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    address: z
        .string()
        .min(10, "Address must be at least 10 characters"),
    phone: z
        .string()
        .regex(/^\d{10}$/, "Phone must be 10 digits"),
});

export const createOrderSchema = z.object({
    items: z.array(orderItemSchema).min(1, "Cart cannot be empty"),
    customer: customerSchema,
});

export const checkoutFormSchema = customerSchema;
export type CheckoutFormValues = z.infer<
  typeof checkoutFormSchema
>;