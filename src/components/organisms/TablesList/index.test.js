import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import TablesList from ".";

describe("Table", () => {
    it("Initial render", () => {
        const wrapper = render(
            <Provider store={store}>
                <TablesList />
            </Provider>
        );
        expect(wrapper).toBeDefined;

        fireEvent.click(wrapper.queryByText("Shaw"));

        expect(
            wrapper.queryByText(
                "Drag a item from item list and drop on the table inorder to add items to that table"
            )
        ).toBeInTheDocument();
        expect(wrapper.queryByText("Total Amount: 0")).toBeInTheDocument();
        expect(wrapper.queryByText("Table Name: Shaw")).toBeInTheDocument();

        fireEvent.click(wrapper.queryByText("Close"));
    });
    it("Adding Item", () => {
        const wrapper = render(
            <Provider store={store}>
                <TablesList />
            </Provider>
        );
        expect(wrapper).toBeDefined;

        const mockFun = { getData: jest.fn().mockReturnValue(1) };

        fireEvent.dragOver(wrapper.queryByText("Shaw"), {
            dataTransfer: mockFun,
        });

        fireEvent.drop(wrapper.queryByText("Shaw"), {
            dataTransfer: mockFun,
        });
        expect(mockFun.getData).toBeCalledWith("itemId");

        fireEvent.click(wrapper.queryByText("Shaw"));

        expect(
            wrapper.queryByText(
                "Drag a item from item list and drop on the table inorder to add items to that table"
            )
        ).not.toBeInTheDocument();
        expect(wrapper.queryByText("Dosa")).toBeInTheDocument();
        expect(wrapper.queryByText("Total Amount: 20")).toBeInTheDocument();
        expect(wrapper.queryByText("Table Name: Shaw")).toBeInTheDocument();
    });
});
