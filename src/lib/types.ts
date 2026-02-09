export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
};

export type OrderItem = {
    menuItemId: string;
    menuItemName: string;
    quantity: number;
};

export type OrderStatus =
    | "RECEIVED"
    | "PREPARING"
    | "OUT_FOR_DELIVERY";

export type Order = {
    id: string;
    items: OrderItem[];
    customer: {
        name: string;
        address: string;
        phone: string;
    };
    status: OrderStatus;
};