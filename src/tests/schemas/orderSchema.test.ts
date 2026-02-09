import { createOrderSchema } from "@/lib/schemas";

describe("createOrderSchema", () => {
    it("accepts valid order", () => {
        const result = createOrderSchema.safeParse({
            items: [{ menuItemId: "1", quantity: 2, menuItemName: "Pizza" }],
            customer: {
                name: "John",
                address: "123 Main Street, City",
                phone: "9876543210",
            },
        });

        expect(result.success).toBe(true);
    });

    it("rejects empty cart", () => {
        const result = createOrderSchema.safeParse({
            items: [],
            customer: {
                name: "John",
                address: "123 Main Street",
                phone: "9876543210",
            },
        });

        expect(result.success).toBe(false);
    });

    it("rejects invalid phone", () => {
        const result = createOrderSchema.safeParse({
            items: [{ menuItemId: "1", quantity: 1, menuItemName: "Pizza" }],
            customer: {
                name: "John",
                address: "123 Main Street",
                phone: "123",
            },
        });

        expect(result.success).toBe(false);
    });
});