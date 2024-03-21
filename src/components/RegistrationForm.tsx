// RegistrationForm.tsx
import React, { useState } from 'react';

const techCategories = ['Web Development', 'Data Science', 'Mobile Apps', 'Cloud Computing'];

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    techCategory: techCategories[0], // default to first category
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target?.name]: e.target?.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Here you'd usually send the data to a server
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="input input-bordered w-full max-w-xs"
      />
      <select
        name="techCategory"
        value={formData.techCategory}
        onChange={handleChange}
        className="select select-bordered w-full max-w-xs"
      >
        {techCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegistrationForm;
