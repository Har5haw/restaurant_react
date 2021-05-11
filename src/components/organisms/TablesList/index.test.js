import { act, fireEvent, render, screen } from "@testing-library/react";
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

        fireEvent.click(wrapper.queryByText("Close"));
    });
    it("Change servings", () => {
        const wrapper = render(
            <Provider store={store}>
                <TablesList />
            </Provider>
        );

        expect(wrapper).toBeDefined;

        fireEvent.click(wrapper.queryByText("Shaw"));

        fireEvent.change(screen.queryByTestId("serving-input-0"), {
            target: { value: 2 },
        });
        expect(wrapper.queryByText("Dosa")).toBeInTheDocument();
        expect(wrapper.queryByText("Total Amount: 40")).toBeInTheDocument();
        expect(wrapper.queryByText("Table Name: Shaw")).toBeInTheDocument();
    });
    it("Search bar testing", async () => {
        const wrapper = render(
            <Provider store={store}>
                <TablesList />
            </Provider>
        );
        expect(wrapper).toBeDefined;
        const searchBar = wrapper.getByTestId("search-tables");
        fireEvent.change(searchBar, { target: { value: "Shaw" } });

        const comparingAllTableNames = (ele) => {
            if (ele.tableName === "Shaw") {
                expect(screen.queryByText(ele.tableName)).toBeInTheDocument();
            } else {
                expect(
                    screen.queryByText(ele.tableName)
                ).not.toBeInTheDocument();
            }
        };

        const executeAfterTheSearchBarCoolDown = () => {
            require("../../../data/tables.json").forEach(
                comparingAllTableNames
            );
        };

        const promiseForCoolDown = () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    executeAfterTheSearchBarCoolDown();
                    resolve();
                }, 500);
            });

        await act(() => promiseForCoolDown());
    });
});
