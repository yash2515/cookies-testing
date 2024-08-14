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
type Role = 'admin' | 'user' ;

const defaultUsers = {
  admin: {
    Email: "admin.com",
    password: "123"
  },
  user: {
    Email: "yashsutariya.com",
    password: "123"
  },
};

const Login = ({}) => {
  const [login, setLogin] = useState<{ Email: string; password: string }>({
    Email: "",
    password: ""
  });

  const [formData, setFormData] = useState<{ Email: string; password: string }>({
    Email: "",
    password: ""
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    } else {
      // Set default user data if nothing is in localStorage
      const defaultUser = defaultUsers[role];
      localStorage.setItem(`userdata-${role}`, JSON.stringify(defaultUser));
      setFormData(defaultUser)
    }
  }, []);

  useEffect(() => {
    // Check login credentials
    if (login.Email === formData.Email && login.password === formData.password) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [login, formData]);

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
