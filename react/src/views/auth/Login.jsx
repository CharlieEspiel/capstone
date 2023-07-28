import React from 'react';

const Login = () => {
    return (
        <div className="w-full h-screen bg-red m-0 p-0 mx-auto">
            <div className='w-[400px] mx-auto h-[300px] my-10 rounded-lg bg-blue-gray-400 p-5 py-10'>
                {/* Session Status */}

                <form method="POST" action="/login"> {/* Make sure to replace the correct action URL */}
                    {/* CSRF Token */}
                    <input type="hidden" name="_token" value={window.csrf_token} /> {/* Replace 'csrf_token' with the actual token value or use proper method to fetch the CSRF token */}

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            className="block mt-1 w-full"
                            type="email"
                            name="email"
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
                            className="block mt-1 w-full"
                            type="password"
                            name="password"
                            required
                            autoComplete="current-password"
                        />
                        {/* Display errors here if any */}
                    </div>

                    {/* Remember Me */}
                    <div className="block mt-4">
                        <label htmlFor="remember_me" className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                className="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
                                name="remember"
                            />
                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                Remember me
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {/* Replace the 'route' function with the appropriate URL for password reset */}
                        <a
                            href="/password/reset"
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </a>

                        <button className="ml-3" type="submit">
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
