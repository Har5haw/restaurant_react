import React from 'react';
import PrimaryCard from './index';
import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from '../../../themes/index';

export default {
    title: "primary card",
    component: PrimaryCard
}

const Template = (args) => (<ThemeProvider theme={baseTheme}>
    <PrimaryCard {...args} />
</ThemeProvider>);

export const primaryCard = Template.bind({});
primaryCard.args = {
    title: "Primary",
    children: <div>Hi</div>
};
