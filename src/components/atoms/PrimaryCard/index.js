import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';


const PrimaryCard = ({ children, ...props }) => {
    return (<Card color="primary" className={props.classes.card} raised={true} children={children}></Card>);
}

const styles = (themes) => ({ card: { ...themes.overrides.MuiCard.root, background: "white", color: "black", borderRadius: "10px", display: "inline-block" } });

export default withStyles(styles)(PrimaryCard);