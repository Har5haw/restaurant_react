import { fireEvent, render, screen } from "@testing-library/react";
import PopupData from ".";

describe("Popup Data", () => {
    it("render Popup Data", () => {
        const wrapper = render(
            <PopupData
                items={[
                    {
                        id: 0,
                        itemName: "Dosa",
                        itemPrice: 20,
                        servings: 2,
                    },
                ]}
            />
        );
        expect(wrapper).toBeDefined;

        expect(screen.queryByText("Dosa")).toBeInTheDocument();
        expect(screen.queryByText("20")).toBeInTheDocument();
        expect(screen.getByLabelText("delete-button-0")).toBeInTheDocument();
    });
    it("on servings change", () => {
        const mockServingChange = jest.fn();

        const wrapper = render(
            <PopupData
                items={[
                    {
                        id: 0,
                        itemName: "Dosa",
                        itemPrice: 20,
                        servings: 2,
                    },
                ]}
                onServingsChange={mockServingChange}
            />
        );
        expect(wrapper).toBeDefined;

        fireEvent.change(wrapper.getByDisplayValue("2"), {
            target: { value: "3" },
        });
        expect(mockServingChange).toBeCalled();
    });
    it("on delete", () => {
        const mockOnDelete = jest.fn();

        const wrapper = render(
            <PopupData
                items={[
                    {
                        id: 0,
                        itemName: "Dosa",
                        itemPrice: 20,
                        servings: 2,
                    },
                ]}
                onDelete={mockOnDelete}
            />
        );
        expect(wrapper).toBeDefined;

        fireEvent.click(wrapper.getByLabelText("delete-button-0"));
        expect(mockOnDelete).toBeCalledWith(0);
    });
    it("List is empty", () => {
        const wrapper = render(<PopupData items={[]} />);
        expect(wrapper).toBeDefined;

        expect(
            screen.queryByText(
                "Drag a item from item list and drop on the table inorder to add items to that table"
            )
        ).toBeInTheDocument();
    });
});
