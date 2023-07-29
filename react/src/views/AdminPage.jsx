import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const AdminPage = () => {
    // Retrieve user and token information from the contextProvider
    const { currentUser, userToken, setCurrentUser, setUserToken } =
        useStateContext();

    // If the user is not authenticated (no token), redirect to the home page
    if (!userToken) {
        return <Navigate to="/" />;
    }

    // Handle the logout functionality
    const onLogout = (ev) => {
        ev.preventDefault();
        console.log("logout");
    };

    return <div>AdminPage</div>;
};

export default AdminPage;
