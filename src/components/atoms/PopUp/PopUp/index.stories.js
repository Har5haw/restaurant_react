import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import PopUp from ".";
//import baseTheme from "../../../../themes/index";

export default {
    title: "Atoms : Popup",
    component: PopUp,
};

const Template = (args) => (
    <ThemeProvider>
        <PopUp {...args} />
    </ThemeProvider>
);

export const popUp = Template.bind({});
popUp.args = {
    tableName: "Harsha",
    totalPrice: 20,
    open: true,
};
