import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutPage from "@/app/checkout/page";
import { renderWithCart, renderWithProviders } from "../utils/renderWithProviders";

describe("Checkout Page", () => {
    it("shows empty cart warning when cart is empty", () => {
        renderWithProviders(<CheckoutPage />);

        expect(
            screen.getByText(/your cart is empty/i)
        ).toBeInTheDocument();
    });

    it("disables submit when cart is empty", () => {
        renderWithProviders(<CheckoutPage />);

        expect(
            screen.getByRole("button", { name: /place order/i })
        ).toBeDisabled();
    });

    it("shows validation errors when cart has items", async () => {
        renderWithCart(<CheckoutPage />);

        await userEvent.click(
            screen.getByRole("button", { name: /place order/i })
        );

        expect(
            await screen.findByText(/at least 2 characters/i)
        ).toBeInTheDocument();
    });
});
