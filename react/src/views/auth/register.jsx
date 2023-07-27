import React, { useState } from 'react';

const GuestLayout = ({ children }) => {
  // We can use state here if needed

  return <div>{children}</div>;
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
  };

  return (
    <GuestLayout>
      <form onSubmit={handleSubmit}>
        {/* We don't need @csrf in React, as it is a Laravel Blade directive */}

        {/* Name */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="block mt-1 w-full"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoFocus
            autoComplete="name"
          />

          {/* Display errors if any */}
          {/* For simplicity, we won't be implementing the equivalent of @error or $errors->get() in React */}
        </div>

        {/* Email Address */}
        <div className="mt-4">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="block mt-1 w-full"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="username"
          />

          {/* Display errors if any */}
          {/* For simplicity, we won't be implementing the equivalent of @error or $errors->get() in React */}
        </div>

        {/* Password */}
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="block mt-1 w-full"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />

          {/* Display errors if any */}
          {/* For simplicity, we won't be implementing the equivalent of @error or $errors->get() in React */}
        </div>

        {/* Confirm Password */}
        <div className="mt-4">
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input
            id="password_confirmation"
            className="block mt-1 w-full"
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />

          {/* Display errors if any */}
          {/* For simplicity, we won't be implementing the equivalent of @error or $errors->get() in React */}
        </div>

        <div className="flex items-center justify-end mt-4">
          <a
            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            href="#"
          >
            Already registered?
          </a>

          <button type="submit" className="ml-4">
            Register
          </button>
        </div>
      </form>
    </GuestLayout>
  );
};

export default RegistrationForm;
