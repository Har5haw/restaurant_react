import { fireEvent, render } from "@testing-library/react";
import ItemsList from ".";
import { Provider } from "react-redux";
import { store } from "../../../app/store";

describe("Table", () => {
    it("render Table", () => {
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
});
