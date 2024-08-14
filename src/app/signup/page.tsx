'use client'
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const data = [
  {
    id: 1,
    label: "First Name",
    type: "text",
    name: "firstName"
  },
  {
    id: 2,
    label: "Last Name",
    type: "text",
    name: "lastName"
  },
  {
    id: 3,
    label: "Email",
    type: "email",
    name: "Email"
  },
  {
    id: 4,
    label: "Mobile Number",
    type: "text",
    name: "MobileNumber"
  },
  {
    id: 5,
    label: "Password",
    type: "password",
    name: "password"
  }
];

const roles = [
  { id: 1, label: "User", value: "user" },
  { id: 2, label: "Admin", value: "admin" },
  { id: 3, label: "Super Admin", value: "superadmin" },
];

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    MobileNumber: "",
    password: "", // Added password field
    role: "" // Added role field
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Store the form data in localStorage
    localStorage.setItem("userdata", JSON.stringify(formData));
    
    // Set the role in cookies
    Cookies.set('role', formData.role);

    // Redirect to login page
    router.push('/login');
  };

  return (
    <div className="bg-white flex items-center flex-col m-5">
      <h1 className="text-[20px] font-bold">SIGNUP PAGE</h1>
      <div className="p-10 flex flex-col gap-3">
        <div className="flex gap-2 flex-col">
          {data.map((item) => (
            <div key={item.id} className="flex gap-2">
              <label className="font-semibold">{item.label}</label>
              <input
                value={formData[item.name] || ""}
                id={item.name}
                type={item.type}
                name={item.name}
                className="border border-black focus:outline-none rounded-[5px]"
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        {/* Role Selection Dropdown */}
        <div className="flex gap-2 flex-col">
          <label className="font-semibold">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border border-black focus:outline-none rounded-[5px]"
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role.id} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-black text-white rounded-[5px] p-2 font-bold"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}