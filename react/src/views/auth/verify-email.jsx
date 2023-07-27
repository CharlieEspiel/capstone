import React from 'react';

const GuestLayout = ({ children }) => {
  // We can use state here if needed

  return <div>{children}</div>;
};

const EmailVerificationMessage = () => {
  const handleResendVerificationEmail = (e) => {
    e.preventDefault();
    // Handle resend verification email here
    console.log('Resend verification email');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    // Handle logout here
    console.log('Log out');
  };

  return (
    <GuestLayout>
      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
      </div>

      {/* Conditional rendering for verification link sent message */}
      {sessionStorage.getItem('status') === 'verification-link-sent' && (
        <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
          A new verification link has been sent to the email address you provided during registration.
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <form onSubmit={handleResendVerificationEmail}>
          {/* We don't need @csrf in React, as it is a Laravel Blade directive */}
          <button type="submit">Resend Verification Email</button>
        </form>

        <form onSubmit={handleLogout}>
          {/* We don't need @csrf in React, as it is a Laravel Blade directive */}
          <button type="submit" className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
            Log Out
          </button>
        </form>
      </div>
    </GuestLayout>
  );
};

export default EmailVerificationMessage;
