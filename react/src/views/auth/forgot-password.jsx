import React from 'react';

const GuestLayout = ({ children }) => {
  // We can use state here if needed

  return <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
    {children}
  </div>;
};

const ForgotPasswordForm = () => {
  return (
    <div className="relative w-full h-screen bg-[#111827] flex flex-col items-center justify-center">
      <img src="./src/assets/white-logo.png" alt="logo" className="img-fluid h-16" />
      <div className="w-[450px] mx-auto h-max m-10 rounded-lg bg-[#1F2937]  text-white p-6 py-4">
        <GuestLayout>
          <div className='mb-2 text-white/80'>
            Forgot your password? No problem. Just let us know your email address, and we will email you a password reset link that will allow you to choose a new one.
          </div>

          {/* Session Status */}
          {/* We don't need to implement the equivalent of x-auth-session-status in React, as it is specific to Laravel Blade */}

          <form method="POST" action="{{ route('password.email') }}">
            {/* We don't need @csrf in React, as it is a Laravel Blade directive */}

            {/* Email Address */}
            <div>
              <label htmlFor="email" className='text-white/80'>Email</label>
              <input
                id="email"
                className="block mt-2 w-full text-gray-900 p-2 rounded "
                type="email"
                name="email"
                // The old('email') equivalent in Laravel Blade is handled through React state if needed
                required
                autoFocus
              />

              {/* Display errors if any */}
              {/* For simplicity, we won't be implementing the equivalent of @error or $errors->get() in React */}
            </div>

            <div className="flex items-center justify-end mt-4 gap-3">
            <a
                            href="/login"
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Back to Login
                        </a>

              <button
                className="py-2 px-3 rounded bg-white text-gray-700 font-semibold text-xs leading-3 tracking-wide"
                type="submit"
              >
                Email Password Reset Link
              </button>
            </div>
          </form>
        </GuestLayout>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
