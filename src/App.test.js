import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

test("renders learn react link", () => {
    const wrapper = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(wrapper).toBeDefined();
});
