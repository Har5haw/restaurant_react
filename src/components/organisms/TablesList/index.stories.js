import React from 'react';
import TableList from './index';
import baseTheme from '../../../themes/index';
import { ThemeProvider } from '@material-ui/core/styles';

export default {
    title: "Organisms : Table List",
    component: TableList
};

const Template = (args) => <ThemeProvider theme={baseTheme}> <TableList {...args} /></ThemeProvider>;

export const tableList = Template.bind({});

const tableListData = [
    {
        tableName: "Harsha",
        totalItems: 20
    },
    {
        tableName: "Vardhan",
        totalItems: 20
    },
    {
        tableName: "Shaw",
        totalItems: 20
    },
    {
        tableName: "NObody",
        totalItems: 20
    },
    {
        tableName: "Jack Sparrow",
        totalItems: 20
    },
    {
        tableName: "Cat",
        totalItems: 20
    },
    {
        tableName: "Dog",
        totalItems: 20
    }
];

tableList.args = {
    list: tableListData
};