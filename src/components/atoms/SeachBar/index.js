import React from 'react';
import { OutlinedInput } from '@material-ui/core';

const SeachBar = (props) => {
    return (
        <OutlinedInput placeholder={props.placeholder} {...props} />
    )
}

export default SeachBar;