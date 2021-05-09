import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import HomePage from ".";
import baseTheme from "../../../themes/index";

export default {
    title: "Pages: Home Page",
    component: HomePage,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <HomePage {...args} />
    </ThemeProvider>
);

export const homePage = Template.bind({});
homePage.args = {
    tableList: require("../../../data/tables.json"),
    itemList: require("../../../data/items.json"),
};
