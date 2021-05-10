import React from "react";
import NavigationBar from "../../atoms/NavigationBar";
import ItemsList from "../../organisms/ItemList";
import TablesList from "../../organisms/TablesList";
import HomeTemplate from "../../templates/Home";

const HomePage = (props) => {
    return (
        <HomeTemplate
            navigationBarComponent={<NavigationBar />}
            tableListComponent={<TablesList />}
            itemListComponent={<ItemsList />}
        />
    );
};

export default HomePage;
