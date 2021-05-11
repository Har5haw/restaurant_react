import { fireEvent, render, act, screen } from "@testing-library/react";
import ItemsList from ".";
import { Provider } from "react-redux";
import { store } from "../../../app/store";

describe("Item List", () => {
    it("render Item List", () => {
        const wrapper = render(
            <Provider store={store}>
                <ItemsList />
            </Provider>
        );
        expect(wrapper).toBeDefined;

        const mockFun = { setData: jest.fn() };

        fireEvent.dragStart(wrapper.queryByText("Dosa"), {
            dataTransfer: mockFun,
        });
        expect(mockFun.setData).toBeCalledWith("itemId", 1);
    });
    it("Search bar testing", async () => {
        const wrapper = render(
            <Provider store={store}>
                <ItemsList />
            </Provider>
        );
        expect(wrapper).toBeDefined;
        const searchBar = wrapper.getByTestId("search-items");
        fireEvent.change(searchBar, { target: { value: "Dosa" } });

        const comparingAllTableNames = (ele) => {
            if (ele.itemName === "Dosa") {
                expect(screen.queryByText(ele.itemName)).toBeInTheDocument();
            } else {
                expect(
                    screen.queryByText(ele.itemName)
                ).not.toBeInTheDocument();
            }
        };

        const executeAfterTheSearchBarCoolDown = () => {
            require("../../../data/items.json").forEach(comparingAllTableNames);
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
    it("Search bar testing for Course", async () => {
        const wrapper = render(
            <Provider store={store}>
                <ItemsList />
            </Provider>
        );
        expect(wrapper).toBeDefined;
        const searchBar = wrapper.getByTestId("search-items");
        fireEvent.change(searchBar, { target: { value: "bever" } });

        const comparingAllTableNames = (ele) => {
            if (ele.itemName === "Masala Chai") {
                expect(screen.queryByText(ele.itemName)).toBeInTheDocument();
            } else {
                expect(
                    screen.queryByText(ele.itemName)
                ).not.toBeInTheDocument();
            }
        };

        const executeAfterTheSearchBarCoolDown = () => {
            require("../../../data/items.json").forEach(comparingAllTableNames);
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
