import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Table, TableBody, TableCell, TableContainer, OutlinedInput, TableHead, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import TableComp from '../../molecules/Table';
import SearchBar from '../../atoms/SeachBar/index';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles(() => (
    {
        root: {
            height: "100vh",
            backgroundColor: "white",
            width: "30vw",
            overflow: "hidden"
        },
        input: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        inputField: {
            width: "25vw",
            margin: "20px 0px",
            height: "50px"
        },
        list: {
            height: "calc(100vh - 90px)",
            overflowY: "auto"
        }
    })
);
const TablesList = (props) => {

    const [tables, setTables] = useState([...props.list]);
    const [open, setOpen] = useState(false);
    const [dialogData, setDialogData] = useState({ items: [] });

    const style = useStyles();
    var timer;
    let search_table_text = "";

    const handleKeyUp = (event) => {
        let val = event.target.value;
        search_table_text = val;
        clearTimeout(timer);
        timer = setTimeout(doneTypingTables, 400);
    }

    const click = (index) => {
        setDialogData({ ...tables[index] });
        setOpen(true);
    }

    const close = () => {
        setOpen(false);
    }

    const doneTypingTables = () => {
        if (search_table_text.length > 0) {
            let searchResult = tables.filter((table) => table.tableName.toLowerCase().includes(search_table_text))
            setTables(searchResult);
        } else {
            setTables([...props.list]);
        }
    }

    const allowDrop = (event) => {
        event.preventDefault();
    }

    const addItem = (index, item) => {
        let copy = [...tables];
        copy[index].totalItems += 1;
        copy[index].items.push({ ...item, servings: 1 });
        copy[index].totalPrice = copy[index].totalPrice + item.itemPrice;
        setTables(copy);
    }

    const drop = (event, index) => {
        event.preventDefault();
        addItem(index, JSON.parse(event.dataTransfer.getData("itemData")));
    }

    return (
        <Box className={style.root}>
            <Box className={style.input}>
                <SearchBar
                    placeholder="Search by Table Name"
                    onKeyUp={handleKeyUp}
                    className={style.inputField}
                />
            </Box>
            <Dialog open={open} onClose={close} >
                <DialogTitle onClose={close}>
                    Table Name: {dialogData.tableName}
                </DialogTitle>
                <DialogContent dividers>
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
                                {dialogData.items.map((row, index) => (
                                    <TableRow key={"table-item-" + index}>
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="left">{row.itemName}</TableCell>
                                        <TableCell align="left">{row.itemPrice}</TableCell>
                                        <TableCell align="left"><OutlinedInput value={row.servings} type="number" /></TableCell>
                                        <TableCell align="left"><Delete /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={close} color="primary">
                        close
                    </Button>
                </DialogActions>
            </Dialog>
            <Box className={style.list}>
                {
                    tables.map((element, index) => (
                        <TableComp
                            id={"table-" + index}
                            key={"table-" + index}
                            onDragOver={allowDrop}
                            onDrop={(event) => drop(event, index)}
                            {...element}
                            onClick={() => click(index)}
                        />
                    ))
                }
            </Box>
        </Box>
    )
}

export default TablesList;