import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import PopUpMolecule from ".";
import baseTheme from "../../../themes/index";

export default {
    title: "Molecules/Popup",
    component: PopUpMolecule,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <PopUpMolecule {...args} />
    </ThemeProvider>
);

export const popup = Template.bind({});
popup.args = {
    popup: {
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
        onServingsChange: () => {
            console.log("servings change");
        },
        onDelete: () => {
            console.log("delete");
        },
    },
};
