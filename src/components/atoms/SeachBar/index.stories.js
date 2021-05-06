import React from 'react';
import SearchBar from './index';
import { ThemeProvider } from '@material-ui/core/styles'

export default {
    title: "search bar",
    component: SearchBar
}

const Template = (args) => <ThemeProvider><SearchBar {...args} /></ThemeProvider>

export const searchBar = Template.bind({});
searchBar.args = {
    placeholder: "Search by Table Name"
}