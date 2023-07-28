import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./views/auth/Login";
import AdminPage from "./views/AdminPage";
import SignupPage from "./views/SignupPage";

//import ErrorPage from "./views/layouts/ErrPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignupPage />,
    },
    {
        path: "/dashboard",
        element: <AdminPage />,
    },
    // {
    //     path: "*",
    //     element: <ErrorPage />,
    // },
]);

export default router;
