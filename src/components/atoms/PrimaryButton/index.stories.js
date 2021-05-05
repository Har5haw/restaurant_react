import React from 'react';
import PrimaryButton from './index';
import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from '../../../themes/index';

export default {
    title: "primary button",
    component: PrimaryButton,
    argTypes: { onClick: { action: "clicked" } },
}

const Template = (args) => <ThemeProvider theme={baseTheme}><PrimaryButton {...args} /></ThemeProvider>;

export const primaryButton = Template.bind({});
primaryButton.args = {
    title: "Primary",
};
