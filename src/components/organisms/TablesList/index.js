import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import TableComp from "../../molecules/Table";
import SearchBar from "../../atoms/SeachBar/index";
import PopUpMolecule from "../../molecules/PopUp";

const useStyles = makeStyles(() => ({
    root: {
        height: "93vh",
        backgroundColor: "white",
        width: "30vw",
        overflow: "hidden",
    },
    input: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(51, 63, 62)",
    },
    inputField: {
        width: "25vw",
        margin: "20px 0px",
        height: "50px",
        background: "white",
    },
    list: {
        height: "calc(93vh - 90px)",
        overflowY: "auto",
    },
}));

const TablesList = (props) => {
    const data = [...props.list];
    const [tables, setTables] = useState(data);
    const [open, setOpen] = useState(false);
    const [dialogData, setDialogData] = useState({ items: [] });

    const style = useStyles();
    let timer;
    let search_table_text = "";

    const handleKeyUp = (event) => {
        search_table_text = event.target.value;
        clearTimeout(timer);
        timer = setTimeout(doneTypingTables, 400);
    };

    const click = (index) => {
        setDialogData({ ...tables[index], tableIndex: index });
        setOpen(true);
    };

    const close = () => {
        setOpen(false);
    };

    const doneTypingTables = () => {
        if (search_table_text.length > 0) {
            setTables(
                tables.filter((table) =>
                    table.tableName.toLowerCase().includes(search_table_text)
                )
            );
        } else {
            setTables([...props.list]);
        }
    };

    const allowDrop = (event) => {
        event.preventDefault();
    };

    const addItem = (index, item) => {
        const copy = [...tables];
        const [existItem] = copy[index].items.filter(
            (ele) => ele.id === item.id
        );
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
    };

    const drop = (event, index) => {
        event.preventDefault();
        addItem(index, JSON.parse(event.dataTransfer.getData("itemData")));
    };

    const onServingsChange = (event, itemIndex) => {
        const servings = event.target.value;
        const copy = [...tables];
        const table = copy[dialogData.tableIndex];

        if (servings > 0) {
            table.totalPrice +=
                (servings - table.items[itemIndex].servings) *
                table.items[itemIndex].itemPrice;
            table.items[itemIndex].servings = servings;
            setTables(copy);
            setDialogData({
                ...copy[dialogData.tableIndex],
                tableIndex: dialogData.tableIndex,
            });
            return;
        }
    };

    const onDelete = (event, itemIndex) => {
        const copy = [...tables];
        const table = copy[dialogData.tableIndex];
        table.totalItems -= 1;
        table.totalPrice -=
            table.items[itemIndex].itemPrice * table.items[itemIndex].servings;
        table.items.splice(itemIndex, 1);
        setTables(copy);
        setDialogData({
            ...copy[dialogData.tableIndex],
            tableIndex: dialogData.tableIndex,
        });
        if (table.items.length === 0) {
            setOpen(false);
        }
    };

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
                onDelete={onDelete}
            />
            <Box className={style.list}>
                {tables.map((element, index) => (
                    <TableComp
                        id={"table-" + index}
                        key={"table-" + index}
                        onDragOver={allowDrop}
                        onDrop={(event) => drop(event, index)}
                        onClick={() => click(index)}
                        data={element}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default TablesList;
