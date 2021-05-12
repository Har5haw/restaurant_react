import React from "react";
import NavigationBar from "../../molecules/NavigationBar/index";
import ItemsList from "../../organisms/ItemList";
import TablesList from "../../organisms/TablesList";
import HomeTemplate from "../../templates/HomeTemplate";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

const HomePage = (props) => {
    const {
        loginWithRedirect,
        user,
        isAuthenticated,
        isLoading,
        logout,
    } = useAuth0();

    const tableData = useSelector((state) => state.tableList);

    const popupData = useSelector((state) => state.popupData);

    return (
        <HomeTemplate
            navigationBarComponent={
                <NavigationBar
                    login={loginWithRedirect}
                    user={user}
                    isAuthenticated={isAuthenticated}
                    isLoading={isLoading}
                    logout={() =>
                        logout({
                            returnTo: window.location.origin,
                        })
                    }
                />
            }
            tableListComponent={
                <TablesList
                    tableData={tableData}
                    popupData={popupData}
                    editablePopup={true}
                />
            }
            itemListComponent={<ItemsList />}
        />
    );
};

export default HomePage;
