import React from 'react';
import TableItems from './index';
import baseTheme from '../../../themes/index';

export default {
    title: "Table items",
    component: TableItems
}

const Template = (args) => <TableItems {...args} />

export const tableItems = Template.bind({});
tableItems.args = {
    totalItems: 20
}