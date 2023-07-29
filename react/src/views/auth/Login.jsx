import { useState } from "react";
import axiosClient from "../../axios";
import { useStateContext } from "../../contexts/ContextProvider";

const Login = () => {
    const { setCurrentUser, setUserToken } = useStateContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/login", {
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
                    setError({ __html: finalErrors.join("<br>") });
                }
                console.error(error);
            });
    };

    return (
        <div className="relative w-full h-screen bg-[#111827] flex flex-col items-center justify-center">
            <img src="./src/assets/white-logo.png" alt="logo" className="img-fluid h-16" />
            <div className="w-[450px] mx-auto h-max m-10 rounded-lg bg-[#1F2937]  text-white p-6 py-4">
                {error.__html && (
                    <div
                        className="bg-red-500 rounded py-2 px-3 text-white"
                        dangerouslySetInnerHTML={error}
                    ></div>
                )}

                <form onSubmit={onSubmit} method="POST" action="/login">
                    {" "}
                    {/* Make sure to replace the correct action URL */}
                    {/* CSRF Token */}
                    <input
                        type="hidden"
                        name="_token"
                        value={window.csrf_token}
                    />{" "}
                    {/* Replace 'csrf_token' with the actual token value or use proper method to fetch the CSRF token */}
                    {/* Email Address */}
                    <div className="text">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            className="block mt-2 w-full text-gray-900 p-2 rounded "
                            type="email"
                            name="email"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            required
                            autoFocus
                            autoComplete="username"
                        />
                        {/* Display errors here if any */}
                    </div>
                    {/* Password */}
                    <div className="mt-4">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            className="block mt-2 w-full text-gray-900 p-2 rounded "
                            type="password"
                            name="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            required
                            autoComplete="current-password"
                        />
                        {/* Display errors here if any */}
                    </div>
                    {/* Remember Me */}
                    <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center"
                        >
                            <input
                                id="remember_me"
                                type="checkbox"
                                className=" dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
                                name="remember"
                            />
                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                Remember me
                            </span>
                        </label>
                    </div>
                    <div className="flex items-center justify-end mt-4 gap-3">
                        {/* Replace the 'route' function with the appropriate URL for password reset */}
                        <a
                            href="/reset"
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </a>

                        <button
                            className="py-2 px-3 rounded bg-white text-gray-700 font-semibold text-xs leading-3 tracking-wide"
                            type="submit"
                        >
                            LOG IN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
