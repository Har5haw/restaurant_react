import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    OutlinedInput,
    TableHead,
    TableRow,
    Box,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const PopupData = (props) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Servings</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.items.map((row, index) => (
                        <TableRow key={"table-item-" + index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{row.itemName}</TableCell>
                            <TableCell>{row.itemPrice}</TableCell>
                            <TableCell>
                                <OutlinedInput
                                    onChange={(event) =>
                                        props.onServingsChange(event, index)
                                    }
                                    defaultValue={row.servings}
                                    type="number"
                                />
                            </TableCell>
                            <TableCell align="left">
                                <Delete
                                    style={{ cursor: "pointer" }}
                                    onClick={(event) =>
                                        props.onDelete(event, index)
                                    }
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PopupData;
