import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router";

import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <ContextProvider>
                <RouterProvider router={router} />
            </ContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);
