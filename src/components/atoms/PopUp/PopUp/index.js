import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

const PopUp = (props) => {
    return (
        <Dialog open={props.open} onClose={props.close} fullWidth>
            <DialogTitle onClose={props.close}>
                Table Name: {props.tableName}
            </DialogTitle>
            <DialogContent dividers>
                {
                    props.children
                }
            </DialogContent>
            <DialogContent dividers>
                Total Price: {props.totalPrice}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.close} color="primary"> Close </Button>
            </DialogActions>
        </Dialog>
    );
}

export default PopUp;