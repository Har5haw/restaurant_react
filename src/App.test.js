import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

test("renders learn react link", () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const navigationBarElement = screen.queryByText("ZeMoSo Restaurant");
    expect(navigationBarElement).toBeInTheDocument();

    fireEvent.click(screen.queryByText("Shaw"));

    expect(
        screen.queryByText(
            "Drag a item from item list and drop on the table inorder to add items to that table"
        )
    ).toBeInTheDocument();

    fireEvent.click(screen.queryByText("Close"));

    const mockFun = { setData: jest.fn() };

    fireEvent.dragStart(screen.queryByText("Dosa"), { dataTransfer: mockFun });
    expect(mockFun.setData).toBeCalled();
});
