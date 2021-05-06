import React from 'react';
import ItemList from './index';
import baseTheme from '../../../themes/index';
import { ThemeProvider } from '@material-ui/core/styles'

export default {
    title: "Organisms : Item List",
    component: ItemList
}

const Template = (args) => <ThemeProvider theme={baseTheme}> <ItemList {...args} /></ThemeProvider>;

export const itemList = Template.bind({});

const itemListData = [
    {
        id: 1,
        image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
        itemName: "Dosa",
        itemPrice: 20
    },
    {
        id: 2,
        image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
        itemName: "Vardhan",
        itemPrice: 20
    },
    {
        id: 3,
        image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
        itemName: "Shaw",
        itemPrice: 20
    },
    {
        id: 4,
        image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
        itemName: "NObody",
        itemPrice: 20
    },
    {
        id: 5,
        image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
        itemName: "Jack Sparrow",
        itemPrice: 20
    },
    {
        id: 6,
        image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
        itemName: "Cat",
        itemPrice: 20
    },
    {
        id: 7,
        image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
        itemName: "Dog",
        itemPrice: 20
    }
];

itemList.args = {
    list: itemListData
}