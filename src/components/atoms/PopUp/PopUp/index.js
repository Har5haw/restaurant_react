import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";

const PopUp = (props) => {
    return (
        <Dialog open={props.open} onClose={props.close} maxWidth={"xl"}>
            <DialogTitle>
                <Typography> Table Name: {props.tableName}</Typography>
            </DialogTitle>
            <DialogContent dividers>{props.children}</DialogContent>
            <DialogContent>
                <Typography>Total Amount: {props.totalPrice}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.close} color="primary">
                    <Typography>Close</Typography>
                </Button>
            </DialogActions>
        </Dialog>
    );
};

PopUp.propsType = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    tableName: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
};

export default PopUp;
