import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@material-ui/core";

const PopUp = (props) => {
    return (
        <Dialog open={props.open} onClose={props.close} maxWidth={"xl"}>
            <DialogTitle>Table Name: {props.tableName}</DialogTitle>
            <DialogContent dividers>{props.children}</DialogContent>
            <DialogContent>Total Price: {props.totalPrice}</DialogContent>
            <DialogActions>
                <Button onClick={props.close} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PopUp;
