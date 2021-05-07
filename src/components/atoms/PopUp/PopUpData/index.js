import React from 'react';
import { Table, TableBody, TableCell, TableContainer, OutlinedInput, TableHead, TableRow } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const PopupData = (props) => {
    return (
        <TableContainer >
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell align="left">Item Name</TableCell>
                        <TableCell align="left">Item Price</TableCell>
                        <TableCell align="left">Servings</TableCell>
                        <TableCell align="left">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.items.map((row, index) => (
                        <TableRow key={"table-item-" + index}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align="left">{row.itemName}</TableCell>
                            <TableCell align="left">{row.itemPrice}</TableCell>
                            <TableCell align="left"><OutlinedInput onChange={(event) => props.onServingsChange(event, index)} defaultValue={row.servings} type="number" /></TableCell>
                            <TableCell align="left"><Delete style={{ cursor: "pointer" }} onClick={(event) => props.onDelete(event, index)} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PopupData;