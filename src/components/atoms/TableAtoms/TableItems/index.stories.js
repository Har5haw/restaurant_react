import React from 'react';
import TableItems from './index';
import baseTheme from '../../../../themes/index';
import { ThemeProvider } from '@material-ui/styles';

export default {
    title: "Table items",
    component: TableItems
}

const Template = (args) => <ThemeProvider theme={baseTheme}> <TableItems {...args} /></ThemeProvider>

export const tableItems = Template.bind({});
tableItems.args = {
    totalItems: 20
}