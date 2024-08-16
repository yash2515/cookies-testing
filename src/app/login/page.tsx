'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const data = [
  {
    id: 1,
    label: "Email",
    type: "email",
    name: "Email"
  },
  {
    id: 2,
    label: "Password",
    type: "password",
    name: "password"
  }
];

const defaultUsers = [
  {
    firstName: "Default",
    lastName: "Admin",
    Email: "admin@example.com",
    MobileNumber: "1234567890",
    password: "admin123",
    role: "admin"
  },
  {
    firstName: "Default",
    lastName: "User",
    Email: "user@example.com",
    MobileNumber: "0987654321",
    password: "user123",
    role: "user"
  }
];

const Login = () => {
  const [login, setLogin] = useState({ Email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Retrieve data from localStorage or use default users
    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      setUsers(JSON.parse(storedData));
    } else {
      setUsers(defaultUsers); // Use default users if no stored data
    }
  }, []);

  useEffect(() => {
    // Check login credentials against all stored users
    const user = users.find(
      (user) => user.Email === login.Email && user.password === login.password
    );

    if (user) {
      setIsAuthenticated(true);
      Cookies.set('role', user.role); // Set the role in cookies
    } else {
      setIsAuthenticated(false);
    }
  }, [login, users]);

  const handleClick = () => {
    if (isAuthenticated) {
      Cookies.set('token', 'your-auth-token', { expires: 1 }); // Set a token in cookies
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white flex items-center flex-col m-5">
      <h1 className="text-[20px] font-bold">LOG-IN PAGE</h1>

      {/* Display Default Users */}
      <div className="bg-gray-100 p-4 rounded-[5px] mb-5">
        <h2 className="text-[16px] font-bold mb-2">Default Users</h2>
        {defaultUsers.map((user, index) => (
          <div key={index} className="mb-2">
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Email:</strong> {user.Email}</p>
            <p><strong>Password:</strong> {user.password}</p>
          </div>
        ))}
      </div>

      <div className="p-10 flex flex-col gap-3">
        <div className="flex gap-2 flex-col">
          {data.map((item) => (
            <div key={item.id} className="flex gap-2">
              <label className="font-semibold">{item.label}</label>
              <input
                value={login[item.name] || ""}
                id={item.name}
                type={item.type}
                name={item.name}
                className="border border-black focus:outline-none rounded-[5px]"
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <Link
          href={isAuthenticated ? "/dashboard" : "/signup"}
          className="bg-black text-white rounded-[5px] p-2 font-bold text-center"
          onClick={handleClick}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
