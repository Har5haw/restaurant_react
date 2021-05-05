import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';


const PrimaryCard = (props) => {
    return (<Card color="primary" className={props.classes.transparentBar} raised={true} children={<div>Hai </div>}></Card>);
}

const styles = (themes) => ({ transparentBar: { ...themes.overrides.MuiCard.root, background: "red" } });

export default withStyles(styles)(PrimaryCard);