import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { Provider } from "react-redux";
import HomePage from ".";
import baseTheme from "../../../themes/index";
import { store } from "../../../app/store";

export default {
    title: "Pages/Home Page",
    component: HomePage,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <Provider store={store}>
            <HomePage {...args} />
        </Provider>
    </ThemeProvider>
);

export const homePage = Template.bind({});
homePage.args = {
    tableList: require("../../../data/tables.json"),
    itemList: require("../../../data/items.json"),
};
