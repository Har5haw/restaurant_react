import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@material-ui/core";

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

export default PopUp;
