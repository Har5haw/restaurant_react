import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import PopUp from ".";
import baseTheme from "../../../../themes/index";

export default {
    title: "Atoms/Popup",
    component: PopUp,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <PopUp {...args} />
    </ThemeProvider>
);

export const popup = Template.bind({});
popup.args = {
    tableName: "Harsha",
    totalPrice: 20,
    open: true,
};
