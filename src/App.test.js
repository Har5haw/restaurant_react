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
});
