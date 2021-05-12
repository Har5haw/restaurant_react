import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import PopUpMolecule from ".";
import baseTheme from "../../../themes/index";

export default {
    title: "Organisms/Popup",
    component: PopUpMolecule,
    argTypes: {
        onServingsChange: { action: "servings change" },
        onDelete: { action: "Delete item" },
        onSave: { action: "On customer name save" },
    },
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <PopUpMolecule {...args} />
    </ThemeProvider>
);

export const popup = Template.bind({});
popup.args = {
    popup: {
        id: 0,
        tableName: "Harsha",
        totalPrice: 20,
        open: true,
    },
    popupData: {
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
    },
    customerName: "Harsha",
};
