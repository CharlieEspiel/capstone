import { useState } from "react";
import axiosClient from "../../axios.js";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import { Navigate } from "react-router-dom";

const Register = () => {
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
                console.log(data);
                setCurrentUser(data.user);
                setUserToken(data.token);
            })
            .catch((response) => {
                console.log(response);
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
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className="relative w-full h-screen bg-[#111827] flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl">LOGO</h1>
            {error.__html && (
                <div
                    className="bg-red-500 rounded py-2 px-3 text-white"
                    dangerouslySetInnerHTML={error}
                ></div>
            )}
            <div className="w-[450px] mx-auto h-max m-10 rounded-lg bg-[#1F2937]  text-white p-6 py-4">
                <form method="POST" onSubmit={onSubmit} action="#">
                    {" "}
                    {/* <form onSubmit={handleRegister} className="mt-4"> */}
                    {/* Replace "{{ csrf_field() }}" with appropriate CSRF token handling in your React app */}
                    {/* @csrf */}
                    <input type="hidden" name="_token" />{" "}
                    {/*value={Your_CSRF_Token}*/}
                    {/* Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-white"
                        >
                            Name
                        </label>
                        <input
                            id="fullname"
                            className="block mt-2 w-full text-gray-900 p-2 rounded "
                            type="text"
                            name="fullname"
                            value={fullname}
                            onChange={(ev) => setFullname(ev.target.value)}
                            // value={Your_Name_Value} // Replace with your React state or state management value for name
                            // onChange={(e) => Your_Name_OnChange_Handler} // Replace with your name input change handler
                            required
                            autoFocus
                        />

                        {/* Show validation errors, if any */}
                        {/* @error('name') */}
                        {/* <p className="mt-2 text-sm text-red-600">{Your_Name_Error}</p> */}
                    </div>
                    {/* Email Address */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white"
                        >
                            Email
                        </label>
                        <input
                            id="email_confirmation"
                            className="block mt-2 w-full text-gray-900 p-2 rounded "
                            type="email"
                            name="email"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            // value={Your_Email_Value} // Replace with your React state or state management value for email
                            // onChange={(e) => Your_Email_OnChange_Handler} // Replace with your email input change handler
                            required
                        />

                        {/* Show validation errors, if any */}
                        {/* @error('email') */}
                        {/* <p className="mt-2 text-sm text-red-600">{Your_Email_Error}</p> */}
                    </div>
                    {/* Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-white"
                        >
                            Password
                        </label>
                        <input
                            id="password_registration"
                            className="block mt-2 w-full text-gray-900 p-2 rounded "
                            type="password"
                            name="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            // value={Your_Password_Value} // Replace with your React state or state management value for password
                            // onChange={(e) => Your_Password_OnChange_Handler} // Replace with your password input change handler
                            required
                        />

                        {/* Show validation errors, if any */}
                        {/* @error('password') */}
                        {/* <p className="mt-2 text-sm text-red-600">{Your_Password_Error}</p> */}
                    </div>
                    <div className="flex items-center justify-end mt-4 gap-3">
                        <a
                            href="#" //{Your_Login_Route} // Replace with your login route
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Already registered?
                        </a>

                        <button
                            className="py-2 px-3 rounded bg-white text-gray-700 font-semibold text-xs leading-3 tracking-wide"
                            type="submit"
                        >
                            REGISTER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
