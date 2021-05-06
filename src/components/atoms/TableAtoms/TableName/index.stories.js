import React from 'react';
import TableName from './index';
import baseTheme from '../../../../themes/index';
import { ThemeProvider } from '@material-ui/core/styles'

export default {
    title: "Table name",
    component: TableName
}

const Template = (args) => <ThemeProvider theme={baseTheme}> <TableName {...args} /></ThemeProvider>;

export const tableName = Template.bind({});
tableName.args = {
    tableName: "Harsha"
}