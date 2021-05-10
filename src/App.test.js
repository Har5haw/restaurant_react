import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ItemName from "./components/atoms/ItemAtoms/ItemName";

test("renders learn react link", () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const navigationBarElement = screen.getByText("ZeMoSo Restaurant");
    expect(navigationBarElement).toBeInTheDocument();

    fireEvent.click(screen.getByText("Shaw"));

    expect(
        screen.getByText(
            "Drag a item from item list and drop on the table inorder to add items to that table"
        )
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close"));

    const mockFun = { setData: jest.fn() };

    fireEvent.dragStart(screen.getByText("Dosa"), { dataTransfer: mockFun });
    expect(mockFun.setData).toBeCalled();
});

test("render item", () => {
    render(<ItemName itemName={"shaw"} itemPrice={"20"} />);

    expect(screen.getByText("shaw"));
    expect(screen.getByText("20 /-"));
});
