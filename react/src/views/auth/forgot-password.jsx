import React from 'react';

const GuestLayout = ({ children }) => {
  // We can use state here if needed

  return <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
    {children}
  </div>;
};

const ForgotPasswordForm = () => {
  return (
    <GuestLayout>
      <div>
        Forgot your password? No problem. Just let us know your email address, and we will email you a password reset link that will allow you to choose a new one.
      </div>

      {/* Session Status */}
      {/* We don't need to implement the equivalent of x-auth-session-status in React, as it is specific to Laravel Blade */}

      <form method="POST" action="{{ route('password.email') }}">
        {/* We don't need @csrf in React, as it is a Laravel Blade directive */}

        {/* Email Address */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="block mt-1 w-full"
            type="email"
            name="email"
            // The old('email') equivalent in Laravel Blade is handled through React state if needed
            required
            autoFocus
          />

          {/* Display errors if any */}
          {/* For simplicity, we won't be implementing the equivalent of @error or $errors->get() in React */}
        </div>

        <div className="flex items-center justify-end mt-4">
          <button type="submit">
            Email Password Reset Link
          </button>
        </div>
      </form>
    </GuestLayout>
  );
};

export default ForgotPasswordForm;
