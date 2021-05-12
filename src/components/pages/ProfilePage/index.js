import React from "react";
import PropTypes from "prop-types";
import ProfileTemplate from "../../templates/ProfileTemplate";
import NavigationBar from "../../atoms/NavigationBar";
import { Box } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import TablesList from "../../organisms/TablesList";

ProfilePage.propTypes = {};

function ProfilePage(props) {
    const {
        loginWithRedirect,
        user,
        isAuthenticated,
        isLoading,
        logout,
    } = useAuth0();

    const tableData = useSelector((state) => state.waiterServingsList);

    const popupDataForWaiterServings = useSelector(
        (state) => state.popupDataForWaiterServings
    );

    return (
        <ProfileTemplate
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
                    popupData={popupDataForWaiterServings}
                />
            }
            profileComponent={<Box />}
        />
    );
}

export default ProfilePage;
