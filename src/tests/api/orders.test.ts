import { POST } from "@/app/api/orders/route";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
describe("POST /api/orders", () => {
    it("creates an order successfully", async () => {
        const req = new Request(`${baseUrl}/api/orders`, {
            method: "POST",
            body: JSON.stringify({
                items: [{ menuItemId: "1", quantity: 1, menuItemName: "Pizza" }],
                customer: {
                    name: "John",
                    address: "123 Main Street",
                    phone: "9876543210",
                },
            }),
        });

        const res = await POST(req);
        const json = await res.json();

        expect(res.status).toBe(201);
        expect(json.id).toBeDefined();
        expect(json.status).toBe("RECEIVED");
    });

    it("returns 400 for invalid payload", async () => {
        const req = new Request(`${baseUrl}/api/orders`, {
            method: "POST",
            body: JSON.stringify({}),
        });

        const res = await POST(req);

        expect(res.status).toBe(400);
    });
});