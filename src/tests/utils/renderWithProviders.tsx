import { render } from "@testing-library/react";
import { CartContext } from "@/context/CartContext";

export function renderWithProviders(ui: React.ReactNode) {
  return render(
    <CartContext.Provider
      value={{
        cart: [],
        addItem: jest.fn(),
        increment: jest.fn(),
        decrement: jest.fn(),
        clearCart: jest.fn(),
      }}
    >
      {ui}
    </CartContext.Provider>
  );
}

export function renderWithCart(ui: React.ReactNode) {
    const mockCart = [
        {
            menuItem: {
                id: "1",
                name: "Pizza",
                description: "Test",
                price: 100,
                image: "",
            },
            quantity: 1,
        },
    ];

    return render(
        <CartContext.Provider
            value={{
                cart: mockCart,
                addItem: jest.fn(),
                increment: jest.fn(),
                decrement: jest.fn(),
                clearCart: jest.fn(),
            }}
        >
            {ui}
        </CartContext.Provider>
    );
}