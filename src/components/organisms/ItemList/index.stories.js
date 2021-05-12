import React from "react";
import ItemList from "./index";
import baseTheme from "../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";

export default {
    title: "Organisms/Item List",
    component: ItemList,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <ItemList {...args} />
    </ThemeProvider>
);

export const itemList = Template.bind({});

itemList.args = {
    list: require("../../../data/items.json"),
};
