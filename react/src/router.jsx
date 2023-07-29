import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./views/auth/Login";
import AdminPage from "./views/AdminPage";
import SignupPage from "./views/SignupPage";
import TrackPage from "./views/TrackPage";
import ForgotPasswordForm from "./views/auth/forgot-password";

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
    {
        path: "/track",
        element: <TrackPage />,
    },
    {
        path: "/reset",
        element: <ForgotPasswordForm />,
    },

    // {
    //     path: "*",
    //     element: <ErrorPage />,
    // },
]);

export default router;
