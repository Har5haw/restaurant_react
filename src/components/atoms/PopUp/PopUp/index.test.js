import { fireEvent, render } from "@testing-library/react";
import PopUp from ".";

describe("Popup ", () => {
    it("render popup when true", () => {
        const wrapper = render(
            <PopUp open={true} tableName={"Shaw"} totalPrice={20} />
        );
        expect(wrapper).toBeDefined;

        expect(wrapper.queryByText("Table Name: Shaw")).toBeInTheDocument();
        expect(wrapper.queryByText("Total Amount: 20")).toBeInTheDocument();
    });
    it("render popup when false", () => {
        const wrapper = render(<PopUp open={false} tableName={"Shaw"} />);
        expect(wrapper).toBeDefined;

        expect(wrapper.queryByText("Table Name: Shaw")).toBeNull();
    });
    it("Test close action", () => {
        const mockFun = jest.fn();
        const wrapper = render(
            <PopUp
                open={true}
                tableName={"Shaw"}
                totalPrice={20}
                close={mockFun}
            />
        );
        expect(wrapper).toBeDefined;

        fireEvent.click(wrapper.queryByText("Close"));
        expect(mockFun).toBeCalled();
    });
});
