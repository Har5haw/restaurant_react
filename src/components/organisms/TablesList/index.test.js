import { act, fireEvent, render, screen } from "@testing-library/react";
import store from "../../../app/store";
import TablesList from ".";
import { Provider } from "react-redux";
import { saveUser } from "../../../features/waiterServingsList";
import { editCustomerName } from "../../../features/tableList";

describe("Table", () => {
    store.dispatch(saveUser({ name: "shaw" }));
    store.dispatch(editCustomerName({ tableId: 0, customerName: "reyna" }));
    it("Initial render", () => {
        const wrapper = render(
            <Provider store={store}>
                <TablesList
                    tableData={require("../../../data/tables.json")}
                    popupData={{
                        tableIndex: 0,
                        isOpen: false,
                    }}
                    editablePopup={true}
                    waiterData={{ name: "shaw" }}
                />
            </Provider>
        );
        expect(wrapper).toBeDefined;
        expect(wrapper.queryAllByText("Table No - 1")).toHaveLength(1);
        fireEvent.click(wrapper.queryByText("Table No - 1"));
        expect(
            wrapper.queryByText(
                "Drag a item from item list and drop on the table inorder to add items to that table"
            )
        ).toBeInTheDocument();
        expect(wrapper.queryByText("Total Amount: 0")).toBeInTheDocument();
        expect(wrapper.queryAllByText("Table No - 1")).toHaveLength(2);
        fireEvent.click(wrapper.queryByText("Close"));
    });
    it("Adding Item", () => {
        const wrapper = render(
            <Provider store={store}>
                <TablesList
                    tableData={[
                        {
                            id: 0,
                            tableName: "Shaw",
                            totalItems: 0,
                            totalPrice: 0,
                            items: [],
                        },
                    ]}
                    popupData={{
                        tableIndex: 0,
                        isOpen: false,
                    }}
                    editablePopup={true}
                    waiterData={{ name: "shaw" }}
                />
            </Provider>
        );
        expect(wrapper).toBeDefined;

        const mockFun = { getData: jest.fn().mockReturnValue(1) };

        const prevDFaul = jest.fn();

        fireEvent.dragOver(wrapper.queryByText("Table No - 1"), {
            preventDefault: prevDFaul,
        });

        expect(prevDFaul).toBeCalledTimes(0);

        fireEvent.drop(wrapper.queryByText("Table No - 1"), {
            dataTransfer: mockFun,
        });
        expect(mockFun.getData).toBeCalledWith("itemId");
    });

    it("Search bar testing", async () => {
        const wrapper = render(
            <Provider store={store}>
                <TablesList
                    tableData={[
                        {
                            id: 0,
                            tableName: "Shaw",
                            totalItems: 0,
                            totalPrice: 0,
                            items: [],
                        },
                        {
                            id: 1,
                            tableName: "Reyna",
                            totalItems: 0,
                            totalPrice: 0,
                            items: [],
                        },
                    ]}
                    waiterData={{ name: "shaw" }}
                />
            </Provider>
        );
        expect(wrapper).toBeDefined;
        const searchBar = wrapper.getByTestId("search-tables");
        fireEvent.change(searchBar, { target: { value: "Shaw" } });

        const executeAfterTheSearchBarCoolDown = () => {
            expect(screen.queryByText("Shaw")).toBeInTheDocument();
            expect(screen.queryByText("Reyna")).not.toBeInTheDocument();
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
