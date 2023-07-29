import { useState } from "react";
import axiosClient from "../axios.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import { Navigate } from "react-router-dom";

const SignupPage = () => {
    const { setCurrentUser, setUserToken } = useStateContext();
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/signup", {
                name: fullname,
                email,
                password,
            })
            .then(({ data }) => {
                setCurrentUser(data.user);
                setUserToken(data.token);
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(
                        error.response.data.errors
                    ).reduce((accum, next) => [...accum, ...next], []);
                    console.log(finalErrors);
                    setError({ __html: finalErrors.join("<br>") });
                }
                console.error(error);
            });
    };

    const { userToken } = useStateContext();
    if (userToken) {
        return <Navigate to="/" />;
    }

    return (
        <div className="relative w-full h-screen bg-[#111827] flex flex-col items-center justify-center">
            <img src="./src/assets/white-logo.png" alt="logo" className="img-fluid h-16" />
            <div className="w-[450px] mx-auto h-max m-10 rounded-lg bg-[#1F2937]  text-white p-6 py-4">
                {error.__html && (
                    <div
                        className="bg-red-500 rounded py-2 px-3 text-white"
                        dangerouslySetInnerHTML={error}
                    ></div>
                )} <form
                    className="mb-4"
                    onSubmit={onSubmit}
                    method="POST"
                >
                    <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                    {error.__html && (
                        <div
                            className="bg-red-500 rounded py-2 px-3 text-white"
                            dangerouslySetInnerHTML={error}
                        ></div>
                    )}
                    <div className="mb-4">
                        <label
                            className="block text-white text-sm  mb-2"
                            htmlFor="fullName"
                        >
                            Full Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="fullName"
                            value={fullname}
                            onChange={(ev) => setFullname(ev.target.value)}
                            type="text"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-white text-sm  mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-white text-sm  mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            type="password"
                            placeholder="********"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-end mt-4 gap-3">
                       
                        <a
                            href="/login"
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Already Registered?
                        </a>

                        <button
                            className="py-2 px-3 rounded bg-white text-gray-700 font-semibold text-xs leading-3 tracking-wide"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
