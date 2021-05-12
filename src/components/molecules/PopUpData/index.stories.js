import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import PopupData from ".";
import baseTheme from "../../../themes/index";

export default {
    title: "Molecules/Popup",
    component: PopupData,
    argTypes: {
        onServingsChange: { action: "Servings change" },
        onDelete: { action: "Delete" },
    },
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <PopupData {...args} />
    </ThemeProvider>
);

export const popupData = Template.bind({});
popupData.args = {
    items: [
        {
            itemName: "Item1",
            itemPrice: 20,
            servings: 1,
        },
        {
            itemName: "Item2",
            itemPrice: 30,
            servings: 1,
        },
    ],
    editable: true,
};
