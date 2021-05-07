import { Box, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import TableComp from '../../molecules/Table';
import SearchBar from '../../atoms/SeachBar/index';
import PopUpMolecule from '../../molecules/PopUp';

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
        setDialogData({ ...tables[index], tableIndex: index });
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
        let [existItem] = copy[index].items.filter((ele) => ele.id === item.id);
        if (existItem) {
            existItem.servings++;
            copy[index].totalPrice = copy[index].totalPrice + item.itemPrice;
            setTables(copy);
            return;
        }
        copy[index].totalItems += 1;
        copy[index].items.push({ ...item, servings: 1 });
        copy[index].totalPrice = copy[index].totalPrice + item.itemPrice;
        setTables(copy);
    }

    const drop = (event, index) => {
        event.preventDefault();
        addItem(index, JSON.parse(event.dataTransfer.getData("itemData")));
    }

    const onServingsChange = (event, itemIndex) => {
        let servings = event.target.value;
        let copy = [...tables];
        let table = copy[dialogData.tableIndex];

        if (servings > 0) {
            table.totalPrice += (servings - table.items[itemIndex].servings) * table.items[itemIndex].itemPrice;
            table.items[itemIndex].servings = servings;
            setTables(copy);
            return;
        }
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
            <PopUpMolecule
                open={open}
                close={close}
                items={dialogData.items}
                tableName={dialogData.tableName}
                totalPrice={dialogData.totalPrice}
                onServingsChange={onServingsChange}
            />
            <Box className={style.list}>
                {
                    tables.map((element, index) => (
                        <TableComp
                            id={"table-" + index}
                            key={"table-" + index}
                            onDragOver={allowDrop}
                            onDrop={(event) => drop(event, index)}
                            onClick={() => click(index)}
                            {...element}
                        />
                    ))
                }
            </Box>
        </Box>
    )
}

export default TablesList;